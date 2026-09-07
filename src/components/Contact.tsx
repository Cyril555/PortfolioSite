import Reveal from "./Reveal";
import styles from "./Contact.module.css";

const LINKS = [
  { label: "Email", value: "cyrilk567@outlook.com", href: "mailto:cyrilk567@outlook.com" },
  { label: "LinkedIn", value: "linkedin.com/in/cyrilvijayakumar", href: "https://linkedin.com/in/cyrilvijayakumar" },
];

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <Reveal>
        <div className={styles.card}>
          <div>
            <h2 className={styles.big}>
              Building clinical software? <span>Let&apos;s talk.</span>
            </h2>
            <p className={styles.sub}>
              Based in London. Open to clinical product, health-tech and strategy roles.
            </p>
          </div>
          <div className={styles.links}>
            {LINKS.map((c) => (
              <a
                key={c.label}
                className={styles.link}
                href={c.href}
                target={c.label === "LinkedIn" ? "_blank" : undefined}
                rel="noreferrer"
              >
                <span className={styles.label}>{c.label}</span>
                <span className={styles.value}>{c.value} →</span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
