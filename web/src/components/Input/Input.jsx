import styles from "./Input.module.css";

export default function Input({ label, error, ...rest }) {
  return (
    <label className={styles.wrap}>
      {label && <span className={styles.label}>{label}</span>}
      <input className={[styles.input, error ? styles.error : ""].join(" ")} {...rest} />
      {error && <span className={styles.errText}>{error}</span>}
    </label>
  );
}
