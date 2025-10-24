import Header from "../components/Header";
import Input from "../components/Input/Input";
import SkillTag from "../components/SkillTag";
import styles from "./Search.module.css";

const MOCK = [
  { name: "Ethan Carter", subtitle: "Photography, Editing", rating: "4.8", lessons: 12 },
  { name: "Sophia Bennett", subtitle: "Graphic Design, Illustration", rating: "4.9", lessons: 15 },
  { name: "Liam Harper", subtitle: "Coding, Web Development", rating: "4.7", lessons: 10 },
  { name: "Olivia Hayes", subtitle: "Writing, Content Creation", rating: "4.6", lessons: 8 },
];

export default function Search() {
  return (
    <>
      <Header title="Find a Partner" back />
      <main className={styles.main}>
        <Input placeholder="Search" />
        <div className={styles.filters}>
          <SkillTag>Skills</SkillTag>
          <SkillTag>Interests</SkillTag>
          <SkillTag>Availability</SkillTag>
        </div>

        <h3 className={styles.section}>Results</h3>

        <div className={styles.grid}>
          {MOCK.map(p => (
            <div key={p.name} className={styles.person}>
              <div className={styles.avatar}>{p.name[0]}</div>
              <div className={styles.name}>{p.name}</div>
              <div className={styles.sub}>{p.subtitle}</div>
              <div className={styles.meta}>
                {p.rating} • {p.lessons} lessons
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
