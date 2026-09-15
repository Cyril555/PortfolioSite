import styles from "./Contact.module.css";

const LINKS = [
  { label: "Email", value: "cyrilk567@outlook.com", href: "mailto:cyrilk567@outlook.com" },
  { label: "LinkedIn", value: "linkedin.com/in/cyrilvijayakumar", href: "https://linkedin.com/in/cyrilvijayakumar" },
];

export default function Contact() {
  return (
    <section id="contact" className={`section onInk ${styles.section}`}>
      <div className={`sheet ${styles.grid}`}>
        <div className={styles.lead}>
          <h2 className={styles.title}>Building clinical software? Let&apos;s talk.</h2>
          <p className={styles.sub}>
            Based in London. Open to clinical product, health-tech and strategy roles.
          </p>
        </div>

        <ul className={styles.links}>
          {LINKS.map((c) => (
            <li key={c.label}>
              <a
                className={styles.link}
                href={c.href}
                target={c.label === "LinkedIn" ? "_blank" : undefined}
                rel="noreferrer"
              >
                <span className={styles.linkLabel}>{c.label}</span>
                <span className={styles.value}>{c.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
