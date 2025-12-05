import * as service from "./schedule.service.js";
import { ok } from "../../utils/http.js";

export async function mySchedule(req, res, next) {
  try {
    const items = await service.getScheduleForUser(req.user.id);
    return ok(res, { items });
  } catch (e) {
    next(e);
  }
}
