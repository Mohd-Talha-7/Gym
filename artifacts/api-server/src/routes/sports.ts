import { Router, type IRouter } from "express";
import { desc } from "drizzle-orm";
import {
  db,
  sportsClientsTable,
  sportsPackagesTable,
  sportsBillsTable,
} from "@workspace/db";
import {
  ListSportsClientsResponse,
  ListSportsPackagesResponse,
  ListSportsBillsResponse,
  GetSportsReportResponse,
  CreateSportsClientBody,
  CreateSportsPackageBody,
} from "@workspace/api-zod";
import { makeId } from "../lib/ids";

const router: IRouter = Router();

router.get("/sports/clients", async (_req, res): Promise<void> => {
  const rows = await db.select().from(sportsClientsTable);
  res.json(ListSportsClientsResponse.parse(rows));
});

router.post("/sports/clients", async (req, res): Promise<void> => {
  const parsed = CreateSportsClientBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [row] = await db
    .insert(sportsClientsTable)
    .values({ id: makeId("SC"), ...parsed.data })
    .returning();
  res.status(201).json(row);
});

router.get("/sports/packages", async (_req, res): Promise<void> => {
  const rows = await db.select().from(sportsPackagesTable);
  res.json(ListSportsPackagesResponse.parse(rows));
});

router.post("/sports/packages", async (req, res): Promise<void> => {
  const parsed = CreateSportsPackageBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [row] = await db
    .insert(sportsPackagesTable)
    .values({ id: makeId("SP"), ...parsed.data })
    .returning();
  res.status(201).json(row);
});

router.get("/sports/bills", async (_req, res): Promise<void> => {
  const rows = await db.select().from(sportsBillsTable).orderBy(desc(sportsBillsTable.createdAt));
  res.json(ListSportsBillsResponse.parse(rows));
});

router.get("/sports/report", async (_req, res): Promise<void> => {
  const bills = await db.select().from(sportsBillsTable);
  const clients = await db.select().from(sportsClientsTable);
  const totalRevenue = bills.reduce((s, b) => s + b.amount, 0);
  const sessionsCompleted = clients.reduce((s, c) => s + Math.max(0, 12 - c.sessionsLeft), 0);
  const sportMap = new Map<string, { clients: number; revenue: number }>();
  for (const c of clients) {
    const cur = sportMap.get(c.sport) ?? { clients: 0, revenue: 0 };
    cur.clients++;
    sportMap.set(c.sport, cur);
  }
  for (const b of bills) {
    const cur = sportMap.get(b.sport) ?? { clients: 0, revenue: 0 };
    cur.revenue += b.amount;
    sportMap.set(b.sport, cur);
  }
  const bySport = Array.from(sportMap.entries()).map(([sport, v]) => ({ sport, ...v }));
  res.json(
    GetSportsReportResponse.parse({
      totalRevenue,
      totalClients: clients.length,
      sessionsCompleted,
      bySport,
    }),
  );
});

export default router;
