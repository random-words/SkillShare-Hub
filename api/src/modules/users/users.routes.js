import { Router } from "express";
import * as controller from "./users.controller.js";

const r = Router();

r.get("/", controller.list); // GET /api/users
r.get("/:id", controller.getOne); // GET /api/users/:id

export default r;
