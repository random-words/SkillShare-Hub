import { NavLink } from "react-router-dom";
import styles from "./BottomNav.module.css";

const Item = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => [styles.item, isActive ? styles.active : ""].join(" ")}
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

export default function BottomNav() {
  return (
    <nav className={styles.nav}>
      <Item to="/" label="Home" icon={<HomeIcon />} />
      <Item to="/search" label="Search" icon={<SearchIcon />} />
      <Item to="/profile" label="Profile" icon={<UserIcon />} />
    </nav>
  );
}

const HomeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const SearchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
    <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const UserIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M4 21c1.8-4 5.2-6 8-6s6.2 2 8 6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);
