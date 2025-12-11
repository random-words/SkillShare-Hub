import styles from "./SkillTag.module.css";

export default function SkillTag({ children }) {
  return <span className={styles.tag}>{children}</span>;
}
