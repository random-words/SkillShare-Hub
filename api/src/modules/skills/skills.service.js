import { query } from "../../db/index.js";

export async function listSkills() {
  const res = await query("SELECT id, name FROM skills ORDER BY name ASC", []);
  return res.rows;
}
