import styles from "./Hero.module.css";

const METRICS = [
  { value: "1st", label: "Anthropic × LSE Hackathon 2026" },
  { value: "2 yrs", label: "NHS foundation training" },
  { value: "9", label: "Projects, audits and ventures" },
  { value: "3", label: "Languages at professional level" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.text}>
          <a className={styles.status} href="#now">
            <span className={styles.dot} />
            Now: Clinical AI Fellow at Synthax AI
          </a>
          <h1 className={styles.title}>
            I&apos;m Cyril, a doctor who builds <span>clinical software.</span>
          </h1>
          <p className={styles.sub}>
            Two years on NHS wards, now shipping clinical AI at a seed-stage startup while
            finishing a management master&apos;s at LSE.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#projects">
              View projects
            </a>
            <a className={styles.secondary} href="#experience">
              Experience
            </a>
          </div>
        </div>

        <div className={styles.photoWrap}>
          <img src="/profile.jpg" alt="Dr Cyrilkumaar Vijayakumar" className={styles.photo} />
        </div>
      </div>

      <div className={styles.metrics}>
        {METRICS.map((m) => (
          <div className={styles.metric} key={m.label}>
            <div className={styles.metricVal}>{m.value}</div>
            <div className={styles.metricLabel}>{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
