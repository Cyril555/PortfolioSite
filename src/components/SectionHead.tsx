import type { ReactNode } from "react";
import styles from "./SectionHead.module.css";

interface Props {
  label: string;
  title: string;
  aside?: ReactNode;
}

/** Ruled header row shared by every section: small mono label stacked above a left-aligned title, optional right slot. */
export default function SectionHead({ label, title, aside }: Props) {
  return (
    <header className={styles.head}>
      <div className={styles.text}>
        <div className={styles.label}>{label}</div>
        <h2 className={styles.title}>{title}</h2>
      </div>
      {aside}
    </header>
  );
}
