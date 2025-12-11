import { query } from "../../db/index.js";

export async function getScheduleForUser(userId) {
  const res = await query(
    `
    SELECT
      id,
      day_of_week,
      start_time,
      end_time
    FROM availabilities
    WHERE user_id = $1
    ORDER BY day_of_week, start_time
    `,
    [userId]
  );

  return res.rows;
}
