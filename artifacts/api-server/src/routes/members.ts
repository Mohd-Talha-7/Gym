import { Router, type IRouter } from "express";
import { eq, desc, lt, and, gte, sql } from "drizzle-orm";
import {
  db,
  membersTable,
  billsTable,
  attendanceTable,
  bodyAnalysisTable,
  memberNotesTable,
  memberDocumentsTable,
  workoutPlansTable,
  nutritionPlansTable,
} from "@workspace/db";
import {
  ListMembersResponse,
  CreateMemberBody,
  UpdateMemberBody,
  GetMemberResponse,
  ListInconsistentMembersResponse,
  ListCelebrationsResponse,
  ListMemberBillsResponse,
  ListMemberAttendanceResponse,
  ListMemberBodyAnalysisResponse,
  CreateMemberBodyAnalysisBody,
  ListMemberNotesResponse,
  CreateMemberNoteBody,
  ListMemberDocumentsResponse,
  ListMemberWorkoutPlansResponse,
  ListMemberNutritionPlansResponse,
  CreateMemberDocumentBody,
  CreateMemberWorkoutPlanBody,
  CreateMemberNutritionPlanBody,
} from "@workspace/api-zod";
import { makeId } from "../lib/ids";

const router: IRouter = Router();

router.get("/members", async (_req, res): Promise<void> => {
  const rows = await db.select().from(membersTable).orderBy(desc(membersTable.createdAt));
  res.json(ListMembersResponse.parse(rows));
});

router.get("/members/inconsistent", async (_req, res): Promise<void> => {
  const sevenDaysAgo = new Date(Date.now() - 7 * 86400000);
  const recent = await db
    .select({ memberId: attendanceTable.memberId })
    .from(attendanceTable)
    .where(gte(attendanceTable.checkIn, sevenDaysAgo));
  const activeMemberIds = new Set(recent.map((r) => r.memberId));
  const all = await db.select().from(membersTable).where(eq(membersTable.status, "active"));
  const inconsistent = all.filter((m) => !activeMemberIds.has(m.id));
  res.json(ListMembersResponse.parse(inconsistent));
});

router.get("/members/celebrations", async (_req, res): Promise<void> => {
  const all = await db.select().from(membersTable);
  const now = new Date();
  const next30 = new Date(now.getTime() + 30 * 86400000);
  const items: Array<{
    id: string;
    name: string;
    type: string;
    date: string;
    phone: string;
    avatarUrl: string;
  }> = [];
  for (const m of all) {
    if (m.dob) {
      const dobThisYear = new Date(now.getFullYear(), m.dob.getMonth(), m.dob.getDate());
      if (dobThisYear >= now && dobThisYear <= next30) {
        items.push({
          id: m.id,
          name: m.name,
          type: "Birthday",
          date: dobThisYear.toLocaleDateString("en-IN", { day: "numeric", month: "short" }),
          phone: m.phone,
          avatarUrl: m.avatarUrl,
        });
      }
    }
    const annivThisYear = new Date(now.getFullYear(), m.joinDate.getMonth(), m.joinDate.getDate());
    if (annivThisYear >= now && annivThisYear <= next30) {
      items.push({
        id: m.id,
        name: m.name,
        type: "Anniversary",
        date: annivThisYear.toLocaleDateString("en-IN", { day: "numeric", month: "short" }),
        phone: m.phone,
        avatarUrl: m.avatarUrl,
      });
    }
  }
  res.json(ListCelebrationsResponse.parse(items));
});

