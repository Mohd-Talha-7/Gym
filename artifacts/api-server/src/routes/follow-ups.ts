import { Router, type IRouter } from "express";
import { eq, asc } from "drizzle-orm";
import { db, followUpsTable } from "@workspace/db";
import {
  ListFollowUpsResponse,
  CreateFollowUpBody,
  UpdateFollowUpBody,
} from "@workspace/api-zod";
import { makeId } from "../lib/ids";

const router: IRouter = Router();

router.get("/follow-ups", async (_req, res): Promise<void> => {
  const rows = await db.select().from(followUpsTable).orderBy(asc(followUpsTable.scheduledFor));
  res.json(ListFollowUpsResponse.parse(rows));
});

router.post("/follow-ups", async (req, res): Promise<void> => {
  const parsed = CreateFollowUpBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [row] = await db
    .insert(followUpsTable)
    .values({
      id: makeId("FU"),
      ...parsed.data,
      lastComment: parsed.data.lastComment ?? "",
    })
    .returning();
  res.status(201).json(row);
});

router.patch("/follow-ups/:id", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  const parsed = UpdateFollowUpBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [row] = await db
    .update(followUpsTable)
    .set(parsed.data)
    .where(eq(followUpsTable.id, id))
    .returning();
  if (!row) {
    res.status(404).json({ error: "Follow-up not found" });
    return;
  }
  res.json(row);
});

router.delete("/follow-ups/:id", async (req, res): Promise<void> => {
  const id = String(req.params.id);
  await db.delete(followUpsTable).where(eq(followUpsTable.id, id));
  res.sendStatus(204);
});

export default router;
