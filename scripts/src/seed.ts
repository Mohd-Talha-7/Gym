import {
  db,
  pool,
  membersTable,
  inquiriesTable,
  followUpsTable,
  attendanceTable,
  billsTable,
  posProductsTable,
  sportsPackagesTable,
  sportsClientsTable,
  sportsBillsTable,
  bodyAnalysisTable,
  memberNotesTable,
  memberDocumentsTable,
  workoutPlansTable,
  nutritionPlansTable,
  scheduleTable,
  settingsTable,
} from "@workspace/db";

async function main() {
  console.log("Clearing existing data...");
  await db.delete(attendanceTable);
  await db.delete(billsTable);
  await db.delete(bodyAnalysisTable);
  await db.delete(memberNotesTable);
  await db.delete(memberDocumentsTable);
  await db.delete(workoutPlansTable);
  await db.delete(nutritionPlansTable);
  await db.delete(sportsBillsTable);
  await db.delete(sportsClientsTable);
  await db.delete(sportsPackagesTable);
  await db.delete(posProductsTable);
  await db.delete(followUpsTable);
  await db.delete(inquiriesTable);
  await db.delete(membersTable);
  await db.delete(scheduleTable);
  await db.delete(settingsTable);

  const now = new Date();
  const days = (n: number) => new Date(now.getTime() + n * 86400000);
  const avatar = (seed: string) =>
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(seed)}`;

  console.log("Seeding settings...");
  await db.insert(settingsTable).values({
    id: "default",
    gymName: "FitCore Pro Gym",
    address: "12 Bandra West, Mumbai, MH 400050",
    phone: "+91 22 6789 0000",
    email: "hello@fitcore.com",
    gst: "27AABCU9603R1ZX",
    invoicePrefix: "INV-",
    taxPercent: 18,
    theme: "default",
    currency: "INR",
    logoUrl: "",
  });

  console.log("Seeding members...");
  const memberSeeds = [
    { name: "Rajiv Kumar", phone: "98765 43210", gender: "Male", plan: "Annual Gold", status: "active", days: 240 },
    { name: "Priya Sharma", phone: "98221 11122", gender: "Female", plan: "Quarterly", status: "active", days: 60 },
    { name: "Amit Shah", phone: "98221 00223", gender: "Male", plan: "Monthly", status: "active", days: 14 },
    { name: "Neha Patel", phone: "97123 33456", gender: "Female", plan: "Annual Gold", status: "active", days: 180 },
    { name: "Karan Mehra", phone: "98910 87654", gender: "Male", plan: "Half Yearly", status: "active", days: 90 },
    { name: "Sneha Iyer", phone: "98765 77123", gender: "Female", plan: "Monthly", status: "active", days: 7 },
    { name: "Vikram Singh", phone: "99220 11111", gender: "Male", plan: "Annual Gold", status: "active", days: 300 },
    { name: "Anjali Desai", phone: "98765 33445", gender: "Female", plan: "Quarterly", status: "active", days: 45 },
    { name: "Rohan Joshi", phone: "97700 88999", gender: "Male", plan: "Monthly", status: "active", days: 21 },
    { name: "Meera Nair", phone: "98220 11223", gender: "Female", plan: "Half Yearly", status: "active", days: 120 },
    { name: "Sandeep Kapoor", phone: "98998 76543", gender: "Male", plan: "Annual Gold", status: "active", days: 200 },
    { name: "Tina Rao", phone: "97001 22334", gender: "Female", plan: "Quarterly", status: "active", days: 30 },
    { name: "Aakash Gupta", phone: "98880 11223", gender: "Male", plan: "Monthly", status: "active", days: 5 },
    { name: "Kavya Menon", phone: "98765 11199", gender: "Female", plan: "Annual Gold", status: "active", days: 270 },
    { name: "Manish Verma", phone: "99339 87600", gender: "Male", plan: "Quarterly", status: "active", days: 50 },
    { name: "Pooja Bhatt", phone: "98221 99887", gender: "Female", plan: "Monthly", status: "active", days: 10 },
    { name: "Nikhil Reddy", phone: "97700 65432", gender: "Male", plan: "Annual Gold", status: "active", days: 220 },
    { name: "Riya Malhotra", phone: "98765 44332", gender: "Female", plan: "Half Yearly", status: "active", days: 100 },
    { name: "Sameer Khanna", phone: "98220 33445", gender: "Male", plan: "Monthly", status: "active", days: 18 },
    { name: "Divya Pillai", phone: "98221 66778", gender: "Female", plan: "Quarterly", status: "active", days: 40 },
    { name: "Harsh Vyas", phone: "97001 88990", gender: "Male", plan: "Annual Gold", status: "active", days: 150 },
    { name: "Isha Banerjee", phone: "98810 22113", gender: "Female", plan: "Monthly", status: "active", days: 25 },
    { name: "Suresh Pawar", phone: "98220 11334", gender: "Male", plan: "Half Yearly", status: "active", days: 80 },
    { name: "Aarti Shetty", phone: "98765 22113", gender: "Female", plan: "Quarterly", status: "active", days: 35 },
    { name: "Rahul Bose", phone: "98221 55667", gender: "Male", plan: "Annual Gold", status: "active", days: 190 },
    { name: "Megha Sinha", phone: "97700 99887", gender: "Female", plan: "Monthly", status: "active", days: 12 },
    { name: "Yash Tyagi", phone: "98765 88990", gender: "Male", plan: "Quarterly", status: "active", days: 55 },
    { name: "Nisha Gowda", phone: "98221 22334", gender: "Female", plan: "Half Yearly", status: "active", days: 110 },
    { name: "Aditya Bhatia", phone: "98998 66554", gender: "Male", plan: "Annual Gold", status: "active", days: 250 },
    { name: "Sonal Aggarwal", phone: "97700 11223", gender: "Female", plan: "Monthly", status: "active", days: 8 },
    { name: "Varun Saxena", phone: "98810 33445", gender: "Male", plan: "Quarterly", status: "active", days: 28 },
    { name: "Ritika Bansal", phone: "98765 99887", gender: "Female", plan: "Annual Gold", status: "active", days: 210 },
    { name: "Deepak Chauhan", phone: "98221 77889", gender: "Male", plan: "Monthly", status: "active", days: 4 },
    { name: "Shilpa Goswami", phone: "98220 99888", gender: "Female", plan: "Half Yearly", status: "active", days: 95 },
    // expired (13 of them)
    { name: "Mukesh Yadav", phone: "98221 00111", gender: "Male", plan: "Monthly", status: "expired", days: -5 },
    { name: "Latha Krishnan", phone: "98765 11332", gender: "Female", plan: "Quarterly", status: "expired", days: -10 },
    { name: "Arvind Kulkarni", phone: "98810 11334", gender: "Male", plan: "Monthly", status: "expired", days: -3 },
    { name: "Reema Trivedi", phone: "97700 22113", gender: "Female", plan: "Half Yearly", status: "expired", days: -20 },
    { name: "Ganesh Naidu", phone: "98220 88990", gender: "Male", plan: "Monthly", status: "expired", days: -15 },
    { name: "Bhavna Solanki", phone: "98765 33221", gender: "Female", plan: "Annual Gold", status: "expired", days: -2 },
    { name: "Imran Sheikh", phone: "98221 44556", gender: "Male", plan: "Monthly", status: "expired", days: -7 },
    { name: "Kiran Hegde", phone: "98998 22113", gender: "Female", plan: "Quarterly", status: "expired", days: -12 },
    { name: "Mahesh Rane", phone: "97001 33445", gender: "Male", plan: "Monthly", status: "expired", days: -18 },
    { name: "Tara Joshi", phone: "98220 22113", gender: "Female", plan: "Half Yearly", status: "expired", days: -25 },
    { name: "Vivek Pandey", phone: "98765 44113", gender: "Male", plan: "Monthly", status: "expired", days: -1 },
    { name: "Smita Apte", phone: "98221 88112", gender: "Female", plan: "Quarterly", status: "expired", days: -8 },
    { name: "Naveen Rao", phone: "98998 11334", gender: "Male", plan: "Annual Gold", status: "expired", days: -30 },
  ];

  const memberRows = memberSeeds.map((m, i) => {
    const id = `M${String(101 + i).padStart(3, "0")}`;
    const joinOffset = -(60 + i * 5);
    const dobYearOffset = -(20 + (i % 25));
    const dob = new Date(now.getFullYear() + dobYearOffset, (i * 3) % 12, ((i * 7) % 27) + 1);
    return {
      id,
      name: m.name,
      phone: m.phone,
      email: `${m.name.toLowerCase().replace(/\s+/g, ".")}@example.com`,
      status: m.status,
      plan: m.plan,
      joinDate: days(joinOffset),
      expiryDate: days(m.days),
      gender: m.gender,
      bloodGroup: ["A+", "B+", "O+", "AB+", "A-", "O-"][i % 6],
      dob,
      address: `${i + 1} Marine Drive, Mumbai`,
      avatarUrl: avatar(m.name),
      balanceDue: m.status === "expired" ? 150000 + i * 10000 : i % 5 === 0 ? 50000 : 0,
      medicalHistory: i % 7 === 0 ? "Hypertension - controlled" : null,
      emergencyContact: `+91 9${String(1000000000 + i * 31).slice(0, 9)}`,
    };
  });
  await db.insert(membersTable).values(memberRows);
  const members = memberRows;

  console.log("Seeding inquiries...");
  const inquirySeeds = [
    { name: "Sahil Arora", phone: "98765 90100", interest: "Annual Gold", source: "Walk-in", status: "pending", assignedTo: "Ravi Sharma" },
    { name: "Tanvi Bhattacharya", phone: "97700 65432", interest: "Quarterly", source: "Instagram", status: "follow-up", assignedTo: "Sarah" },
    { name: "Karthik Iyer", phone: "98220 11445", interest: "Monthly", source: "Referral", status: "pending", assignedTo: "Ravi Sharma" },
    { name: "Pallavi Nanda", phone: "98998 77665", interest: "Half Yearly", source: "Google", status: "follow-up", assignedTo: "Vikram" },
    { name: "Dhruv Sahni", phone: "98221 44889", interest: "Annual Gold", source: "Facebook", status: "pending", assignedTo: "Sarah" },
    { name: "Asha Pillai", phone: "98810 22556", interest: "Quarterly", source: "Walk-in", status: "converted", assignedTo: "Ravi Sharma" },
    { name: "Manoj Tripathi", phone: "98221 33778", interest: "Monthly", source: "Instagram", status: "pending", assignedTo: "Vikram" },
    { name: "Geeta Prasad", phone: "98765 22441", interest: "Annual Gold", source: "Referral", status: "follow-up", assignedTo: "Sarah" },
  ];
  await db.insert(inquiriesTable).values(
    inquirySeeds.map((q, i) => ({
      id: `INQ${String(201 + i).padStart(3, "0")}`,
      name: q.name,
      phone: q.phone,
      email: `${q.name.toLowerCase().replace(/\s+/g, ".")}@example.com`,
      interest: q.interest,
      source: q.source,
      status: q.status,
      inquiryDate: days(-(i + 1)),
      assignedTo: q.assignedTo,
      notes: i % 2 === 0 ? "Wants tour of facility" : null,
    })),
  );

  console.log("Seeding follow-ups...");
  const followUpSeeds = members.slice(0, 12).map((m, i) => ({
    id: `FU${String(301 + i).padStart(3, "0")}`,
    memberId: m.id,
    memberName: m.name,
    type: ["Membership", "Payment", "Renewal", "PT Session"][i % 4],
    priority: ["High", "Medium", "Low"][i % 3],
    scheduledFor: days(i % 7),
    status: i < 3 ? "completed" : "pending",
    lastComment: ["Called, will visit tomorrow", "Asked for callback after 6pm", "Interested in PT add-on", "Payment promised by Friday"][i % 4],
    phone: m.phone,
  }));
  await db.insert(followUpsTable).values(followUpSeeds);

  console.log("Seeding attendance (last 9 days)...");
  const attendanceRows: typeof attendanceTable.$inferInsert[] = [];
  let aIdx = 0;
  for (let d = -8; d <= 0; d++) {
    const day = days(d);
    day.setHours(0, 0, 0, 0);
    const visitorCount = 18 + Math.floor(Math.random() * 14);
    const visitors = members.slice(0, visitorCount);
    for (const v of visitors) {
      const checkIn = new Date(day);
      checkIn.setHours(7 + Math.floor(Math.random() * 13), Math.floor(Math.random() * 60));
      const checkOut = new Date(checkIn.getTime() + (60 + Math.floor(Math.random() * 60)) * 60000);
      attendanceRows.push({
        id: `A${String(++aIdx).padStart(5, "0")}`,
        memberId: v.id,
        checkIn,
        checkOut,
        source: Math.random() > 0.5 ? "biometric" : "manual",
      });
    }
  }
  await db.insert(attendanceTable).values(attendanceRows);

  console.log("Seeding bills...");
  const billRows: typeof billsTable.$inferInsert[] = [];
  members.forEach((m, i) => {
    const planAmounts: Record<string, number> = {
      Monthly: 250000,
      Quarterly: 700000,
      "Half Yearly": 1300000,
      "Annual Gold": 2400000,
    };
    const amount = planAmounts[m.plan] ?? 250000;
    const isPaid = m.balanceDue === 0;
    const paid = isPaid ? amount : amount - m.balanceDue;
    billRows.push({
      id: `BL${String(401 + i).padStart(4, "0")}`,
      memberId: m.id,
      type: "Membership",
      items: [{ name: `${m.plan} Membership`, amount }],
      amount,
      paid: Math.max(0, paid),
      status: isPaid ? "paid" : paid > 0 ? "partial" : "pending",
      paymentMode: isPaid ? "UPI" : null,
      notes: null,
      createdAt: m.joinDate,
    });
  });
  await db.insert(billsTable).values(billRows);

  console.log("Seeding POS products...");
  await db.insert(posProductsTable).values([
    { id: "P001", name: "Whey Protein 2kg", price: 650000, category: "Supplements", stock: 12 },
    { id: "P002", name: "BCAA 300g", price: 180000, category: "Supplements", stock: 24 },
    { id: "P003", name: "Creatine 250g", price: 120000, category: "Supplements", stock: 18 },
    { id: "P004", name: "FitCore T-Shirt", price: 80000, category: "Apparel", stock: 30 },
    { id: "P005", name: "Lifting Belt", price: 250000, category: "Accessories", stock: 8 },
    { id: "P006", name: "Shaker Bottle", price: 35000, category: "Accessories", stock: 50 },
    { id: "P007", name: "Energy Bar (pack of 12)", price: 60000, category: "Snacks", stock: 40 },
    { id: "P008", name: "Pre-Workout 400g", price: 290000, category: "Supplements", stock: 15 },
    { id: "P009", name: "Resistance Bands Set", price: 120000, category: "Accessories", stock: 22 },
    { id: "P010", name: "Gym Towel", price: 45000, category: "Accessories", stock: 35 },
  ]);

  console.log("Seeding sports packages & clients...");
  await db.insert(sportsPackagesTable).values([
    { id: "SP01", name: "Swimming Beginner", sport: "Swimming", sessions: 12, price: 800000, durationDays: 60 },
    { id: "SP02", name: "Swimming Advanced", sport: "Swimming", sessions: 16, price: 1200000, durationDays: 60 },
    { id: "SP03", name: "Tennis Coaching", sport: "Tennis", sessions: 12, price: 900000, durationDays: 90 },
    { id: "SP04", name: "Badminton Group", sport: "Badminton", sessions: 12, price: 600000, durationDays: 60 },
    { id: "SP05", name: "Basketball Drills", sport: "Basketball", sessions: 10, price: 700000, durationDays: 60 },
  ]);
  await db.insert(sportsClientsTable).values([
    { id: "S12", memberId: members[0].id, memberName: "Aryan Khan", sport: "Swimming", packageName: "Swimming Beginner", sessionsLeft: 7, expiryDate: days(45), coach: "Vikram", level: "Beginner" },
    { id: "S13", memberId: members[1].id, memberName: "Tanya Roy", sport: "Tennis", packageName: "Tennis Coaching", sessionsLeft: 9, expiryDate: days(70), coach: "Coach Lee", level: "Intermediate" },
    { id: "S14", memberId: members[2].id, memberName: "Karan Mehra", sport: "Badminton", packageName: "Badminton Group", sessionsLeft: 5, expiryDate: days(30), coach: "Coach Sara", level: "Beginner" },
    { id: "S15", memberId: members[3].id, memberName: "Neha Patel", sport: "Swimming", packageName: "Swimming Advanced", sessionsLeft: 12, expiryDate: days(55), coach: "Vikram", level: "Advanced" },
    { id: "S16", memberId: members[4].id, memberName: "Rohan Joshi", sport: "Basketball", packageName: "Basketball Drills", sessionsLeft: 6, expiryDate: days(40), coach: "Coach Lee", level: "Intermediate" },
  ]);
  await db.insert(sportsBillsTable).values([
    { id: "SB01", memberId: members[0].id, memberName: "Aryan Khan", sport: "Swimming", packageName: "Swimming Beginner", amount: 800000, status: "paid", createdAt: days(-15) },
    { id: "SB02", memberId: members[1].id, memberName: "Tanya Roy", sport: "Tennis", packageName: "Tennis Coaching", amount: 900000, status: "paid", createdAt: days(-20) },
    { id: "SB03", memberId: members[2].id, memberName: "Karan Mehra", sport: "Badminton", packageName: "Badminton Group", amount: 600000, status: "partial", createdAt: days(-30) },
    { id: "SB04", memberId: members[3].id, memberName: "Neha Patel", sport: "Swimming", packageName: "Swimming Advanced", amount: 1200000, status: "paid", createdAt: days(-5) },
    { id: "SB05", memberId: members[4].id, memberName: "Rohan Joshi", sport: "Basketball", packageName: "Basketball Drills", amount: 700000, status: "paid", createdAt: days(-25) },
  ]);

  console.log("Seeding profile-detail data for first member...");
  const m0 = members[0];
  await db.insert(bodyAnalysisTable).values([
    { id: "BA001", memberId: m0.id, recordedAt: days(-30), weightKg: 80.5, bodyFatPct: 21.0, muscleKg: 35.2, bmi: 26.0, notes: "Initial assessment" },
    { id: "BA002", memberId: m0.id, recordedAt: days(-15), weightKg: 79.0, bodyFatPct: 19.8, muscleKg: 35.8, bmi: 25.5, notes: "Down 1.5kg" },
    { id: "BA003", memberId: m0.id, recordedAt: days(-2), weightKg: 78.0, bodyFatPct: 18.5, muscleKg: 36.4, bmi: 25.1, notes: "Progressing well" },
  ]);
  await db.insert(memberNotesTable).values([
    { id: "N001", memberId: m0.id, body: "Likes early morning sessions. Avoid leg day on Mondays.", author: "Coach Vikram", createdAt: days(-10) },
    { id: "N002", memberId: m0.id, body: "Reported mild knee pain after squats — modified workout.", author: "Coach Vikram", createdAt: days(-3) },
  ]);
  await db.insert(memberDocumentsTable).values([
    { id: "D001", memberId: m0.id, name: "PAR-Q Health Form", type: "PAR-Q", status: "Signed", uploadedBy: "Ravi Sharma", uploadedAt: days(-30), note: null },
    { id: "D002", memberId: m0.id, name: "Membership Agreement", type: "Membership Agreement", status: "Pending", uploadedBy: "Ravi Sharma", uploadedAt: days(-28), note: null },
    { id: "D003", memberId: m0.id, name: "ID Proof (Aadhar)", type: "ID Proof", status: "Not Required", uploadedBy: "Ravi Sharma", uploadedAt: days(-30), note: null },
    { id: "D004", memberId: m0.id, name: "Physiotherapy Report", type: "Health Assessment", status: "Signed", uploadedBy: "Coach Sarah", uploadedAt: days(-20), note: "Patient shows significant improvement in mobility." },
  ]);
  await db.insert(workoutPlansTable).values([
    {
      id: "WP001",
      memberId: m0.id,
      name: "Intermediate Hypertrophy Program",
      weeks: "1-4",
      active: true,
      trainerNote: "Client is progressing very well on deadlifts. Increase weight by 5kg next week.",
      days: [
        { day: "Day 1: Push", exercises: [{ name: "Bench Press", setsReps: "4 x 8-10" }, { name: "Incline Dumbbell Press", setsReps: "3 x 10-12" }, { name: "Cable Fly", setsReps: "3 x 12-15" }] },
        { day: "Day 2: Pull", exercises: [{ name: "Deadlift", setsReps: "4 x 6-8" }, { name: "Pull-ups", setsReps: "4 x AMRAP" }, { name: "Barbell Row", setsReps: "3 x 8-10" }] },
        { day: "Day 3: Legs", exercises: [{ name: "Squat", setsReps: "5 x 5" }, { name: "Romanian Deadlift", setsReps: "3 x 10" }, { name: "Leg Press", setsReps: "3 x 12" }] },
      ],
    },
  ]);
  await db.insert(nutritionPlansTable).values([
    {
      id: "NP001",
      memberId: m0.id,
      name: "Lean Bulking Phase",
      calories: 2800,
      active: true,
      macros: { protein: "180g (26%)", carbs: "350g (50%)", fats: "75g (24%)" },
      meals: [
        { name: "Breakfast", time: "8:00 AM", kcal: 650, description: "Oatmeal with whey protein, banana, almond butter" },
        { name: "Lunch", time: "1:00 PM", kcal: 850, description: "Grilled chicken breast, brown rice, mixed veggies" },
        { name: "Snack", time: "4:30 PM", kcal: 400, description: "Greek yogurt with berries and granola" },
        { name: "Dinner", time: "8:00 PM", kcal: 900, description: "Salmon, sweet potato, broccoli" },
      ],
    },
  ]);

  console.log("Seeding today's schedule...");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const at = (h: number, m: number) => new Date(today.getTime() + (h * 60 + m) * 60000);
  await db.insert(scheduleTable).values([
    { id: "SC01", trainer: "Vikram", status: "Confirmed", scheduledAt: at(7, 0), avatarUrl: avatar("Vikram") },
    { id: "SC02", trainer: "Sarah", status: "Pending", scheduledAt: at(9, 30), avatarUrl: avatar("Sarah") },
    { id: "SC03", trainer: "Ravi", status: "Confirmed", scheduledAt: at(11, 0), avatarUrl: avatar("Ravi") },
    { id: "SC04", trainer: "Coach Lee", status: "Confirmed", scheduledAt: at(17, 30), avatarUrl: avatar("Lee") },
  ]);

  console.log("Seed complete!");
  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
