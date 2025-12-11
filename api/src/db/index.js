import pkg from "pg";
import { env } from "../config/env.js";

const { Pool } = pkg;

export const pool = new Pool({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
});

export async function query(text, params) {
  const res = await pool.query(text, params);
  return res;
}
