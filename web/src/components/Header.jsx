import styles from "./Header.module.css";

export default function Header({ title, back = false, menu = false }) {
  return (
    <header className={styles.header}>
      <div className={styles.side}>{back ? <BackIcon /> : menu ? <MenuIcon /> : null}</div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.side} />
    </header>
  );
}

const BackIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24">
    <path
      d="M15 19l-7-7 7-7"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24">
    <path
      d="M4 6h16M4 12h16M4 18h16"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);
