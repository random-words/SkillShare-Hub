import * as service from "./matches.service.js";
import { ok, created } from "../../utils/http.js";

export async function list(req, res, next) {
  try {
    const matches = await service.getMatchesForUser(req.user.id);
    return ok(res, { items: matches });
  } catch (e) {
    next(e);
  }
}

export async function create(req, res, next) {
  try {
    const { partnerId } = req.body;
    if (!partnerId) {
      return res.status(400).json({ message: "Partner ID is required" });
    }

    const match = await service.createMatch(req.user.id, Number(partnerId));
    return created(res, match);
  } catch (e) {
    next(e);
  }
}
