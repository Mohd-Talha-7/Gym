import { Router, type IRouter } from "express";
import { lte, gte, and } from "drizzle-orm";
import { db, membersTable } from "@workspace/db";
import { ListRenewalsResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/renewals", async (_req, res): Promise<void> => {
  const now = new Date();
  const in30 = new Date(now.getTime() + 30 * 86400000);
  const rows = await db
    .select()
    .from(membersTable)
    .where(and(gte(membersTable.expiryDate, now), lte(membersTable.expiryDate, in30)));
  const out = rows.map((m) => ({
    memberId: m.id,
    memberName: m.name,
    phone: m.phone,
    plan: m.plan,
    expiryDate: m.expiryDate,
    amountDue: m.balanceDue,
    daysLeft: Math.ceil((m.expiryDate.getTime() - now.getTime()) / 86400000),
  }));
  res.json(ListRenewalsResponse.parse(out));
});

export default router;
