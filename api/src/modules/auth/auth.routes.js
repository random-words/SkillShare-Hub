import { Router } from "express";
import * as controller from "./auth.controller.js";
import * as validators from "./auth.validators.js";
import { authRequired } from "../../middleware/auth.js";

const r = Router();

r.post("/register", validators.validateRegister, controller.register);
r.post("/login", validators.validateLogin, controller.login);
r.post("/logout", controller.logout);
r.get("/me", authRequired, controller.me);

export default r;
