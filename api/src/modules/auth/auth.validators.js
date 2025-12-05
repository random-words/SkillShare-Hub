export function validateRegister(req, res, next) {
  const { email, password } = req.body ?? {};
  const errors = {};

  if (!email || !email.includes("@")) {
    errors.email = "Valid email is required";
  }
  if (!password || password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ message: "Validation error", errors });
  }
  next();
}

export function validateLogin(req, res, next) {
  const { email, password } = req.body ?? {};
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  next();
}
