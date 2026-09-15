import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© 2026 Dr Cyrilkumaar Vijayakumar</span>
        <span>London, UK</span>
      </div>
    </footer>
  );
}
