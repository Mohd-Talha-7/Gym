import { Router, type IRouter } from "express";
import { sql, and, gte, lt, eq } from "drizzle-orm";
import { db, membersTable, billsTable, attendanceTable, scheduleTable } from "@workspace/db";
import {
  GetDashboardStatsResponse,
  GetAttendanceAnalyticsResponse,
  GetTodayScheduleResponse,
  GetCollectionProgressResponse,
  GetRevenueResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/stats/dashboard", async (_req, res): Promise<void> => {
  const all = await db.select().from(membersTable);
  const now = new Date();
  const total = all.length;
  const active = all.filter((m) => m.status === "active" && m.expiryDate > now).length;
  const expired = all.filter((m) => m.expiryDate <= now || m.status === "expired").length;

  const billRows = await db.select().from(billsTable);
  const pending = billRows.filter((b) => b.status !== "paid" && b.amount - b.paid > 0).length;

  res.json(
    GetDashboardStatsResponse.parse({
      totalMembers: total,
      activeMembers: active,
      expiredMembers: expired,
      pendingPayments: pending,
      totalChange: 5,
      activeChange: 5,
      expiredChange: 3,
      pendingChange: 3,
    }),
  );
});

router.get("/stats/attendance-analytics", async (_req, res): Promise<void> => {
  const labels = ["M", "T", "W", "T", "F", "S", "S", "M", "M"];
  const today = new Date();
  const start = new Date(today);
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - 8);
  const end = new Date(today);
  end.setHours(23, 59, 59, 999);

  const rows = await db
    .select()
    .from(attendanceTable)
    .where(and(gte(attendanceTable.checkIn, start), lt(attendanceTable.checkIn, end)));

  const counts = new Array(9).fill(0);
  for (const r of rows) {
    const diffDays = Math.floor((r.checkIn.getTime() - start.getTime()) / 86400000);
    if (diffDays >= 0 && diffDays < 9) counts[diffDays]++;
  }
  const max = Math.max(...counts, 1);
  const days = labels.map((label, i) => ({
    label,
    count: counts[i],
    percent: Math.round((counts[i] / max) * 100),
  }));
  res.json(GetAttendanceAnalyticsResponse.parse({ days }));
});

router.get("/stats/today-schedule", async (_req, res): Promise<void> => {
  const rows = await db.select().from(scheduleTable).orderBy(scheduleTable.scheduledAt);
  const items = rows.map((r) => ({
    id: r.id,
    trainer: r.trainer,
    status: r.status,
    time: r.scheduledAt.toISOString().slice(11, 16),
    avatarUrl: r.avatarUrl,
  }));
  res.json(GetTodayScheduleResponse.parse(items));
});

router.get("/stats/collection-progress", async (_req, res): Promise<void> => {
  const start = new Date();
  start.setDate(1);
  start.setHours(0, 0, 0, 0);
  const rows = await db.select().from(billsTable).where(gte(billsTable.createdAt, start));
  const collected = rows.reduce((s, b) => s + b.paid, 0);
  const target = 50000000; // ₹5,00,000 in paise
  const percent = Math.min(100, Math.round((collected / target) * 100));
  res.json(GetCollectionProgressResponse.parse({ percent, collected, target }));
});

router.get("/stats/revenue", async (_req, res): Promise<void> => {
  const rows = await db
    .select({
      month: sql<string>`to_char(${billsTable.createdAt}, 'Mon')`,
      value: sql<number>`coalesce(sum(${billsTable.paid}), 0)::int`,
    })
    .from(billsTable)
    .groupBy(sql`to_char(${billsTable.createdAt}, 'Mon'), date_trunc('month', ${billsTable.createdAt})`)
    .orderBy(sql`date_trunc('month', ${billsTable.createdAt})`);

  const monthly = rows.length
    ? rows.map((r) => ({ month: r.month, value: Number(r.value) }))
    : [
        { month: "Jan", value: 0 },
        { month: "Feb", value: 0 },
        { month: "Mar", value: 0 },
      ];
  const revenue = monthly.reduce((s, m) => s + m.value, 0);
  res.json(GetRevenueResponse.parse({ revenue, growth: 12, monthly }));
});

export default router;
