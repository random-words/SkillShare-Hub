import { Router } from "express";
import * as controller from "./users.controller.js";

const r = Router();

// GET /api/users?q=React
r.get("/", controller.getUsers);

export default r;
