// skillshare-hub/api/src/modules/auth/auth.controller.js
import * as service from "./auth.service.js";
import { ok, created } from "../../utils/http.js";

export async function register(req, res, next) {
  try {
    const { email, password } = req.body ?? {};
    const result = await service.register({ email, password });
    return created(res, result);
  } catch (e) {
    next(e);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body ?? {};
    const result = await service.login({ email, password });
    return ok(res, result);
  } catch (e) {
    next(e);
  }
}

export async function me(_req, res) {
  return ok(res, { user: { id: 1, email: "demo@user.com" } });
}
