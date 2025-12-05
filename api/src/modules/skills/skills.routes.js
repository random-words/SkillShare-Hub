import { Router } from "express";
import * as controller from "./skills.controller.js";

const r = Router();

r.get("/", controller.list); // GET /api/skills

export default r;
