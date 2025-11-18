import { Outlet, useLocation } from "react-router-dom";
import styles from "./App.module.css";
import BottomNav from "./components/BottomNav/BottomNav";

export default function App() {
  const { pathname } = useLocation();
  const isAuth = pathname.startsWith("/auth");
  return (
    <div className={styles.app}>
      <div className={styles.screen}>
        <Outlet />
        {!isAuth && <BottomNav />}
      </div>
    </div>
  );
}
