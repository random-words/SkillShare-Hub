import { query } from "../../db/index.js";

const DEMO_USERS = [
  {
    id: 1,
    name: "Ethan Carter",
    subtitle: "Photography, Editing",
    rating: "4.8",
    lessons: 12,
  },
  {
    id: 2,
    name: "Sophia Bennett",
    subtitle: "Graphic Design, Illustration",
    rating: "4.9",
    lessons: 15,
  },
  {
    id: 3,
    name: "Liam Harper",
    subtitle: "Coding, Web Development",
    rating: "4.7",
    lessons: 10,
  },
  {
    id: 4,
    name: "Olivia Hayes",
    subtitle: "Writing, Content Creation",
    rating: "4.6",
    lessons: 8,
  },
];

function filterDemoUsers(search) {
  if (!search) return DEMO_USERS;
  const needle = search.toLowerCase();

  return DEMO_USERS.filter(
    (u) =>
      u.name.toLowerCase().includes(needle) ||
      u.subtitle.toLowerCase().includes(needle)
  );
}

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

  sql += " ORDER BY rating DESC NULLS LAST, lessons_count DESC NULLS LAST";

  let rows = [];

  try {
    const res = await query(sql, params);
    rows = res.rows;
  } catch (err) {
    console.error("DB error in listUsers:", err);
    rows = [];
  }

  if (!rows || rows.length === 0) {
    return filterDemoUsers(search);
  }

  return rows;
}

export async function getUserById(id) {
  try {
    const res = await query(
      `
      SELECT
        id,
        display_name AS name,
        headline AS subtitle,
        rating,
        lessons_count AS lessons
      FROM users
      WHERE id = $1
    `,
      [id]
    );

    const user = res.rows[0];

    if (user) return user;

    const demo = DEMO_USERS.find((u) => u.id === Number(id));
    return demo ?? null;
  } catch (err) {
    console.error("DB error in getUserById:", err);
    const demo = DEMO_USERS.find((u) => u.id === Number(id));
    return demo ?? null;
  }
}
