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
        <div className={`sheet split ${styles.inner}`}>
          <span className={`figure ${styles.code}`}>404</span>
          <div>
            <h1 className={styles.title}>This page doesn&apos;t exist. The work does.</h1>
            <p className={styles.sub}>
              The link may be out of date, or the page may have moved. Everything on the site is one click away from here.
            </p>
            <div className={styles.actions}>
              <Link href="/" className={styles.primary}>
                Back to home
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
