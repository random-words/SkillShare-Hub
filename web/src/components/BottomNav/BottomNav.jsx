import { NavLink } from "react-router-dom";
import styles from "./BottomNav.module.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/search", label: "Search" },
  { to: "/schedule", label: "Schedule" },
  { to: "/chat", label: "Chat" },
  { to: "/profile", label: "Profile" },
];

export default function BottomNav() {
  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : ""].join(" ")
          }
          end={link.to === "/"}
        >
          <span>{link.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
