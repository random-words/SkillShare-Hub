import jwt from "jsonwebtoken";
import crypto from "crypto";

const SECRET = process.env.JWT_SECRET || "super-secret-key";

export function verifyToken(token) {
  return jwt.verify(token, SECRET);
}

export function createToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: "24h" });
}

export function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return `${salt}:${hash}`;
}

export function comparePassword(password, storedHash) {
  const [salt, key] = storedHash.split(":");
  const derivedKey = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return key === derivedKey;
}
