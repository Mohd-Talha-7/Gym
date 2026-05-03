import { Router, type IRouter } from "express";
import { eq, desc } from "drizzle-orm";
import { db, billsTable, membersTable } from "@workspace/db";
import {
  ListBillsResponse,
  CreateBillBody,
  UpdateBillBody,
} from "@workspace/api-zod";
import { makeId } from "../lib/ids";

const router: IRouter = Router();

router.get("/bills", async (_req, res): Promise<void> => {
  const rows = await db
    .select({ b: billsTable, m: membersTable })
    .from(billsTable)
    .leftJoin(membersTable, eq(billsTable.memberId, membersTable.id))
    .orderBy(desc(billsTable.createdAt));
  const out = rows.map(({ b, m }) => ({
    ...b,
    memberName: m?.name ?? "Unknown",
    balance: b.amount - b.paid,
  }));
  res.json(ListBillsResponse.parse(out));
});

router.post("/bills", async (req, res): Promise<void> => {
  const parsed = CreateBillBody.safeParse(req.body);
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
  const amount = parsed.data.items.reduce((s, i) => s + i.amount, 0);
  const paid = parsed.data.paid ?? 0;
  const status = paid >= amount ? "paid" : paid > 0 ? "partial" : "pending";
  const [row] = await db
    .insert(billsTable)
    .values({
      id: makeId("BL"),
      memberId: parsed.data.memberId,
      type: parsed.data.type,
      items: parsed.data.items,
      amount,
      paid,
      status,
      paymentMode: parsed.data.paymentMode ?? null,
      notes: parsed.data.notes ?? null,
    })
    .returning();

  // Update member balance
  const newBalance = member.balanceDue + (amount - paid);
  await db
    .update(membersTable)
    .set({ balanceDue: newBalance })
    .where(eq(membersTable.id, parsed.data.memberId));

  res.status(201).json({
    ...row,
    memberName: member.name,
    balance: amount - paid,
  });
});

router.patch("/bills/:id", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const parsed = UpdateBillBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [existing] = await db.select().from(billsTable).where(eq(billsTable.id, id));
  if (!existing) {
    res.status(404).json({ error: "Bill not found" });
    return;
  }
  const updates = { ...parsed.data };
  if (updates.paid != null) {
    updates.status = updates.paid >= existing.amount ? "paid" : updates.paid > 0 ? "partial" : "pending";
  }
  const [row] = await db
    .update(billsTable)
    .set(updates)
    .where(eq(billsTable.id, id))
    .returning();
  const [member] = await db
    .select()
    .from(membersTable)
    .where(eq(membersTable.id, row.memberId));
  // Recompute member balance: subtract previous outstanding, add new outstanding.
  if (member && updates.paid != null) {
    const previousOutstanding = existing.amount - existing.paid;
    const newOutstanding = row.amount - row.paid;
    const newBalance = Math.max(0, member.balanceDue - previousOutstanding + newOutstanding);
    await db
      .update(membersTable)
      .set({ balanceDue: newBalance })
      .where(eq(membersTable.id, member.id));
  }
  res.json({
    ...row,
    memberName: member?.name ?? "Unknown",
    balance: row.amount - row.paid,
  });
});

export default router;
