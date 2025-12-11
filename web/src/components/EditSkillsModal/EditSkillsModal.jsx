import { useState, useEffect } from "react";
import Button from "../Button/Button";
import styles from "./EditSkillsModal.module.css";
import { useAuth } from "../../app/authContext";

export default function EditSkillsModal({
  type,
  initialSkills,
  onClose,
  onSave,
}) {
  const [availableSkills, setAvailableSkills] = useState([]);
  const [mySkills, setMySkills] = useState(
    initialSkills.map((s) => ({ skillId: s.id, name: s.name, level: s.level }))
  );

  const [selectedId, setSelectedId] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("beginner");
  const { token } = useAuth();

  useEffect(() => {
    fetch("/api/skills")
      .then((res) => res.json())
      .then(setAvailableSkills);
  }, []);

  const handleAdd = () => {
    if (!selectedId) return;
    if (mySkills.find((s) => s.skillId === Number(selectedId))) return;

    const skillObj = availableSkills.find((s) => s.id === Number(selectedId));
    setMySkills([
      ...mySkills,
      {
        skillId: Number(selectedId),
        name: skillObj.name,
        level: selectedLevel,
      },
    ]);
  };

  const handleRemove = (id) => {
    setMySkills(mySkills.filter((s) => s.skillId !== id));
  };

  const handleSave = async () => {
    try {
      const res = await fetch("/api/skills/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ skills: mySkills, type }),
      });

      if (res.ok) {
        onSave();
        onClose();
      } else {
        alert("Error saving");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Edit {type === "teach" ? "Teaching" : "Learning"} Skills</h2>
          <button onClick={onClose} className={styles.closeBtn}>
            &times;
          </button>
        </div>

        <div className={styles.controls}>
          <select
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            className={styles.select}
          >
            <option value="">Select skill...</option>
            {availableSkills.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className={styles.select}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <button onClick={handleAdd} className={styles.addBtn}>
            Add
          </button>
        </div>

        <ul className={styles.list}>
          {mySkills.map((s, i) => (
            <li key={i} className={styles.item}>
              <span>
                {s.name} ({s.level})
              </span>
              <button
                onClick={() => handleRemove(s.skillId)}
                className={styles.removeBtn}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.footer}>
          <Button onClick={onClose} variant="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
