import { Router, type IRouter } from "express";
import { eq, sql } from "drizzle-orm";
import {
  db,
  groupClassesTable,
  groupClassBookingsTable,
  membersTable,
} from "@workspace/db";
import {
  CreateGroupClassBody,
  UpdateGroupClassBody,
  BookGroupClassBody,
} from "@workspace/api-zod";
import { makeId } from "../lib/ids";

const router: IRouter = Router();

router.get("/group-classes", async (_req, res): Promise<void> => {
  const rows = await db
    .select({
      c: groupClassesTable,
      bookedCount: sql<number>`COALESCE(COUNT(${groupClassBookingsTable.id}), 0)::int`,
    })
    .from(groupClassesTable)
    .leftJoin(
      groupClassBookingsTable,
      eq(groupClassesTable.id, groupClassBookingsTable.classId),
    )
    .groupBy(groupClassesTable.id);
  res.json(rows.map(({ c, bookedCount }) => ({ ...c, bookedCount: Number(bookedCount ?? 0) })));
});

router.post("/group-classes", async (req, res): Promise<void> => {
  const parsed = CreateGroupClassBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const d = parsed.data;
  const [row] = await db
    .insert(groupClassesTable)
    .values({
      id: makeId("GC"),
      name: d.name,
      category: d.category ?? "Strength",
      trainer: d.trainer,
      capacity: d.capacity ?? 20,
      durationMins: d.durationMins ?? 60,
      scheduledAt: new Date(d.scheduledAt),
      room: d.room ?? "Main Floor",
      status: d.status ?? "scheduled",
    })
    .returning();
  res.status(201).json({ ...row, bookedCount: 0 });
});

router.patch("/group-classes/:id", async (req, res): Promise<void> => {
  const parsed = UpdateGroupClassBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const updates: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(parsed.data)) {
    if (v === null || v === undefined) continue;
    updates[k] = k === "scheduledAt" && typeof v === "string" ? new Date(v) : v;
  }
  const [row] = await db
    .update(groupClassesTable)
    .set(updates)
    .where(eq(groupClassesTable.id, req.params.id))
    .returning();
  if (!row) {
    res.status(404).json({ error: "Class not found" });
    return;
  }
  const [{ count }] = await db
    .select({ count: sql<number>`COUNT(*)::int` })
    .from(groupClassBookingsTable)
    .where(eq(groupClassBookingsTable.classId, row.id));
  res.json({ ...row, bookedCount: Number(count ?? 0) });
});

router.delete("/group-classes/:id", async (req, res): Promise<void> => {
  await db.delete(groupClassBookingsTable).where(eq(groupClassBookingsTable.classId, req.params.id));
  await db.delete(groupClassesTable).where(eq(groupClassesTable.id, req.params.id));
  res.status(204).send();
});

router.get("/group-classes/:id/bookings", async (req, res): Promise<void> => {
  const rows = await db
    .select()
    .from(groupClassBookingsTable)
    .where(eq(groupClassBookingsTable.classId, req.params.id));
  res.json(rows);
});

router.post("/group-classes/:id/bookings", async (req, res): Promise<void> => {
  const parsed = BookGroupClassBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [cls] = await db.select().from(groupClassesTable).where(eq(groupClassesTable.id, req.params.id));
  if (!cls) {
    res.status(404).json({ error: "Class not found" });
    return;
  }
  const [{ count }] = await db
    .select({ count: sql<number>`COUNT(*)::int` })
    .from(groupClassBookingsTable)
    .where(eq(groupClassBookingsTable.classId, req.params.id));
  if (Number(count ?? 0) >= cls.capacity) {
    res.status(409).json({ error: "Class is full" });
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
    .insert(groupClassBookingsTable)
    .values({
      id: makeId("GB"),
      classId: req.params.id,
      memberId: member.id,
      memberName: member.name,
    })
    .returning();
  res.status(201).json(row);
});

export default router;
