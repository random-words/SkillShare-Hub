import styles from "./MatchCard.module.css";

export default function MatchCard({ name, subtitle, rating, lessons }) {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>{name?.[0] || "U"}</div>
      <div className={styles.meta}>
        <div className={styles.name}>{name}</div>
        <div className={styles.sub}>{subtitle}</div>
        {(rating || lessons) && (
          <div className={styles.small}>
            {rating && <span>{rating} • </span>}
            {lessons && <span>{lessons} lessons</span>}
          </div>
        )}
      </div>
    </div>
  );
}
