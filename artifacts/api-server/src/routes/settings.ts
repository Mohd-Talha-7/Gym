import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, settingsTable } from "@workspace/db";
import { GetSettingsResponse, UpdateSettingsBody } from "@workspace/api-zod";

const router: IRouter = Router();

const SINGLETON_ID = "default";

async function ensureSettings() {
  const [existing] = await db.select().from(settingsTable).where(eq(settingsTable.id, SINGLETON_ID));
  if (existing) return existing;
  const [row] = await db
    .insert(settingsTable)
    .values({ id: SINGLETON_ID })
    .returning();
  return row;
}

router.get("/settings", async (_req, res): Promise<void> => {
  const row = await ensureSettings();
  res.json(GetSettingsResponse.parse(row));
});

router.put("/settings", async (req, res): Promise<void> => {
  const parsed = UpdateSettingsBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  await ensureSettings();
  const [row] = await db
    .update(settingsTable)
    .set(parsed.data)
    .where(eq(settingsTable.id, SINGLETON_ID))
    .returning();
  res.json(GetSettingsResponse.parse(row));
});

export default router;