router.post("/members", async (req, res): Promise<void> => {
  const parsed = CreateMemberBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const expiry = new Date();
  expiry.setMonth(expiry.getMonth() + 1);
  const id = makeId("M");
  const [row] = await db
    .insert(membersTable)
    .values({
      id,
      ...parsed.data,
      expiryDate: expiry,
      avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(parsed.data.name)}`,
    })
    .returning();
  res.status(201).json(GetMemberResponse.parse(row));
});

router.get("/members/:id", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const [row] = await db.select().from(membersTable).where(eq(membersTable.id, id));
  if (!row) {
    res.status(404).json({ error: "Member not found" });
    return;
  }
  res.json(GetMemberResponse.parse(row));
});

router.patch("/members/:id", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const parsed = UpdateMemberBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [row] = await db
    .update(membersTable)
    .set(parsed.data)
    .where(eq(membersTable.id, id))
    .returning();
  if (!row) {
    res.status(404).json({ error: "Member not found" });
    return;
  }
  res.json(GetMemberResponse.parse(row));
});

router.delete("/members/:id", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  await db.delete(membersTable).where(eq(membersTable.id, id));
  res.sendStatus(204);
});

router.get("/members/:id/bills", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const rows = await db
    .select({ b: billsTable, m: membersTable })
    .from(billsTable)
    .leftJoin(membersTable, eq(billsTable.memberId, membersTable.id))
    .where(eq(billsTable.memberId, id))
    .orderBy(desc(billsTable.createdAt));
  const out = rows.map(({ b, m }) => ({
    ...b,
    memberName: m?.name ?? "",
    balance: b.amount - b.paid,
  }));
  res.json(ListMemberBillsResponse.parse(out));
});

router.get("/members/:id/attendance", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const rows = await db
    .select({ a: attendanceTable, m: membersTable })
    .from(attendanceTable)
    .leftJoin(membersTable, eq(attendanceTable.memberId, membersTable.id))
    .where(eq(attendanceTable.memberId, id))
    .orderBy(desc(attendanceTable.checkIn));
  const out = rows.map(({ a, m }) => ({
    ...a,
    memberName: m?.name ?? "",
    memberAvatar: m?.avatarUrl ?? null,
  }));
  res.json(ListMemberAttendanceResponse.parse(out));
});

router.get("/members/:id/body-analysis", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const rows = await db
    .select()
    .from(bodyAnalysisTable)
    .where(eq(bodyAnalysisTable.memberId, id))
    .orderBy(desc(bodyAnalysisTable.recordedAt));
  res.json(ListMemberBodyAnalysisResponse.parse(rows));
});

router.post("/members/:id/body-analysis", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const parsed = CreateMemberBodyAnalysisBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [row] = await db
    .insert(bodyAnalysisTable)
    .values({ id: makeId("BA"), memberId: id, ...parsed.data })
    .returning();
  res.status(201).json(row);
});

router.get("/members/:id/notes", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const rows = await db
    .select()
    .from(memberNotesTable)
    .where(eq(memberNotesTable.memberId, id))
    .orderBy(desc(memberNotesTable.createdAt));
  res.json(ListMemberNotesResponse.parse(rows));
});

router.post("/members/:id/notes", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const parsed = CreateMemberNoteBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [row] = await db
    .insert(memberNotesTable)
    .values({
      id: makeId("N"),
      memberId: id,
      body: parsed.data.body,
      author: parsed.data.author ?? "Staff",
    })
    .returning();
  res.status(201).json(row);
});

router.get("/members/:id/documents", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const rows = await db
    .select()
    .from(memberDocumentsTable)
    .where(eq(memberDocumentsTable.memberId, id))
    .orderBy(desc(memberDocumentsTable.uploadedAt));
  res.json(ListMemberDocumentsResponse.parse(rows));
});

router.post("/members/:id/documents", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const parsed = CreateMemberDocumentBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [row] = await db
    .insert(memberDocumentsTable)
    .values({
      id: makeId("DOC"),
      memberId: id,
      name: parsed.data.name,
      type: parsed.data.type,
      status: parsed.data.status ?? "Pending",
      uploadedBy: parsed.data.uploadedBy ?? "Staff",
      note: parsed.data.note ?? null,
    })
    .returning();
  res.status(201).json(row);
});

router.get("/members/:id/workout-plans", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const rows = await db
    .select()
    .from(workoutPlansTable)
    .where(eq(workoutPlansTable.memberId, id));
  res.json(ListMemberWorkoutPlansResponse.parse(rows));
});

router.post("/members/:id/workout-plans", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const parsed = CreateMemberWorkoutPlanBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [row] = await db
    .insert(workoutPlansTable)
    .values({
      id: makeId("WP"),
      memberId: id,
      name: parsed.data.name,
      weeks: parsed.data.weeks,
      active: parsed.data.active ?? true,
      trainerNote: parsed.data.trainerNote,
      days: parsed.data.days,
    })
    .returning();
  res.status(201).json(row);
});

router.get("/members/:id/nutrition-plans", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const rows = await db
    .select()
    .from(nutritionPlansTable)
    .where(eq(nutritionPlansTable.memberId, id));
  res.json(ListMemberNutritionPlansResponse.parse(rows));
});

router.post("/members/:id/nutrition-plans", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const parsed = CreateMemberNutritionPlanBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [row] = await db
    .insert(nutritionPlansTable)
    .values({
      id: makeId("NP"),
      memberId: id,
      name: parsed.data.name,
      calories: parsed.data.calories,
      active: parsed.data.active ?? true,
      macros: parsed.data.macros,
      meals: parsed.data.meals,
    })
    .returning();
  res.status(201).json(row);
});

export default router;
