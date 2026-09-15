import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, PROJECTS, PROJECTS_BY_DATE, readingTime } from "@/lib/projects";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ProjectIcon from "@/components/ProjectIcon";
import ArticleBody from "@/components/ArticleBody";
import styles from "./project.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.subtitle,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.title, description: project.subtitle, url: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // Follow the same newest-first order as the Articles page
  const index = PROJECTS_BY_DATE.indexOf(project);
  const next = PROJECTS_BY_DATE[(index + 1) % PROJECTS_BY_DATE.length];
  const facts = [
    ["Type", project.tag],
    ["Date", project.date],
    ["Reading time", readingTime(project)],
    ["Domains", project.domains.join(", ")],
  ].filter(([, v]) => v);

  return (
    <>
      <Nav mode="page" current="articles" />

      <main>
        <header className={`frame ${styles.header}`}>
          <aside className={styles.facts}>
            <span className={styles.glyph}>
              <ProjectIcon slug={project.slug} size={26} />
            </span>
            <dl>
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
          <Reveal className={styles.lead}>
            <div className={styles.eyebrow}>Case study</div>
            <h1 className={styles.title}>{project.title}</h1>
            {project.subtitle && <p className={styles.subtitle}>{project.subtitle}</p>}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={styles.demo}>
                View live demo ↗
              </a>
            )}
          </Reveal>
        </header>

        <section className={`frame ${styles.metrics}`} aria-label="Key figures">
          {project.metrics.map((m) => (
            <div key={m.label} className={styles.metric}>
              {m.value ? (
                <>
                  <div className={styles.metricVal}>{m.value}</div>
                  <div className={styles.metricLabel}>{m.label}</div>
                </>
              ) : (
                <div className={styles.metricText}>{m.label}</div>
              )}
            </div>
          ))}
        </section>

        <section className={`frame ${styles.summary}`} aria-label="Summary">
          {[
            ["Problem", project.problem],
            ["Approach", project.approach],
            ["Outcome", project.outcome],
          ].map(([label, text]) => (
            <div key={label} className={styles.summaryCell}>
              <div className={styles.cellLabel}>{label}</div>
              <p>{text}</p>
            </div>
          ))}
        </section>

        {project.articleBody && project.articleBody.length > 0 && (
          <article className={`frame ${styles.article}`}>
            <div className={styles.cellLabel}>Full article</div>
            <ArticleBody sections={project.articleBody} />
          </article>
        )}

        <nav className={`frame ${styles.pager}`} aria-label="Project navigation">
          <Link href="/articles" className={styles.pagerLink}>
            <span className={styles.cellLabel}>Back</span>
            <span className={styles.pagerTitle}>← All articles</span>
          </Link>
          <Link href={`/projects/${next.slug}`} className={`${styles.pagerLink} ${styles.pagerNext}`}>
            <span className={styles.cellLabel}>Next case study</span>
            <span className={styles.pagerTitle}>{next.title} →</span>
          </Link>
        </nav>
      </main>

      <Footer />
    </>
  );
}
