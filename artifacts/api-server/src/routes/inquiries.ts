import { Router, type IRouter } from "express";
import { eq, desc } from "drizzle-orm";
import { db, inquiriesTable, membersTable } from "@workspace/db";
import {
  ListInquiriesResponse,
  CreateInquiryBody,
  UpdateInquiryBody,
  GetInquiryResponse,
  ConvertInquiryResponse,
} from "@workspace/api-zod";
import { makeId } from "../lib/ids";

const router: IRouter = Router();

router.get("/inquiries", async (_req, res): Promise<void> => {
  const rows = await db.select().from(inquiriesTable).orderBy(desc(inquiriesTable.inquiryDate));
  res.json(ListInquiriesResponse.parse(rows));
});

router.post("/inquiries", async (req, res): Promise<void> => {
  const parsed = CreateInquiryBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [row] = await db
    .insert(inquiriesTable)
    .values({
      id: makeId("INQ"),
      ...parsed.data,
      assignedTo: parsed.data.assignedTo ?? "Unassigned",
    })
    .returning();
  res.status(201).json(GetInquiryResponse.parse(row));
});

router.get("/inquiries/:id", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const [row] = await db.select().from(inquiriesTable).where(eq(inquiriesTable.id, id));
  if (!row) {
    res.status(404).json({ error: "Inquiry not found" });
    return;
  }
  res.json(GetInquiryResponse.parse(row));
});

router.patch("/inquiries/:id", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const parsed = UpdateInquiryBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [row] = await db
    .update(inquiriesTable)
    .set(parsed.data)
    .where(eq(inquiriesTable.id, id))
    .returning();
  if (!row) {
    res.status(404).json({ error: "Inquiry not found" });
    return;
  }
  res.json(GetInquiryResponse.parse(row));
});

router.delete("/inquiries/:id", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  await db.delete(inquiriesTable).where(eq(inquiriesTable.id, id));
  res.sendStatus(204);
});

router.post("/inquiries/:id/convert", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const [inq] = await db.select().from(inquiriesTable).where(eq(inquiriesTable.id, id));
  if (!inq) {
    res.status(404).json({ error: "Inquiry not found" });
    return;
  }
  const expiry = new Date();
  expiry.setMonth(expiry.getMonth() + 1);
  const [member] = await db
    .insert(membersTable)
    .values({
      id: makeId("M"),
      name: inq.name,
      phone: inq.phone,
      email: inq.email,
      gender: "Other",
      plan: inq.interest,
      expiryDate: expiry,
      avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(inq.name)}`,
    })
    .returning();
  await db
    .update(inquiriesTable)
    .set({ status: "converted" })
    .where(eq(inquiriesTable.id, id));
  res.json(ConvertInquiryResponse.parse(member));
});

export default router;
