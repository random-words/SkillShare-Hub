import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SkillTag from "../components/SkillTag";
import styles from "./Profile.module.css";
import { useAuth } from "../app/authContext";
import EditSkillsModal from "../components/EditSkillsModal/EditSkillsModal";

export default function Profile() {
  const { user: contextUser, isAuthenticated, logout, token } = useAuth();
  const navigate = useNavigate();

  const [freshUser, setFreshUser] = useState(null);
  const [editingType, setEditingType] = useState(null);

  const fetchProfile = () => {
    if (isAuthenticated && token) {
      fetch("/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => setFreshUser(data.user))
        .catch(console.error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [isAuthenticated, token]);

  if (!isAuthenticated) {
    return (
      <>
        <Header title="Profile" back />
        <main className={styles.main}>
          <p>Please log in to view your profile.</p>
        </main>
      </>
    );
  }

  const handleLogout = () => {
    const confirm = window.confirm("Are you sure you want to log out?");
    if (confirm) {
      logout();
      navigate("/auth/login");
    }
  };

  const currentUser = freshUser || contextUser;

  const name = currentUser?.name || currentUser?.email?.split("@")[0] || "User";
  const initial = name[0]?.toUpperCase();
  const role = currentUser?.headline || "Member";

  const teachSkills = currentUser?.skills || [];
  const learnSkills = currentUser?.learning || [];

  return (
    <>
      <Header title="Profile" back />
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.avatar}>{initial}</div>
          <h2 className={styles.name}>{name}</h2>
          <div className={styles.role}>{role}</div>
          <div className={styles.muted}>{currentUser?.email}</div>
        </div>

        <p className={styles.bio}>
          Passionate about sharing knowledge. Let's learn together!
        </p>

        <div className={styles.sectionHeader}>
          <h3 className={styles.h3}>Skills I Can Teach</h3>
          <button
            onClick={() => setEditingType("teach")}
            className={styles.editBtn}
          >
            ✎ Edit
          </button>
        </div>
        <div className={styles.tags}>
          {teachSkills.length > 0 ? (
            teachSkills.map((skill, index) => (
              <SkillTag key={index}>{skill.name}</SkillTag>
            ))
          ) : (
            <p className={styles.muted} style={{ fontSize: "0.9rem" }}>
              No skills added yet.
            </p>
          )}
        </div>

        <div className={styles.sectionHeader}>
          <h3 className={styles.h3}>Skills I Want to Learn</h3>
          <button
            onClick={() => setEditingType("learn")}
            className={styles.editBtn}
          >
            ✎ Edit
          </button>
        </div>
        <div className={styles.tags}>
          {learnSkills.length > 0 ? (
            learnSkills.map((skill, index) => (
              <SkillTag key={index} variant="secondary">
                {skill.name}
              </SkillTag>
            ))
          ) : (
            <p className={styles.muted} style={{ fontSize: "0.9rem" }}>
              No learning goals yet.
            </p>
          )}
        </div>

        <div className={styles.logoutWrapper}>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </main>

      {editingType && (
        <EditSkillsModal
          type={editingType}
          initialSkills={editingType === "teach" ? teachSkills : learnSkills}
          onClose={() => setEditingType(null)}
          onSave={fetchProfile}
        />
      )}
    </>
  );
}
