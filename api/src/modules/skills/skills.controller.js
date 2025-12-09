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
    const { skills, type } = req.body;

    const isTeaching = type === "teach";

    if (!skills || !Array.isArray(skills)) {
      throw httpError(400, "Invalid skills format");
    }

    await query(
      "DELETE FROM user_skills WHERE user_id = $1 AND can_teach = $2",
      [userId, isTeaching]
    );

    for (const item of skills) {
      await query(
        `INSERT INTO user_skills (user_id, skill_id, level, can_teach)
         VALUES ($1, $2, $3, $4)`,
        [userId, item.skillId, item.level, isTeaching]
      );
    }

    return ok(res, { message: "Skills updated successfully" });
  } catch (e) {
    next(e);
  }
}
