import { Router, type IRouter } from "express";
import { inArray, desc } from "drizzle-orm";
import { db, posProductsTable, posSalesTable, settingsTable } from "@workspace/db";
import {
  ListPosProductsResponse,
  ListPosSalesResponse,
  CreatePosSaleBody,
} from "@workspace/api-zod";
import { makeId } from "../lib/ids";

const router: IRouter = Router();

router.get("/pos/products", async (_req, res): Promise<void> => {
  const rows = await db.select().from(posProductsTable);
  res.json(ListPosProductsResponse.parse(rows));
});

router.get("/pos/sales", async (_req, res): Promise<void> => {
  const rows = await db.select().from(posSalesTable).orderBy(desc(posSalesTable.createdAt));
  res.json(ListPosSalesResponse.parse(rows));
});

router.post("/pos/sales", async (req, res): Promise<void> => {
  const parsed = CreatePosSaleBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const productIds = parsed.data.items.map((i) => i.productId);
  if (productIds.length === 0) {
    res.status(400).json({ error: "No items in sale" });
    return;
  }
  const products = await db
    .select()
    .from(posProductsTable)
    .where(inArray(posProductsTable.id, productIds));
  const productMap = new Map(products.map((p) => [p.id, p]));

  const items = parsed.data.items.map((i) => {
    const p = productMap.get(i.productId);
    if (!p) throw new Error(`Product ${i.productId} not found`);
    return { productId: p.id, name: p.name, quantity: i.quantity, price: p.price };
  });

  const [settings] = await db.select().from(settingsTable);
  const taxPct = settings?.taxPercent ?? 18;

  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const tax = Math.round((subtotal * taxPct) / 100);
  const total = subtotal + tax;

  const [row] = await db
    .insert(posSalesTable)
    .values({
      id: makeId("SL"),
      memberId: parsed.data.memberId ?? null,
      memberName: null,
      items,
      subtotal,
      tax,
      total,
      paymentMode: parsed.data.paymentMode,
    })
    .returning();
  res.status(201).json(row);
});

export default router;
