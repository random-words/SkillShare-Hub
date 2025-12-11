import { verifyToken } from "../utils/crypto.js";

export function authRequired(req, res, next) {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = header.slice(7);

  try {
    const payload = verifyToken(token);
    req.user = {
      id: payload.sub ?? payload.id,
      email: payload.email,
    };
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
