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

export async function createMatch(userId, partnerId) {
  if (userId === partnerId) {
    throw new Error("Cannot match with yourself");
  }

  const existing = await query(
    "SELECT id FROM matches WHERE user_id = $1 AND partner_id = $2",
    [userId, partnerId]
  );

  if (existing.rowCount > 0) {
    return existing.rows[0];
  }

  const res1 = await query(
    "INSERT INTO matches (user_id, partner_id) VALUES ($1, $2) RETURNING id",
    [userId, partnerId]
  );

  await query("INSERT INTO matches (user_id, partner_id) VALUES ($1, $2)", [
    partnerId,
    userId,
  ]);

  return res1.rows[0];
}
