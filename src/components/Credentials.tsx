import SectionHead from "./SectionHead";
import { EDUCATION, SKILLS } from "@/lib/experience";
import styles from "./Credentials.module.css";

export default function Credentials() {
  return (
    <section id="credentials" className={`section ${styles.section}`}>
      <div className="sheet">
        <SectionHead title="Education and skills" note="Credentials" />

        <ol className={styles.list}>
          {EDUCATION.map((e) => (
            <li key={e.school} className={`split ${styles.row}`}>
              <span className={`figure ${styles.period}`}>{e.period}</span>
              <div>
                <h3 className={styles.school}>{e.school}</h3>
                <p className={styles.degree}>{e.degree}</p>
                <p className={styles.detail}>{e.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.skills}>
          {Object.entries(SKILLS).map(([group, items]) => (
            <div key={group} className={`split ${styles.row}`}>
              <h3 className={styles.group}>{group}</h3>
              <ul className={styles.items}>
                {items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
