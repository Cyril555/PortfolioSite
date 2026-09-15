import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, PROJECTS, PROJECTS_BY_DATE, readingTime } from "@/lib/projects";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Figure from "@/components/Figure";
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
  const facts: [string, string][] = [
    ["Type", project.tag],
    ["Date", project.date ?? ""],
    ["Reading time", readingTime(project)],
    ["Domains", project.domains.join(", ")],
  ].filter((f): f is [string, string] => Boolean(f[1]));

  return (
    <>
      <Nav mode="page" current="articles" />

      <main>
        <header className={`onInk gridded ${styles.lead}`}>
          <div className={`sheet split ${styles.leadInner}`}>
            <dl className={styles.facts}>
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <div>
              <span className={styles.glyph} aria-hidden="true">
                <ProjectIcon slug={project.slug} size={30} />
              </span>
              <h1 className={styles.title}>{project.title}</h1>
              {project.subtitle && <p className={styles.subtitle}>{project.subtitle}</p>}
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={styles.demo}>
                  View live demo
                </a>
              )}
            </div>
          </div>
        </header>

        <section className={styles.metrics} aria-label="Key figures">
          <div className={`sheet ${styles.strip}`}>
            {project.metrics.map((m) => (
              <div key={m.label} className={styles.metric}>
                {m.value && <Figure value={m.value} />}
                <span className={m.value ? styles.metricLabel : styles.metricText}>{m.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={`section ${styles.summary}`} aria-label="Summary">
          <div className="sheet">
            {([
              ["Problem", project.problem],
              ["Approach", project.approach],
              ["Outcome", project.outcome],
            ] as const).map(([label, text]) => (
              <div key={label} className={`split ${styles.stage}`}>
                <h2 className={styles.stageLabel}>{label}</h2>
                <p className={styles.stageText}>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {project.articleBody && project.articleBody.length > 0 && (
          <article className={`section ${styles.article}`}>
            <div className={`sheet split ${styles.articleInner}`}>
              <div aria-hidden="true" />
              <ArticleBody sections={project.articleBody} />
            </div>
          </article>
        )}

        <nav className={styles.pager} aria-label="Case study navigation">
          <div className={`sheet ${styles.pagerInner}`}>
            <Link href="/articles" className={styles.pagerLink}>
              <span className={styles.pagerRole}>Back</span>
              <span className={styles.pagerTitle}>All articles</span>
            </Link>
            <Link href={`/projects/${next.slug}`} className={`${styles.pagerLink} ${styles.pagerNext}`}>
              <span className={styles.pagerRole}>Next case study</span>
              <span className={styles.pagerTitle}>{next.title}</span>
            </Link>
          </div>
        </nav>
      </main>

      <Footer />
    </>
  );
}
