import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, trainersTable } from "@workspace/db";
import { CreateTrainerBody, UpdateTrainerBody } from "@workspace/api-zod";
import { makeId } from "../lib/ids";

const router: IRouter = Router();

router.get("/trainers", async (_req, res): Promise<void> => {
  const rows = await db.select().from(trainersTable);
  res.json(rows);
});

router.post("/trainers", async (req, res): Promise<void> => {
  const parsed = CreateTrainerBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const d = parsed.data;
  const [row] = await db
    .insert(trainersTable)
    .values({
      id: makeId("TR"),
      name: d.name,
      phone: d.phone,
      email: d.email ?? null,
      specialty: d.specialty,
      experienceYears: d.experienceYears ?? 0,
      hourlyRate: d.hourlyRate ?? 0,
      status: d.status ?? "active",
      avatarUrl: d.avatarUrl ?? "",
      bio: d.bio ?? null,
    })
    .returning();
  res.status(201).json(row);
});

router.patch("/trainers/:id", async (req, res): Promise<void> => {
  const parsed = UpdateTrainerBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const updates: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(parsed.data)) {
    if (v !== null && v !== undefined) updates[k] = v;
  }
  const [row] = await db
    .update(trainersTable)
    .set(updates)
    .where(eq(trainersTable.id, req.params.id))
    .returning();
  if (!row) {
    res.status(404).json({ error: "Trainer not found" });
    return;
  }
  res.json(row);
});

router.delete("/trainers/:id", async (req, res): Promise<void> => {
  await db.delete(trainersTable).where(eq(trainersTable.id, req.params.id));
  res.status(204).send();
});

export default router;
