import { query } from "../../db/index.js";
import { ok } from "../../utils/http.js";

export async function getUsers(req, res, next) {
  try {
    const { q } = req.query;

    const searchTerm = q ? `%${q}%` : "%";

    const text = `
      SELECT 
        u.id, 
        u.display_name as name, 
        u.headline as subtitle, 
        u.rating, 
        u.lessons_count as lessons,
        (
           SELECT string_agg(s.name, ', ')
           FROM user_skills us
           JOIN skills s ON s.id = us.skill_id
           WHERE us.user_id = u.id AND us.can_teach = true
        ) as skills_str
      FROM users u
      WHERE 
        u.display_name ILIKE $1 
        OR 
        EXISTS (
           SELECT 1 FROM user_skills us
           JOIN skills s ON s.id = us.skill_id
           WHERE us.user_id = u.id 
           AND us.can_teach = true
           AND s.name ILIKE $1
        )
      LIMIT 50
    `;

    const result = await query(text, [searchTerm]);

    return ok(res, result.rows);
  } catch (e) {
    next(e);
  }
}
