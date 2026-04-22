import Reveal from "./Reveal";
import styles from "./Contact.module.css";

const LINKS = [
  { label: "Email", value: "c.vijayakumar@lse.ac.uk", href: "mailto:c.vijayakumar@lse.ac.uk" },
  { label: "LinkedIn", value: "cyrilvijayakumar", href: "https://linkedin.com/in/cyrilvijayakumar" },
];

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <Reveal>
        <div className={styles.big}>
          Let&apos;s build<br />something<br />
          <span className={styles.accent}>together.</span>
        </div>
      </Reveal>
      <Reveal delay={0.12}>
        <div className={styles.links}>
          {LINKS.map((c) => (
            <a
              key={c.label}
              className={styles.link}
              href={c.href}
              target={c.label === "LinkedIn" ? "_blank" : undefined}
              rel="noreferrer"
            >
              <div>
                <div className={styles.label}>{c.label}</div>
                <div className={styles.value}>{c.value}</div>
              </div>
              <span className={styles.arrow}>→</span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
