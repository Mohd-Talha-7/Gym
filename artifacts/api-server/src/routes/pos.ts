import { Router, type IRouter } from "express";
import { inArray, desc, eq, sql } from "drizzle-orm";
import { db, posProductsTable, posSalesTable, settingsTable } from "@workspace/db";
import {
  ListPosProductsResponse,
  ListPosSalesResponse,
  CreatePosSaleBody,
  CreatePosProductBody,
  UpdatePosProductBody,
} from "@workspace/api-zod";
import { makeId } from "../lib/ids";

const router: IRouter = Router();

router.get("/pos/products", async (_req, res): Promise<void> => {
  const rows = await db.select().from(posProductsTable);
  res.json(ListPosProductsResponse.parse(rows));
});

router.post("/pos/products", async (req, res): Promise<void> => {
  const parsed = CreatePosProductBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [row] = await db
    .insert(posProductsTable)
    .values({ id: makeId("PR"), ...parsed.data })
    .returning();
  res.status(201).json(row);
});

router.patch("/pos/products/:id", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const parsed = UpdatePosProductBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [row] = await db
    .update(posProductsTable)
    .set(parsed.data)
    .where(eq(posProductsTable.id, id))
    .returning();
  if (!row) {
    res.status(404).json({ error: "Product not found" });
    return;
  }
  res.json(row);
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

  const missing = parsed.data.items.find((i) => !productMap.has(i.productId));
  if (missing) {
    res.status(400).json({ error: `Product ${missing.productId} not found` });
    return;
  }
  // Reject oversell: any item exceeding stock fails the entire transaction.
  for (const i of parsed.data.items) {
    const p = productMap.get(i.productId)!;
    if (i.quantity > p.stock) {
      res.status(400).json({
        error: `Insufficient stock for ${p.name}: requested ${i.quantity}, available ${p.stock}`,
      });
      return;
    }
  }
  const items = parsed.data.items.map((i) => {
    const p = productMap.get(i.productId)!;
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

  // Decrement stock for each item.
  for (const i of parsed.data.items) {
    await db
      .update(posProductsTable)
      .set({ stock: sql`GREATEST(0, ${posProductsTable.stock} - ${i.quantity})` })
      .where(eq(posProductsTable.id, i.productId));
  }
  res.status(201).json(row);
});

export default router;
