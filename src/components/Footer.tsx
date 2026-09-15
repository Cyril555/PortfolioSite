import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`onInk ${styles.footer}`}>
      <div className={`sheet ${styles.inner}`}>
        <span>© 2026 Dr Cyrilkumaar Vijayakumar</span>
        <span className={styles.place}>London, UK</span>
      </div>
    </footer>
  );
}
