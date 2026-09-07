import Reveal from "./Reveal";
import { EXPERIENCE } from "@/lib/experience";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <Reveal>
        <h2 className={styles.heading}>Experience</h2>
      </Reveal>
      <ol className={styles.list}>
        {EXPERIENCE.map((r, i) => (
          <Reveal key={r.org} delay={0.05 * i}>
            <li className={`${styles.row} ${r.current ? styles.current : ""}`}>
              <div className={styles.when}>{r.period}</div>
              <div className={styles.marker}>
                <span className={styles.dot} />
              </div>
              <div className={styles.what}>
                <h3 className={styles.role}>
                  {r.role}
                  {r.current && <span className={styles.now}>Now</span>}
                </h3>
                <div className={styles.org}>{r.org}</div>
                <ul className={styles.points}>
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
