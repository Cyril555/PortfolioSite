import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { EXPERIENCE } from "@/lib/experience";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className="band" id="experience">
      <div className="frame">
        <SectionHead label="Timeline" title="Experience" />
        <div className={styles.list}>
          {EXPERIENCE.map((r, i) => (
            <Reveal key={r.org} delay={0.04 * i}>
              <div className={styles.row}>
                <div className={styles.when}>
                  {r.period}
                  {r.current && <span className={styles.now}>Now</span>}
                </div>
                <div className={styles.who}>
                  <h3>{r.role}</h3>
                  <div className={styles.org}>{r.org}</div>
                </div>
                <ul className={styles.points}>
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
