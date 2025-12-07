import Header from "../components/Header";
import styles from "./Schedule.module.css";
import { useApi } from "../hooks/useApi";
import { useAuth } from "../app/authContext";

export default function Schedule() {
  const { isAuthenticated } = useAuth();
  const { data, loading, error } = useApi(
    isAuthenticated ? "/schedule/me" : null,
    { auth: true }
  );

  const items = data?.items ?? [];

  return (
    <>
      <Header title="My Availability" back />
      <main className={styles.main}>
        {!isAuthenticated && <p>Please log in to see your schedule.</p>}
        {isAuthenticated && (
          <>
            {loading && <p>Loading schedule...</p>}
            {error && <p className={styles.error}>{error.message}</p>}
            {!loading && !error && items.length === 0 && (
              <p>No availability set.</p>
            )}

            <div className={styles.list}>
              {items.map((slot) => (
                <div key={slot.id} className={styles.slot}>
                  <span className={styles.day}>Day {slot.day_of_week}</span>
                  <span className={styles.time}>
                    {slot.start_time} – {slot.end_time}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}
