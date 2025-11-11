import Header from "../components/Header";
import Input from "../components/Input/Input";
import SkillTag from "../components/SkillTag";
import styles from "./Search.module.css";
import { useApi } from "../hooks/useApi";

export default function Search() {
  const { data: results, loading, error } = useApi("/users");

  const renderContent = () => {
    if (loading) {
      return <p>Loading results...</p>;
    }

    if (error) {
      return <p className={styles.error}>Failed to load results: {error.message}</p>;
    }

    if (!results || results.length === 0) {
      return <p>No results found.</p>;
    }

    return (
      <div className={styles.grid}>
        {results.map(p => (
          <div key={p.id} className={styles.person}>
            <div className={styles.avatar}>{p.name[0]}</div>
            <div className={styles.name}>{p.name}</div>
            <div className={styles.sub}>{p.subtitle}</div>
            <div className={styles.meta}>
              {p.rating} • {p.lessons} lessons
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
        <Input placeholder="Search" />
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
