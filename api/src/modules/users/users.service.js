import { query } from "../../db/index.js";

export async function listUsers(search) {
  const params = [];
  let sql = `
    SELECT
      id,
      display_name AS name,
      headline AS subtitle,
      rating,
      lessons_count AS lessons
    FROM users
  `;

  if (search) {
    params.push(`%${search}%`);
    sql += `
      WHERE display_name ILIKE $1
         OR headline ILIKE $1
    `;
  }

  sql += " ORDER BY rating DESC, lessons_count DESC";

  const res = await query(sql, params);
  return res.rows;
}

export async function getUserById(id) {
  const res = await query(
    `SELECT id, display_name AS name, headline AS subtitle,
            rating, lessons_count AS lessons
     FROM users WHERE id = $1`,
    [id]
  );
  return res.rows[0] ?? null;
}
