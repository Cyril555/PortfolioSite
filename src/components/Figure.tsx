import styles from "./Figure.module.css";

/**
 * A figure as it would be read off a chart. Where a value records a change
 * ("28.6→59.3%", "8→9"), the arrow is the only place colour appears on the site.
 */
export default function Figure({ value }: { value: string }) {
  const parts = value.split("→");
  return (
    <span className={`figure ${styles.value}`}>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && <span className={styles.arrow} aria-label="to">→</span>}
          {part}
        </span>
      ))}
    </span>
  );
}
