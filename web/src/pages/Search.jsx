import Header from "../components/Header";
import Input from "../components/Input/Input";
import SkillTag from "../components/SkillTag";
import Button from "../components/Button/Button";
import styles from "./Search.module.css";
import { useApi } from "../hooks/useApi";
import { useState } from "react";
import { useAuth } from "../app/authContext";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:4000/api";

export default function Search() {
  const [query, setQuery] = useState("");

  const { data, loading, error } = useApi(
    query ? `/users?q=${encodeURIComponent(query)}` : "/users"
  );

  const { token, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [inviting, setInviting] = useState(null);

  const results = data ?? [];

  const handleInvite = async (partnerId) => {
    if (!isAuthenticated) {
      navigate("/auth/login");
      return;
    }

    setInviting(partnerId);

    try {
      const res = await fetch(`${API_URL}/matches`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ partnerId }),
      });

      if (res.ok) {
        navigate("/chat");
      } else {
        const body = await res.json().catch(() => ({}));
        alert(body.message || "Failed to invite user");
      }
    } catch (e) {
      console.error(e);
      alert("Error connecting to server");
    } finally {
      setInviting(null);
    }
  };

  const renderContent = () => {
    if (loading) return <p className={styles.status}>Loading results...</p>;
    if (error)
      return <p className={styles.error}>Failed to load: {error.message}</p>;
    if (!results || results.length === 0)
      return <p className={styles.status}>No results found.</p>;

    return (
      <div className={styles.grid}>
        {results.map((p) => (
          <div key={p.id} className={styles.person}>
            <div className={styles.avatar}>{p.name[0]}</div>

            <div className={styles.info}>
              <div className={styles.name}>{p.name}</div>
              <div className={styles.sub}>{p.subtitle || "No info"}</div>
              <div className={styles.meta}>
                {p.rating} • {p.lessons} lessons
              </div>
            </div>

            <div className={styles.action}>
              <Button
                variant="primary"
                className={styles.inviteBtn}
                disabled={inviting === p.id}
                onClick={() => handleInvite(p.id)}
              >
                {inviting === p.id ? "..." : "Invite"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Header title="Find a Partner" back />
      <main className={styles.main}>
        <Input
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className={styles.filters}>
          <SkillTag>Skills</SkillTag>
          <SkillTag>Interests</SkillTag>
          <SkillTag>Availability</SkillTag>
        </div>

        <h3 className={styles.section}>Results</h3>

        {renderContent()}
      </main>
    </>
  );
}
