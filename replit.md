# FitCore Pro — Gym Management Dashboard

A monorepo housing a single-tenant gym management dashboard, its REST API, and shared schemas/clients.

## Architecture

```
artifacts/
  fitcore-pro/      React + Vite SPA (gym staff dashboard)
  api-server/       Express + Drizzle REST API
  mockup-sandbox/   Vite component preview (canvas iframes)
lib/
  api-spec/         OpenAPI 3.1 spec — single source of truth
  api-zod/          Codegen: Zod schemas from OpenAPI
  api-client-react/ Codegen: typed React Query hooks (orval)
  db/               Drizzle ORM schema + Postgres client
scripts/
  src/seed.ts       Demo data seeder (47 members + bills + attendance + …)
```

## Workflows
- `artifacts/fitcore-pro: web` — Vite dev server (UI)
- `artifacts/api-server: API Server` — Express API (port from `PORT`)
- `artifacts/mockup-sandbox: Component Preview Server` — canvas previews

## Conventions
- **Money in paise** (integers). Format with `lib/format.ts → formatINR`.
- **IDs**: prefixed text PKs — Members `M101+`, Inquiries `INQ201+`, Bills `BL401+`, Sales `SL+`, etc. Generated via `artifacts/api-server/src/lib/ids.ts`.
- **Dates**: timestamptz in DB, ISO strings on the wire, `Date` objects in zod-parsed responses.
- **No auth** — single-gym mode. Admin is anonymous.

## Workflow when changing the API
1. Edit `lib/api-spec/openapi.yaml`.
2. `pnpm --filter @workspace/api-spec run codegen` → regenerates `api-zod` + `api-client-react`.
3. Edit Drizzle schema in `lib/db/src/schema/index.ts` if the data model changed.
4. `pnpm --filter @workspace/db run push` to sync schema to Postgres.
5. Implement/update route handler in `artifacts/api-server/src/routes/<resource>.ts`.
6. Use generated hooks in the frontend: `useListXxx`, `useCreateXxx`, etc.

## Reseeding
```
pnpm --filter @workspace/scripts run seed
```
This wipes and reseeds: 47 members (34 active + 13 expired), 8 inquiries, 12 follow-ups, ~250 attendance records over 9 days, all bills, 10 POS products, 5 sports packages/clients/bills, full profile data for member M101, today's schedule, and the singleton settings row (`id="default"`).

## Endpoints (selected)
- `GET /api/stats/dashboard` — totals & changes for the four KPI cards
- `GET /api/stats/{attendance-analytics, today-schedule, collection-progress, revenue}`
- `GET/POST /api/members`, `GET/PATCH/DELETE /api/members/:id`, plus `bills`, `attendance`, `body-analysis`, `notes`, `documents`, `workout-plans`, `nutrition-plans` sub-resources
- `GET/POST /api/inquiries`, `POST /api/inquiries/:id/convert` (creates a member from a lead)
- `GET/POST/PATCH/DELETE /api/follow-ups`
- `GET /api/renewals` — members expiring within 30 days
- `GET/POST /api/attendance` — list + manual check-in
- `GET/POST/PATCH /api/bills`
- `GET /api/pos/products`, `GET/POST /api/pos/sales`
- `GET /api/sports/{clients,packages,bills,report}`
- `GET/PUT /api/settings`

## Notes / known scope limits
- The **multi-tenant SaaS admin panel** is documented as a planned follow-up task — not yet built. See conversation history for the full plan (tenant model, subdomain routing, Stripe billing, etc.).
- A few legacy display-only components — `ClientProfile`, `InquiryDetail`, `GroupClassBill`, `SportsBill`, `ThemePreviewCard`, and the in-page Settings panel — are still rendered with their original visual mock data. They wrap shared sub-components and were left untouched to keep this slice focused on the data-driven panels. Wiring them is a small follow-up that can re-use the existing `useGetMember`, `useGetInquiry`, etc. hooks plus the `members-detail:${id}` route convention already used by the list pages.
