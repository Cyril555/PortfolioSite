import SectionHead from "./SectionHead";
import { EXPERIENCE } from "@/lib/experience";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.section}`}>
      <div className="sheet">
        <SectionHead title="Experience" note="Timeline" />

        <ol className={styles.list}>
          {EXPERIENCE.map((r) => (
            <li key={r.org} className={`split ${styles.row}`}>
              <div className={styles.rail}>
                <span className={`figure ${styles.period}`}>{r.period}</span>
                {r.current && <span className={styles.now}>Now</span>}
              </div>
              <div className={styles.body}>
                <h3 className={styles.role}>{r.role}</h3>
                <p className={styles.org}>{r.org}</p>
                <ul className={styles.points}>
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
