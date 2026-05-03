import { Router, type IRouter } from "express";
import { eq, desc } from "drizzle-orm";
import { db, attendanceTable, membersTable } from "@workspace/db";
import { ListAttendanceResponse, MarkAttendanceBody } from "@workspace/api-zod";
import { makeId } from "../lib/ids";

const router: IRouter = Router();

router.get("/attendance", async (_req, res): Promise<void> => {
  const rows = await db
    .select({ a: attendanceTable, m: membersTable })
    .from(attendanceTable)
    .leftJoin(membersTable, eq(attendanceTable.memberId, membersTable.id))
    .orderBy(desc(attendanceTable.checkIn))
    .limit(200);
  const out = rows.map(({ a, m }) => ({
    ...a,
    memberName: m?.name ?? "Unknown",
    memberAvatar: m?.avatarUrl ?? null,
  }));
  res.json(ListAttendanceResponse.parse(out));
});

router.post("/attendance", async (req, res): Promise<void> => {
  const parsed = MarkAttendanceBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [member] = await db
    .select()
    .from(membersTable)
    .where(eq(membersTable.id, parsed.data.memberId));
  if (!member) {
    res.status(404).json({ error: "Member not found" });
    return;
  }
  const [row] = await db
    .insert(attendanceTable)
    .values({
      id: makeId("A"),
      memberId: parsed.data.memberId,
      source: parsed.data.source ?? "manual",
    })
    .returning();
  res.status(201).json({
    ...row,
    memberName: member.name,
    memberAvatar: member.avatarUrl,
  });
});

router.patch("/attendance/:id/check-out", async (req, res): Promise<void> => {
  const [row] = await db
    .update(attendanceTable)
    .set({ checkOut: new Date() })
    .where(eq(attendanceTable.id, req.params.id))
    .returning();
  if (!row) {
    res.status(404).json({ error: "Attendance record not found" });
    return;
  }
  const [member] = await db
    .select()
    .from(membersTable)
    .where(eq(membersTable.id, row.memberId));
  res.json({
    ...row,
    memberName: member?.name ?? "Unknown",
    memberAvatar: member?.avatarUrl ?? null,
  });
});

export default router;
