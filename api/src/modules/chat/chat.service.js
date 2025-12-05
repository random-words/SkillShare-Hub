import { query } from "../../db/index.js";

export async function getMessages(matchId, limit = 50) {
  const res = await query(
    `
    SELECT
      id,
      match_id,
      sender_id,
      body,
      created_at
    FROM messages
    WHERE match_id = $1
    ORDER BY created_at ASC
    LIMIT $2
    `,
    [matchId, limit]
  );
  return res.rows;
}

export async function createMessage({ matchId, senderId, body }) {
  const res = await query(
    `
    INSERT INTO messages (match_id, sender_id, body)
    VALUES ($1, $2, $3)
    RETURNING id, match_id, sender_id, body, created_at
    `,
    [matchId, senderId, body]
  );
  return res.rows[0];
}
