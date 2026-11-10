import styles from "./Hero.module.css";

export const CV_PATH = "/Cyrilkumaar-Vijayakumar-CV.pdf";

const METRICS = [
  { value: "1st", label: "Anthropic × LSE Hackathon, 2026" },
  { value: "2 yrs", label: "NHS foundation training" },
  { value: "5", label: "Publications and conference papers" },
  { value: "4", label: "Languages spoken" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h1 className={styles.title}>
              Doctor turned operator: <span>clinical AI, product and life-sciences strategy.</span>
            </h1>
            <p className={styles.sub}>
              2 years on NHS wards · Clinical AI Fellow at Synthax · LSE Global Master&apos;s in Management.
              Open to strategy, health-tech and AI product roles from Sep 2027.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href="#work">
                Projects <span aria-hidden="true">→</span>
              </a>
              <a className={styles.secondary} href={CV_PATH} download>
                Download CV <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <figure className={styles.figure}>
            <span className={`${styles.tick} ${styles.tl}`} aria-hidden="true" />
            <span className={`${styles.tick} ${styles.tr}`} aria-hidden="true" />
            <span className={`${styles.tick} ${styles.bl}`} aria-hidden="true" />
            <span className={`${styles.tick} ${styles.br}`} aria-hidden="true" />
            <div className={styles.photoWrap}>
              <img
                src="/profile.jpg"
                alt="Dr Cyrilkumaar Vijayakumar"
                className={styles.photo}
                width={1024}
                height={1024}
                decoding="async"
              />
            </div>
            <figcaption className={styles.caption}>
              <span>Dr Cyrilkumaar Vijayakumar</span>
              <span>London</span>
            </figcaption>
          </figure>
        </div>

        <dl className={styles.metrics}>
          {METRICS.map((m) => (
            <div className={styles.metric} key={m.label}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
