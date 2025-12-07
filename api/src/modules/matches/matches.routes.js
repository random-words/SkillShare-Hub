import { Router } from "express";
import * as controller from "./matches.controller.js";
import { authRequired } from "../../middleware/auth.js";

const r = Router();

r.get("/", authRequired, controller.list);
r.post("/", authRequired, controller.create);

export default r;
