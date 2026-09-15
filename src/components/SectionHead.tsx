import type { ReactNode } from "react";
import styles from "./SectionHead.module.css";

interface Props {
  title: string;
  /** Short factual note shown on the rail, e.g. a count. Omit where there is nothing to say. */
  note?: string;
  aside?: ReactNode;
}

/**
 * A section opens with a statement, not a label stack. Any note that carries real
 * information sits on the rail in mono, where the chart keeps its figures.
 */
export default function SectionHead({ title, note, aside }: Props) {
  return (
    <header className={`split ${styles.head}`}>
      <div className={styles.rail}>{note && <span className={styles.note}>{note}</span>}</div>
      <div className={styles.main}>
        <h2 className={styles.title}>{title}</h2>
        {aside}
      </div>
    </header>
  );
}
