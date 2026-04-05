import Reveal from "./Reveal";
import styles from "./Credentials.module.css";

const EDUCATION = [
  {
    period: "2025 — 2027",
    school: "London School of Economics",
    degree: "Global Master's in Management (GMiM)",
    detail: "Predicted Distinction · Student Ambassador",
  },
  {
    period: "2018 — 2023",
    school: "University of Sheffield",
    degree: "MBChB — Medicine & Surgery",
    detail: "Second author, radiology meta-analysis · Palliative care service review",
  },
  {
    period: "2010 — 2018",
    school: "Dulwich College Suzhou",
    degree: "International Baccalaureate — 43/45",
    detail: "Higher Level 776",
  },
];

const LANGUAGES = [
  { name: "English", level: "Native", dots: 5 },
  { name: "Mandarin", level: "Professional", dots: 4 },
  { name: "Spanish", level: "Professional", dots: 4 },
  { name: "Tamil", level: "Professional", dots: 4 },
];

const TECHNICAL = [
  "Python",
  "HTML / CSS / JavaScript",
  "Figma & UI/UX Design",
  "Health-Tech Prototyping",
  "Project Management",
];

const FINANCE = ["Accounting (CFI Certified)", "Financial Analysis (CFI Certified)"];

export default function Credentials() {
  return (
    <section className={styles.section} id="credentials">
      <Reveal>
        <div className={styles.sectionHead}>
          <span className={styles.num}>03</span>
          <div className={styles.line} />
        </div>
        <div className={styles.title}>Credentials</div>
      </Reveal>

      <div className={styles.grid}>
        <div>
          <Reveal delay={0.05}>
            <div className={styles.groupLabel}>Education</div>
          </Reveal>
          <div className={styles.eduStack}>
            {EDUCATION.map((e, i) => (
              <Reveal key={i} delay={0.08 + i * 0.06}>
                <div className={styles.eduItem}>
                  <div className={styles.period}>{e.period}</div>
                  <div className={styles.school}>{e.school}</div>
                  <div className={styles.degree}>{e.degree}</div>
                  <div className={styles.detail}>{e.detail}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className={styles.skillsCol}>
          <Reveal delay={0.1}>
            <div>
              <div className={styles.skillGroupLabel}>Languages</div>
              <div className={styles.skillList}>
                {LANGUAGES.map((lang) => (
                  <div className={styles.skillRow} key={lang.name}>
                    <span className={styles.skillName}>{lang.name}</span>
                    <div className={styles.skillRight}>
                      <span className={styles.skillVal}>{lang.level}</span>
                      <div className={styles.dots}>
                        {[1, 2, 3, 4, 5].map((n) => (
                          <div
                            key={n}
                            className={`${styles.dot} ${n <= lang.dots ? styles.dotOn : ""}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <div className={styles.skillGroupLabel}>Technical</div>
              <div className={styles.skillList}>
                {TECHNICAL.map((s) => (
                  <div className={styles.skillRow} key={s}>
                    <span className={styles.skillName}>{s}</span>
                    <span className={styles.check}>✓</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <div className={styles.skillGroupLabel}>Finance</div>
              <div className={styles.skillList}>
                {FINANCE.map((s) => (
                  <div className={styles.skillRow} key={s}>
                    <span className={styles.skillName}>{s}</span>
                    <span className={styles.check}>✓</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
