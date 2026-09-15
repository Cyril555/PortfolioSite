import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <Nav mode="page" />
      <main className={styles.page}>
        <div className={styles.inner}>
          <div className={styles.figure} aria-hidden="true">
            <span className={`${styles.tick} ${styles.tl}`} />
            <span className={`${styles.tick} ${styles.tr}`} />
            <span className={`${styles.tick} ${styles.bl}`} />
            <span className={`${styles.tick} ${styles.br}`} />
            <span className={styles.code}>404</span>
            <span className={styles.coords}>Error · No route</span>
          </div>

          <div className={styles.text}>
            <div className={styles.eyebrow}>Page not found</div>
            <h1 className={styles.title}>
              This page doesn&apos;t exist. <span>The work does.</span>
            </h1>
            <p className={styles.sub}>
              The link may be out of date, or the page may have moved. Everything on the site is one click away from here.
            </p>
            <div className={styles.actions}>
              <Link href="/" className={styles.primary}>
                Back to home <span aria-hidden="true">→</span>
              </Link>
              <Link href="/articles" className={styles.secondary}>
                Articles
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
