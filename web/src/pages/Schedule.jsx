import Header from "../components/Header.jsx";
import styles from "./Schedule.module.css";

export default function Schedule() {
  const mockEvents = [
    {
      id: 1,
      title: "Python Session with John",
      date: "2025-11-04",
      time: "14:00 - 15:00",
      type: "online",
    },
    {
      id: 2,
      title: "Web Dev Practice",
      date: "2025-11-05",
      time: "10:00 - 11:30",
      type: "offline",
    },
    {
      id: 3,
      title: "Data Analysis Workshop",
      date: "2025-11-06",
      time: "16:00 - 17:00",
      type: "online",
    },
  ];

  return (
    <div className={styles.schedule}>
      <Header title="Schedule" menu />
      <div className={styles.content}>
        <section className={styles.upcoming}>
          <h3 className={styles.sectionTitle}>Upcoming Sessions</h3>
          <div className={styles.events}>
            {mockEvents.map(event => (
              <div key={event.id} className={styles.event}>
                <div className={styles.eventDate}>
                  <span className={styles.day}>{new Date(event.date).getDate()}</span>
                  <span className={styles.month}>
                    {new Date(event.date).toLocaleDateString("en", { month: "short" })}
                  </span>
                </div>
                <div className={styles.eventDetails}>
                  <h4 className={styles.eventTitle}>{event.title}</h4>
                  <p className={styles.eventTime}>{event.time}</p>
                  <span className={`${styles.badge} ${styles[event.type]}`}>{event.type}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <button className={styles.addButton}>
          <span className={styles.addIcon}>+</span>
          Schedule New Session
        </button>
      </div>
    </div>
  );
}
