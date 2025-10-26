import { useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./auth.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const submit = e => {
    e.preventDefault();
    const next = {};
    if (!values.email.includes("@")) next.email = "Enter a valid email";
    if (values.password.length < 6) next.password = "Min 6 characters";
    setErrors(next);
  };

  return (
    <>
      <Header title="SkillShare Hub" />
      <main className={styles.auth}>
        <h1 className={styles.welcome}>Welcome</h1>
        <form onSubmit={submit} className={styles.form}>
          <Input
            placeholder="Email"
            value={values.email}
            onChange={e => setValues(v => ({ ...v, email: e.target.value }))}
            error={errors.email}
          />
          <Input
            placeholder="Password"
            type="password"
            value={values.password}
            onChange={e => setValues(v => ({ ...v, password: e.target.value }))}
            error={errors.password}
          />
          <Button type="submit">Log In</Button>
        </form>

        <p className={styles.small}>
          Don't have an account? <Link to="/auth/register">Sign Up</Link>
        </p>
      </main>
    </>
  );
}
