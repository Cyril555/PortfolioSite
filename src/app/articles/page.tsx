import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import SectionHead from "@/components/SectionHead";
import { PROJECTS_BY_DATE } from "@/lib/projects";
import { PUBLICATIONS } from "@/lib/publications";
import styles from "./articles.module.css";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Case studies and published papers by Dr Cyrilkumaar Vijayakumar across clinical medicine, health technology and strategy.",
  alternates: { canonical: "/articles" },
  openGraph: { title: "Articles", url: "/articles" },
};

export default function ArticlesPage() {
  return (
    <>
      <Nav mode="page" current="articles" />

      <main>
        <header className={styles.lead}>
          <div className="sheet">
            <h1 className={styles.title}>Case studies and published work.</h1>
            <p className={styles.sub}>
              Longer write-ups of the projects, audits and consulting work, followed by peer-reviewed publications.
            </p>
          </div>
        </header>

        <section id="case-studies" className="section">
          <div className="sheet">
            <SectionHead title="Case studies" note={`${PROJECTS_BY_DATE.length} case studies, newest first`} />
            <ol className={styles.list}>
              {PROJECTS_BY_DATE.map((p) => (
                <li key={p.slug}>
                  <Link href={`/projects/${p.slug}`} className={`split ${styles.row}`}>
                    <span className={`figure ${styles.date}`}>{p.date}</span>
                    <span className={styles.body}>
                      <span className={styles.rowMain}>
                        <span className={styles.rowTitle}>{p.title}</span>
                        <span className={styles.rowSub}>{p.subtitle}</span>
                      </span>
                      <span className={styles.domains}>
                        {p.domains.map((d) => (
                          <span key={d}>{d}</span>
                        ))}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="publications" className={`section ${styles.pubs}`}>
          <div className="sheet">
            <SectionHead title="Publications" note={`${PUBLICATIONS.length} papers`} />
            <ol className={styles.list}>
              {PUBLICATIONS.map((pub) => (
                <li key={pub.title} className={`split ${styles.row} ${styles.static}`}>
                  <span className={`figure ${styles.date}`}>{pub.date}</span>
                  <span className={styles.body}>
                    <span className={styles.rowMain}>
                      <span className={styles.rowTitle}>{pub.title}</span>
                      <span className={styles.rowSub}>
                        <cite className={styles.venue}>{pub.venue}</cite>
                        <span className={styles.role}>{pub.role}</span>
                      </span>
                    </span>
                    <span className={styles.domains}>
                      <span>{pub.kind}</span>
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
