import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "./Auth/auth.module.css";

export default function NotFound() {
  return (
    <>
      <Header title="Oops!" />
      <main
        className={styles.auth}
        style={{
          justifyContent: "center",
          gap: "2rem",
          color: "var(--text-primary)",
        }}
      >
        <h1 className={styles.welcome} style={{ fontSize: "5rem" }}>
          404
        </h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist.</p>
        <Link
          to="/"
          style={{ textDecoration: "underline", color: "var(--primary)" }}
        >
          Go back to Home
        </Link>
      </main>
    </>
  );
}
