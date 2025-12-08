import { query } from "../../db/index.js";

// Нова функція для пошуку ID матчу партнера
export async function getMirrorMatchId(matchId) {
  const res = await query(
    `
    SELECT m2.id
    FROM matches m1
    JOIN matches m2 ON m1.user_id = m2.partner_id AND m1.partner_id = m2.user_id
    WHERE m1.id = $1
    `,
    [matchId]
  );
  return res.rows[0]?.id || null;
}

// Оновлена функція отримання повідомлень (шукає за парою людей)
export async function getMessages(matchId, limit = 50) {
  const res = await query(
    `
    SELECT 
      m.id, 
      m.match_id, 
      m.sender_id, 
      m.body, 
      m.created_at
    FROM messages m
    JOIN matches msg_match ON m.match_id = msg_match.id
    JOIN matches current_match ON current_match.id = $1
    WHERE 
      (msg_match.user_id = current_match.user_id AND msg_match.partner_id = current_match.partner_id)
      OR 
      (msg_match.user_id = current_match.partner_id AND msg_match.partner_id = current_match.user_id)
    ORDER BY m.created_at ASC
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
