import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { EDUCATION, SKILLS } from "@/lib/experience";
import styles from "./Credentials.module.css";

export default function Credentials() {
  return (
    <section className="band" id="credentials">
      <div className="frame">
        <SectionHead label="Credentials" title="Education and skills" />
        <div className={styles.grid}>
          <div className={styles.edu}>
            {EDUCATION.map((e, i) => (
              <Reveal key={e.school} delay={0.05 * i}>
                <div className={styles.eduItem}>
                  <div className={styles.period}>{e.period}</div>
                  <div>
                    <div className={styles.school}>{e.school}</div>
                    <div className={styles.degree}>{e.degree}</div>
                    <div className={styles.detail}>{e.detail}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className={styles.skills}>
            {Object.entries(SKILLS).map(([group, items], i) => (
              <Reveal key={group} delay={0.08 + 0.05 * i}>
                <div className={styles.group}>
                  <div className={styles.groupLabel}>{group}</div>
                  <ul className={styles.items}>
                    {items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
