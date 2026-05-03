import { Router, type IRouter } from "express";
import healthRouter from "./health";
import statsRouter from "./stats";
import membersRouter from "./members";
import inquiriesRouter from "./inquiries";
import followUpsRouter from "./follow-ups";
import renewalsRouter from "./renewals";
import attendanceRouter from "./attendance";
import billsRouter from "./bills";
import posRouter from "./pos";
import sportsRouter from "./sports";
import trainersRouter from "./trainers";
import classesRouter from "./classes";
import settingsRouter from "./settings";

const router: IRouter = Router();

router.use(healthRouter);
router.use(statsRouter);
router.use(membersRouter);
router.use(inquiriesRouter);
router.use(followUpsRouter);
router.use(renewalsRouter);
router.use(attendanceRouter);
router.use(billsRouter);
router.use(posRouter);
router.use(sportsRouter);
router.use(trainersRouter);
router.use(classesRouter);
router.use(settingsRouter);

export default router;
