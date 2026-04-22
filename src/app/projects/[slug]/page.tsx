import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, PROJECTS, ArticleSection } from "@/lib/projects";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
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
    title: `${project.title} — Dr. Cyrilkumaar Vijayakumar`,
    description: project.subtitle,
  };
}

function renderSection(section: ArticleSection, i: number) {
  switch (section.type) {
    case "heading":
      return <h2 key={i} className={styles.articleHeading}>{section.text}</h2>;
    case "paragraph":
      return <p key={i} className={styles.articleParagraph}>{section.text}</p>;
    case "list":
      return (
        <ul key={i} className={styles.articleList}>
          {section.items.map((item, j) => (
            <li key={j} className={styles.articleListItem}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote key={i} className={styles.articleQuote}>
          <p>&ldquo;{section.text}&rdquo;</p>
          {section.attribution && (
            <cite className={styles.quoteCite}>— {section.attribution}</cite>
          )}
        </blockquote>
      );
    case "image":
      return (
        <figure key={i} className={styles.articleImageFigure}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={section.src} alt={section.caption || ""} className={styles.articleImage} />
          {section.caption && (
            <figcaption className={styles.articleImageCaption}>{section.caption}</figcaption>
          )}
        </figure>
      );
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Nav mode="project" />

      <main className={styles.main}>
        {/* Header */}
        <header className={styles.header}>
          <Reveal>
            <div className={styles.meta}>
              <span className={styles.tag}>{project.tag}</span>
              {project.date && <span className={styles.date}>{project.date}</span>}
              {project.readTime && <span className={styles.readTime}>{project.readTime}</span>}
            </div>
            <h1 className={styles.title}>{project.title}</h1>
            {project.subtitle && (
              <p className={styles.subtitle}>{project.subtitle}</p>
            )}
            <div className={styles.domains}>
              {project.domains.map((d) => (
                <span key={d} className={styles.domainPill}>{d}</span>
              ))}
            </div>
          </Reveal>

          {/* Metrics strip */}
          <Reveal delay={0.1}>
            <div className={styles.metricsStrip}>
              {project.metrics.map((m, i) => (
                <div key={i} className={styles.metric}>
                  <div className={styles.metricVal}>{m.value}</div>
                  <div className={styles.metricLabel}>{m.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Demo link */}
          {project.demoUrl && (
            <Reveal delay={0.15}>
              <div className={styles.demoRow}>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={styles.demoLink}>
                  View live demo →
                </a>
              </div>
            </Reveal>
          )}
        </header>

        {/* Problem / Approach / Outcome — always shown */}
        <section className={styles.caseSummary}>
          <Reveal>
            <div className={styles.caseGrid}>
              <div className={styles.caseBlock}>
                <div className={styles.caseBlockLabel}>Problem</div>
                <p className={styles.caseBlockText}>{project.problem}</p>
              </div>
              <div className={styles.caseBlock}>
                <div className={styles.caseBlockLabel}>Approach</div>
                <p className={styles.caseBlockText}>{project.approach}</p>
              </div>
              <div className={styles.caseBlock}>
                <div className={styles.caseBlockLabel}>Outcome</div>
                <p className={styles.caseBlockText}>{project.outcome}</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Article body */}
        {project.articleBody && project.articleBody.length > 0 && (
          <article className={styles.article}>
            <Reveal>
              <div className={styles.articleDivider}>
                <span className={styles.dividerLabel}>Full Article</span>
                <div className={styles.dividerLine} />
              </div>
            </Reveal>
            <div className={styles.articleContent}>
              {project.articleBody.map((section, i) => (
                <Reveal key={i} delay={0.04 * Math.min(i, 5)}>
                  {renderSection(section, i)}
                </Reveal>
              ))}
            </div>
          </article>
        )}

        {/* Image gallery */}
        {project.images && project.images.length > 0 && (
          <section className={styles.gallery}>
            <Reveal>
              <div className={styles.articleDivider}>
                <span className={styles.dividerLabel}>UI & Process</span>
                <div className={styles.dividerLine} />
              </div>
            </Reveal>
            <div className={styles.galleryGrid}>
              {project.images.map((img, i) => (
                <Reveal key={i} delay={0.06 * i}>
                  <figure className={styles.galleryFigure}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} className={styles.galleryImg} />
                    {img.caption && (
                      <figcaption className={styles.galleryCaption}>{img.caption}</figcaption>
                    )}
                  </figure>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* Next project hint */}
        <div className={styles.backRow}>
          <a href="/#domains" className={styles.backLink}>← Back to all projects</a>
        </div>
      </main>

      <Footer />
    </>
  );
}
