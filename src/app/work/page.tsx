import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectionHead from "@/components/SectionHead";
import ProjectIcon from "@/components/ProjectIcon";
import { getFeaturedProjects, getOtherProjects } from "@/lib/projects";
import { PUBLICATIONS } from "@/lib/publications";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and published papers by Dr Cyrilkumaar Vijayakumar across clinical medicine, health technology and strategy.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work",
    description:
      "Case studies and published papers by Dr Cyrilkumaar Vijayakumar across clinical medicine, health technology and strategy.",
    url: "/work",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work",
    description:
      "Case studies and published papers by Dr Cyrilkumaar Vijayakumar across clinical medicine, health technology and strategy.",
  },
};

export default function WorkPage() {
  const featured = getFeaturedProjects();
  const other = getOtherProjects();

  return (
    <>
      <Nav mode="page" current="work-page" />

      <main>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.eyebrow}>Work</div>
            <h1 className={styles.title}>
              Case studies and <span>published work.</span>
            </h1>
            <p className={styles.sub}>
              Longer write-ups of the projects, audits and consulting work, followed by peer-reviewed publications.
            </p>
          </div>
        </header>

        <section className="band" id="case-studies">
          <div className="frame">
            <SectionHead label={`${featured.length} featured case studies`} title="Case studies" />
            <div className={styles.featuredGrid}>
              {featured.map((p) => {
                const metric = p.metrics.find((m) => m.value);
                return (
                  <Link key={p.slug} href={`/projects/${p.slug}`} className={styles.featuredCard}>
                    <div className={styles.cardTop}>
                      <span className={styles.cardTag}>{p.tag}</span>
                      <span className={styles.cardDate}>{p.date}</span>
                    </div>
                    <div className={styles.cardTile}>
                      <ProjectIcon slug={p.slug} size={32} />
                    </div>
                    <h2 className={styles.cardTitle}>{p.title}</h2>
                    <p className={styles.cardSub}>{p.subtitle}</p>
                    {metric && (
                      <p className={styles.cardMetric}>
                        <b>{metric.value}</b>
                        <span>{metric.label}</span>
                      </p>
                    )}
                    <span className={styles.cardMore}>↳ Read case study</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="band tone-dark" id="other-projects">
          <div className="frame">
            <SectionHead label={`${other.length} more projects`} title="Other projects" />
            <ol className={styles.list}>
              {other.map((p) => (
                <li key={p.slug}>
                  <Link href={`/projects/${p.slug}`} className={styles.row}>
                    <span className={styles.date}>{p.date}</span>
                    <span className={styles.icon}>
                      <ProjectIcon slug={p.slug} size={18} />
                    </span>
                    <span className={styles.main}>
                      <span className={styles.rowTitle}>{p.title}</span>
                      <span className={styles.rowSub}>{p.subtitle}</span>
                    </span>
                    <span className={styles.meta}>{p.domains.join(" · ")}</span>
                    <span className={styles.arrow} aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="band" id="publications">
          <div className="frame">
            <SectionHead label={`${PUBLICATIONS.length} papers`} title="Publications" />
            <ol className={styles.list}>
              {PUBLICATIONS.map((pub) => (
                <li key={pub.title} className={`${styles.row} ${styles.static}`}>
                  <span className={styles.date}>{pub.date}</span>
                  <span className={styles.icon} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square">
                      <path d="M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h7" />
                    </svg>
                  </span>
                  <span className={styles.main}>
                    <span className={styles.rowTitle}>
                      {pub.doi ? (
                        <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                          {pub.title}
                        </a>
                      ) : (
                        pub.title
                      )}
                    </span>
                    <span className={styles.rowSub}>
                      {pub.venue} · {pub.role}
                      {pub.doi && (
                        <>
                          {" · "}
                          <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                            DOI ↗
                          </a>
                        </>
                      )}
                    </span>
                  </span>
                  <span className={styles.meta}>{pub.kind}</span>
                  <span className={styles.arrow} aria-hidden="true" />
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
