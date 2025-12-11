import { Router } from "express";
import * as controller from "./skills.controller.js";
import { authRequired } from "../../middleware/auth.js";

const r = Router();

// GET /api/skills
r.get("/", controller.getAllSkills);

// POST /api/skills/user
r.post("/user", authRequired, controller.addUserSkills);

export default r;
