import Header from "../components/Header";
import SkillTag from "../components/SkillTag";
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <>
      <Header title="Profile" back />
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.avatar}>S</div>
          <h2 className={styles.name}>Sophia Carter</h2>
          <div className={styles.role}>Software Engineer</div>
          <div className={styles.muted}>Joined 2022</div>
        </div>

        <p className={styles.bio}>
          Passionate about coding and sharing knowledge. Let's learn together!
        </p>

        <h3 className={styles.h3}>Skills I Can Teach</h3>
        <div className={styles.tags}>
          <SkillTag>Python</SkillTag>
          <SkillTag>Data Analysis</SkillTag>
          <SkillTag>Web Development</SkillTag>
        </div>

        <h3 className={styles.h3}>Skills I Want to Learn</h3>
        <div className={styles.tags}>
          <SkillTag>Machine Learning</SkillTag>
          <SkillTag>Cloud Computing</SkillTag>
          <SkillTag>Cybersecurity</SkillTag>
        </div>

        <div className={styles.ratingCard}>
          <div className={styles.score}>4.8</div>
          <div className={styles.stars}>★★★★★</div>
          <div className={styles.rev}>25 reviews</div>
          <div className={styles.bars}>
            {[70, 20, 5, 3, 2].map((v, i) => (
              <div key={i} className={styles.row}>
                <span>{5 - i}</span>
                <div className={styles.bar}>
                  <i style={{ width: `${v}%` }} />
                </div>
                <span className={styles.mutedText}>{v}%</span>
              </div>
            ))}
          </div>
        </div>

        <h3 className={styles.h3}>Availability</h3>
        <div className={styles.calendar}>
          {Array.from({ length: 35 }).map((_, i) => {
            const day = i - 1;
            const active = [5].includes(i);
            return (
              <div key={i} className={[styles.cell, active ? styles.active : ""].join(" ")}>
                {day > 0 && day <= 30 ? day : ""}
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
