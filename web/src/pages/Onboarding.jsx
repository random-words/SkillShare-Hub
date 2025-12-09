import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; // Перевір шлях (може бути ../components/Header)
import Button from "../components/Button/Button";
import styles from "./Onboarding.module.css";
import { useAuth } from "../app/authContext";

export default function Onboarding() {
  const [availableSkills, setAvailableSkills] = useState([]);
  const [selectedSkillId, setSelectedSkillId] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("beginner");
  const [mySkills, setMySkills] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    fetch("/api/skills")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setAvailableSkills(data);
        }
      })
      .catch((err) => console.error("Failed to load skills", err));
  }, []);

  const handleAddSkill = () => {
    if (!selectedSkillId) return;

    const skillObj = availableSkills.find(
      (s) => s.id === Number(selectedSkillId)
    );

    if (mySkills.find((s) => s.skillId === Number(selectedSkillId))) return;

    setMySkills([
      ...mySkills,
      {
        skillId: Number(selectedSkillId),
        name: skillObj.name,
        level: selectedLevel,
      },
    ]);
  };

  const handleSubmit = async () => {
    if (mySkills.length === 0) return;
    setLoading(true);

    try {
      const response = await fetch("/api/skills/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ skills: mySkills, type: "teach" }),
      });

      if (response.ok) {
        window.location.href = "/profile";
      } else {
        alert("Error saving skills");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Якщо Header не працює, перевір імпорт зверху */}
      <Header title="Complete your profile" />

      <main className={styles.container}>
        <h1 className={styles.title}>What can you teach?</h1>
        <p className={styles.subtitle}>
          Select skills you want to share with others.
        </p>

        <div className={styles.controls}>
          <select
            value={selectedSkillId}
            onChange={(e) => setSelectedSkillId(e.target.value)}
            className={styles.skillSelect} /* <-- Ось тут нові класи */
          >
            <option value="">Select a skill...</option>
            {availableSkills.map((skill) => (
              <option key={skill.id} value={skill.id}>
                {skill.name}
              </option>
            ))}
          </select>

          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className={styles.levelSelect} /* <-- І тут */
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          <button onClick={handleAddSkill} className={styles.addButton}>
            Add
          </button>
        </div>

        {mySkills.length > 0 && (
          <ul className={styles.skillsList}>
            {mySkills.map((item, index) => (
              <li key={index} className={styles.skillItem}>
                <span className={styles.skillText}>{item.name}</span>
                <span className={styles.skillLevel}>{item.level}</span>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.submitButtonWrapper}>
          <Button
            onClick={handleSubmit}
            disabled={loading || mySkills.length === 0}
            className={styles.submitButton}
          >
            {loading ? "Saving..." : "Finish Setup"}
          </Button>
        </div>
      </main>
    </>
  );
}
