import * as service from "./matches.service.js";
import { ok } from "../../utils/http.js";

export async function list(req, res, next) {
  try {
    const matches = await service.getMatchesForUser(req.user.id);
    return ok(res, matches);
  } catch (e) {
    next(e);
  }
}
