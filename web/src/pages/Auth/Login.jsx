import { useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../app/authContext";

export default function Login() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const submit = async e => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const next = {};
    if (!values.email.includes("@")) next.email = "Enter a valid email";
    if (!values.password) next.password = "Password is required";

    if (Object.keys(next).length > 0) {
      setErrors(next);
      setLoading(false);
      return;
    }

    try {
      await login({ email: values.email, password: values.password });
      navigate("/");
    } catch (err) {
      setErrors({ api: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header title="SkillShare Hub" />
      <main className={styles.auth}>
        <h1 className={styles.welcome}>Welcome</h1>
        <form onSubmit={submit} className={styles.form}>
          {errors.api && <p className={styles.apiError}>{errors.api}</p>}

          <Input
            placeholder="Email"
            value={values.email}
            onChange={e => setValues(v => ({ ...v, email: e.target.value }))}
            error={errors.email}
            disabled={loading}
          />
          <Input
            placeholder="Password"
            type="password"
            value={values.password}
            onChange={e => setValues(v => ({ ...v, password: e.target.value }))}
            error={errors.password}
            disabled={loading}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </Button>
        </form>

        <p className={styles.small}>
          Don't have an account? <Link to="/auth/register">Sign Up</Link>
        </p>
      </main>
    </>
  );
}
