import * as service from "./auth.service.js";
import { ok, created } from "../../utils/http.js";

export async function register(req, res, next) {
  try {
    const { email, password, name } = req.body ?? {};
    const result = await service.register({ email, password, name });
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

export async function logout(req, res, next) {
  try {
    res.clearCookie("token");

    return ok(res, { message: "Logged out successfully" });
  } catch (e) {
    next(e);
  }
}

export async function me(req, res, next) {
  try {
    const result = await service.getMe(req.user.id);
    return ok(res, result);
  } catch (e) {
    next(e);
  }
}
