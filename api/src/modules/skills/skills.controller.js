import * as service from "./skills.service.js";
import { ok } from "../../utils/http.js";

export async function list(_req, res, next) {
  try {
    const skills = await service.listSkills();
    return ok(res, { items: skills });
  } catch (e) {
    next(e);
  }
}
