import type { ReactNode } from "react";
import styles from "./SectionHead.module.css";

interface Props {
  label: string;
  title: string;
  aside?: ReactNode;
}

/** Ruled header row shared by every light section: mono label, light title, optional right slot. */
export default function SectionHead({ label, title, aside }: Props) {
  return (
    <header className={styles.head}>
      <div className={styles.label}>{label}</div>
      <h2 className={styles.title}>{title}</h2>
      {aside && <div className={styles.aside}>{aside}</div>}
    </header>
  );
}
