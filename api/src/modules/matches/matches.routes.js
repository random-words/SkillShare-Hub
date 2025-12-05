import { Router } from "express";
import * as controller from "./matches.controller.js";
import { authRequired } from "../../middleware/auth.js";

const r = Router();

r.get("/", authRequired, controller.list); // GET /api/matches

export default r;
