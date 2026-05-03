import {
  pgTable,
  text,
  integer,
  boolean,
  timestamp,
  jsonb,
  doublePrecision,
} from "drizzle-orm/pg-core";

export const membersTable = pgTable("members", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  status: text("status").notNull().default("active"),
  plan: text("plan").notNull(),
  joinDate: timestamp("join_date", { withTimezone: true }).notNull().defaultNow(),
  expiryDate: timestamp("expiry_date", { withTimezone: true }).notNull(),
  gender: text("gender").notNull(),
  bloodGroup: text("blood_group"),
  dob: timestamp("dob", { withTimezone: true }),
  address: text("address"),
  avatarUrl: text("avatar_url").notNull().default(""),
  balanceDue: integer("balance_due").notNull().default(0),
  medicalHistory: text("medical_history"),
  emergencyContact: text("emergency_contact"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const inquiriesTable = pgTable("inquiries", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  interest: text("interest").notNull(),
  source: text("source").notNull(),
  status: text("status").notNull().default("pending"),
  inquiryDate: timestamp("inquiry_date", { withTimezone: true }).notNull().defaultNow(),
  assignedTo: text("assigned_to").notNull().default("Unassigned"),
  notes: text("notes"),
});

export const followUpsTable = pgTable("follow_ups", {
  id: text("id").primaryKey(),
  memberId: text("member_id"),
  memberName: text("member_name").notNull(),
  type: text("type").notNull(),
  priority: text("priority").notNull(),
  scheduledFor: timestamp("scheduled_for", { withTimezone: true }).notNull(),
  status: text("status").notNull().default("pending"),
  lastComment: text("last_comment").notNull().default(""),
  phone: text("phone").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const attendanceTable = pgTable("attendance", {
  id: text("id").primaryKey(),
  memberId: text("member_id").notNull(),
  checkIn: timestamp("check_in", { withTimezone: true }).notNull().defaultNow(),
  checkOut: timestamp("check_out", { withTimezone: true }),
  source: text("source").notNull().default("manual"),
});

export const billsTable = pgTable("bills", {
  id: text("id").primaryKey(),
  memberId: text("member_id").notNull(),
  type: text("type").notNull(),
  items: jsonb("items").notNull().$type<Array<{ name: string; amount: number }>>(),
  amount: integer("amount").notNull(),
  paid: integer("paid").notNull().default(0),
  status: text("status").notNull().default("pending"),
  paymentMode: text("payment_mode"),
  notes: text("notes"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const posProductsTable = pgTable("pos_products", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  category: text("category").notNull(),
  stock: integer("stock").notNull().default(0),
  imageUrl: text("image_url"),
});

export const posSalesTable = pgTable("pos_sales", {
  id: text("id").primaryKey(),
  memberId: text("member_id"),
  memberName: text("member_name"),
  items: jsonb("items").notNull().$type<
    Array<{ productId: string; name: string; quantity: number; price: number }>
  >(),
  subtotal: integer("subtotal").notNull(),
  tax: integer("tax").notNull(),
  total: integer("total").notNull(),
  paymentMode: text("payment_mode").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const sportsPackagesTable = pgTable("sports_packages", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  sport: text("sport").notNull(),
  sessions: integer("sessions").notNull(),
  price: integer("price").notNull(),
  durationDays: integer("duration_days").notNull(),
});

export const sportsClientsTable = pgTable("sports_clients", {
  id: text("id").primaryKey(),
  memberId: text("member_id"),
  memberName: text("member_name").notNull(),
  sport: text("sport").notNull(),
  packageName: text("package_name").notNull(),
  sessionsLeft: integer("sessions_left").notNull().default(0),
  expiryDate: timestamp("expiry_date", { withTimezone: true }).notNull(),
  coach: text("coach").notNull(),
  level: text("level").notNull().default("Beginner"),
});

export const sportsBillsTable = pgTable("sports_bills", {
  id: text("id").primaryKey(),
  memberId: text("member_id"),
  memberName: text("member_name").notNull(),
  sport: text("sport").notNull(),
  packageName: text("package_name").notNull(),
  amount: integer("amount").notNull(),
  status: text("status").notNull().default("paid"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const bodyAnalysisTable = pgTable("body_analysis", {
  id: text("id").primaryKey(),
  memberId: text("member_id").notNull(),
  recordedAt: timestamp("recorded_at", { withTimezone: true }).notNull().defaultNow(),
  weightKg: doublePrecision("weight_kg").notNull(),
  bodyFatPct: doublePrecision("body_fat_pct").notNull(),
  muscleKg: doublePrecision("muscle_kg"),
  bmi: doublePrecision("bmi"),
  notes: text("notes"),
});

export const memberNotesTable = pgTable("member_notes", {
  id: text("id").primaryKey(),
  memberId: text("member_id").notNull(),
  body: text("body").notNull(),
  author: text("author").notNull().default("Staff"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const memberDocumentsTable = pgTable("member_documents", {
  id: text("id").primaryKey(),
  memberId: text("member_id").notNull(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  status: text("status").notNull().default("Pending"),
  uploadedBy: text("uploaded_by").notNull(),
  uploadedAt: timestamp("uploaded_at", { withTimezone: true }).notNull().defaultNow(),
  note: text("note"),
});

export const workoutPlansTable = pgTable("workout_plans", {
  id: text("id").primaryKey(),
  memberId: text("member_id").notNull(),
  name: text("name").notNull(),
  weeks: text("weeks").notNull().default("1-4"),
  active: boolean("active").notNull().default(true),
  trainerNote: text("trainer_note").notNull().default(""),
  days: jsonb("days").notNull().$type<
    Array<{ day: string; exercises: Array<{ name: string; setsReps: string }> }>
  >(),
});

export const nutritionPlansTable = pgTable("nutrition_plans", {
  id: text("id").primaryKey(),
  memberId: text("member_id").notNull(),
  name: text("name").notNull(),
  calories: integer("calories").notNull(),
  active: boolean("active").notNull().default(true),
  macros: jsonb("macros").notNull().$type<{ protein: string; carbs: string; fats: string }>(),
  meals: jsonb("meals").notNull().$type<
    Array<{ name: string; time: string; kcal: number; description: string }>
  >(),
});

export const scheduleTable = pgTable("schedule", {
  id: text("id").primaryKey(),
  trainer: text("trainer").notNull(),
  status: text("status").notNull().default("Pending"),
  scheduledAt: timestamp("scheduled_at", { withTimezone: true }).notNull(),
  avatarUrl: text("avatar_url").notNull().default(""),
});

export const trainersTable = pgTable("trainers", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  specialty: text("specialty").notNull().default("General Fitness"),
  experienceYears: integer("experience_years").notNull().default(0),
  hourlyRate: integer("hourly_rate").notNull().default(0),
  status: text("status").notNull().default("active"),
  avatarUrl: text("avatar_url").notNull().default(""),
  bio: text("bio"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const groupClassesTable = pgTable("group_classes", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull().default("Strength"),
  trainer: text("trainer").notNull(),
  capacity: integer("capacity").notNull().default(20),
  durationMins: integer("duration_mins").notNull().default(60),
  scheduledAt: timestamp("scheduled_at", { withTimezone: true }).notNull(),
  room: text("room").notNull().default("Main Floor"),
  status: text("status").notNull().default("scheduled"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const groupClassBookingsTable = pgTable("group_class_bookings", {
  id: text("id").primaryKey(),
  classId: text("class_id").notNull(),
  memberId: text("member_id").notNull(),
  memberName: text("member_name").notNull(),
  status: text("status").notNull().default("booked"),
  bookedAt: timestamp("booked_at", { withTimezone: true }).notNull().defaultNow(),
});

export const settingsTable = pgTable("settings", {
  id: text("id").primaryKey(),
  gymName: text("gym_name").notNull().default("FitCore Pro Gym"),
  address: text("address").notNull().default(""),
  phone: text("phone").notNull().default(""),
  email: text("email").notNull().default(""),
  gst: text("gst").notNull().default(""),
  invoicePrefix: text("invoice_prefix").notNull().default("INV-"),
  taxPercent: integer("tax_percent").notNull().default(18),
  theme: text("theme").notNull().default("default"),
  currency: text("currency").notNull().default("INR"),
  logoUrl: text("logo_url").notNull().default(""),
});
