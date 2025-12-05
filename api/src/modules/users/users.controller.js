import * as service from "./users.service.js";
import { ok } from "../../utils/http.js";

export async function list(req, res, next) {
  try {
    const search = req.query.q ?? "";
    const users = await service.listUsers(search);
    return ok(res, users);
  } catch (e) {
    next(e);
  }
}

export async function getOne(req, res, next) {
  try {
    const user = await service.getUserById(Number(req.params.id));
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return ok(res, user);
  } catch (e) {
    next(e);
  }
}
