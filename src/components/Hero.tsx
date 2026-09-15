import styles from "./Hero.module.css";

export const CV_PATH = "/Cyrilkumaar-Vijayakumar-CV.pdf";
const BLANK_PIXEL = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

const METRICS = [
  { value: "1st", label: "Anthropic × LSE Hackathon, 2026" },
  { value: "2 yrs", label: "NHS foundation training" },
  { value: "5", label: "Publications and conference papers" },
  { value: "4", label: "Fluent in four languages" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h1 className={styles.title}>
              Doctor building <span>clinical software.</span>
            </h1>
            <p className={styles.sub}>
              Two years on NHS wards, now shipping clinical AI at a seed-stage startup while
              completing a management master&apos;s at LSE.
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
              <picture>
                {/* Phones get a 1px placeholder, so the portrait is never downloaded there */}
                <source media="(max-width: 700px)" srcSet={BLANK_PIXEL} />
                <img
                  src="/profile.jpg"
                  alt="Dr Cyrilkumaar Vijayakumar"
                  className={styles.photo}
                  width={1024}
                  height={1024}
                  decoding="async"
                />
              </picture>
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
