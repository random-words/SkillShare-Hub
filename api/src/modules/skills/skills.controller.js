import { query } from "../../db/index.js";
import { httpError, ok } from "../../utils/http.js";

export async function getAllSkills(req, res, next) {
  try {
    const result = await query("SELECT id, name FROM skills ORDER BY name ASC");
    return ok(res, result.rows);
  } catch (e) {
    next(e);
  }
}

export async function addUserSkills(req, res, next) {
  try {
    const userId = req.user.id;
    const { skills } = req.body;

    if (!skills || !Array.isArray(skills) || skills.length === 0) {
      throw httpError(400, "Please select at least one skill");
    }

    for (const item of skills) {
      await query(
        `INSERT INTO user_skills (user_id, skill_id, level, can_teach)
         VALUES ($1, $2, $3, true)
         ON CONFLICT (user_id, skill_id, can_teach) DO UPDATE 
         SET level = EXCLUDED.level`,
        [userId, item.skillId, item.level]
      );
    }

    return ok(res, { message: "Skills updated successfully" });
  } catch (e) {
    next(e);
  }
}
