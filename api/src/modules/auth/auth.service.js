// skillshare-hub/api/src/modules/auth/auth.service.js
import jwt from "jsonwebtoken";
import { env } from "../../config/env.js";

const demoUser = { id: 1, email: "demo@user.com", password: "demo1234" };

export async function register({ email, password }) {
  // демо: "реєструємо" без БД
  if (!email || !password) {
    const err = new Error("Email and password are required");
    err.status = 400;
    throw err;
  }
  return { id: 2, email, note: "demo registration (no DB)" };
}

export async function login({ email, password }) {
  const valid = email === demoUser.email && password === demoUser.password;
  if (!valid) {
    const err = new Error("Invalid credentials");
    err.status = 401;
    throw err;
  }
  const token = jwt.sign({ sub: demoUser.id, email: demoUser.email }, env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return { token, user: { id: demoUser.id, email: demoUser.email } };
}
