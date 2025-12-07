import Header from "../components/Header";
import SkillTag from "../components/SkillTag";
import styles from "./Profile.module.css";
import { useAuth } from "../app/authContext";

export default function Profile() {
  const { user, isAuthenticated } = useAuth();

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

  const name = user?.name || user?.email?.split("@")[0] || "User";
  const initial = name[0]?.toUpperCase();
  const role = user?.headline || "Member";

  return (
    <>
      <Header title="Profile" back />
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.avatar}>{initial}</div>
          <h2 className={styles.name}>{name}</h2>
          <div className={styles.role}>{role}</div>
          <div className={styles.muted}>{user?.email}</div>
        </div>

        <p className={styles.bio}>
          Passionate about sharing knowledge. Let's learn together!
        </p>

        <h3 className={styles.h3}>Skills I Can Teach</h3>
        <div className={styles.tags}>
          {/* Поки що статичні, бо в БД ще немає таблиці навичок для юзера, 
              але це можна додати пізніше */}
          <SkillTag>HTML</SkillTag>
          <SkillTag>CSS</SkillTag>
        </div>

        <h3 className={styles.h3}>Skills I Want to Learn</h3>
        <div className={styles.tags}>
          <SkillTag>JavaScript</SkillTag>
          <SkillTag>React</SkillTag>
        </div>
      </main>
    </>
  );
}
