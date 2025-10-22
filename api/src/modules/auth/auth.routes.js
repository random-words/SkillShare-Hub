import { Router } from "express";
import * as controller from "./auth.controller.js";

const r = Router();

r.post("/login", controller.login);
r.post("/register", controller.register);
r.get("/me", controller.me);

export default r;
