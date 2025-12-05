import { Router } from "express";
import * as controller from "./schedule.controller.js";
import { authRequired } from "../../middleware/auth.js";

const r = Router();

r.get("/me", authRequired, controller.mySchedule); // GET /api/schedule/me

export default r;
