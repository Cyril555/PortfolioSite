import Image from "next/image";
import styles from "./Hero.module.css";

export const CV_PATH = "/Cyrilkumaar-Vijayakumar-CV.pdf";

const METRICS = [
  { value: "1st", label: "Anthropic × LSE Hackathon, 2026" },
  { value: "2 yrs", label: "NHS foundation training" },
  { value: "5", label: "Publications and conference papers" },
  { value: "4", label: "Fluent in four languages" },
];

export default function Hero() {
  return (
    <section className={`onInk gridded ${styles.hero}`}>
      <div className={`sheet ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.text}>
            <h1 className={styles.title}>Doctor building clinical software.</h1>
            <p className={styles.sub}>
              Two years on NHS wards, now shipping clinical AI at a seed-stage startup while
              completing a management master&apos;s at LSE.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href="#work">
                Projects
              </a>
              <a className={styles.secondary} href={CV_PATH} download>
                Download CV
              </a>
            </div>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/profile.jpg"
              alt="Dr Cyrilkumaar Vijayakumar"
              width={1024}
              height={1024}
              sizes="(max-width: 640px) 148px, (max-width: 1024px) 30vw, 360px"
              className={styles.photo}
              priority
            />
            <figcaption className={styles.caption}>
              <span>Dr Cyrilkumaar Vijayakumar</span>
              <span className={styles.place}>London</span>
            </figcaption>
          </figure>
        </div>

        {/* Read like a vitals strip: figures on a shared baseline, ticks where each column begins */}
        <dl className={styles.strip}>
          {METRICS.map((m) => (
            <div className={styles.metric} key={m.label}>
              <dt className={`figure ${styles.value}`}>{m.value}</dt>
              <dd className={styles.label}>{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
