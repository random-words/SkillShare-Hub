import { query } from "../../db/index.js";

export async function getMatchesForUser(userId) {
  const res = await query(
    `
    SELECT
      m.id,
      u.id AS partner_id,
      u.display_name AS name,
      u.headline AS subtitle,
      u.rating,
      u.lessons_count AS lessons
    FROM matches m
    JOIN users u ON u.id = m.partner_id
    WHERE m.user_id = $1
    ORDER BY m.created_at DESC
    `,
    [userId]
  );

  return res.rows;
}
