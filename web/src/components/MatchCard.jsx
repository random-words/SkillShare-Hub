import React from "react";
import styles from "./MatchCard.module.css";

export default function MatchCard({ name, subtitle, meta }) {
  const initial = name?.[0]?.toUpperCase() ?? "?";

  return (
    <div className={styles.card} data-testid="match-card">
      <div className={styles.avatar} data-testid="match-card-avatar">
        {initial}
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {meta && (
          <p className={styles.meta} data-testid="match-card-meta">
            {meta}
          </p>
        )}
      </div>
    </div>
  );
}
