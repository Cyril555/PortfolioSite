"use client";

import { useState } from "react";
import Link from "next/link";
import { PenTool, Presentation, Activity, Stethoscope, Briefcase, Zap } from "lucide-react";
import Reveal from "./Reveal";
import { PROJECTS, Project } from "@/lib/projects";
import styles from "./CaseStudies.module.css";

const MAIN_SLUGS = ["carepass", "reframe-ai", "taskr"];

const ICONS: Record<string, any> = {
  PenTool,
  Presentation,
  Activity,
  Stethoscope,
  Briefcase,
  Zap,
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className={styles.case}>
      <div className={styles.caseThumbnail}>
        {project.thumbnailImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.thumbnailImage} alt={project.title} />
        ) : (
          <div className={styles.thumbPlaceholder}>
            <span className={styles.thumbInitial}>
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className={styles.caseContent}>
        <div className={styles.caseTop}>
          <div className={styles.caseTitle}>{project.title}</div>
          <div className={styles.caseDomains}>
            {project.domains.map((d) => (
              <span key={d} className={styles.caseDomainPill}>{d}</span>
            ))}
          </div>
        </div>

        <div className={styles.caseBottom}>
          <div className={styles.metricsWrapper}>
            {project.metrics.map((m, j) => {
              const IconComponent = m.icon ? ICONS[m.icon] : null;
              return (
                <div className={styles.metric} key={j}>
                  <div className={styles.metricVal}>
                    {IconComponent ? <IconComponent size={24} strokeWidth={2.5} /> : m.value}
                  </div>
                  <div className={styles.metricLabel}>{m.label}</div>
                </div>
              );
            })}
          </div>
          <div className={styles.readMore}>Read article →</div>
        </div>
      </div>
    </Link>
  );
}

export default function CaseStudies() {
  const [auditsOpen, setAuditsOpen] = useState(false);

  const mainProjects = MAIN_SLUGS
    .map((slug) => PROJECTS.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p));

  const audits = PROJECTS.filter((p) => !MAIN_SLUGS.includes(p.slug));

  return (
    <section className={styles.section} id="projects">
      <Reveal>
        <div className={styles.sectionHead}>
          <span className={styles.num}>02</span>
          <div className={styles.line} />
        </div>
        <div className={styles.title}>Projects</div>
      </Reveal>

      <div className={styles.cases}>
        {mainProjects.map((c, i) => (
          <Reveal key={c.slug} delay={0.05 * i}>
            <ProjectCard project={c} />
          </Reveal>
        ))}
      </div>

      {audits.length > 0 && (
        <div className={styles.auditsWrapper}>
          <button
            type="button"
            className={styles.auditsToggle}
            onClick={() => setAuditsOpen((v) => !v)}
            aria-expanded={auditsOpen}
          >
            <span className={styles.auditsToggleLabel}>
              Audits &amp; Further Work ({audits.length})
            </span>
            <span
              className={`${styles.auditsChevron} ${auditsOpen ? styles.auditsChevronOpen : ""}`}
              aria-hidden="true"
            >
              ↓
            </span>
          </button>

          {auditsOpen && (
            <div className={styles.cases}>
              {audits.map((c, i) => (
                <Reveal key={c.slug} delay={0.04 * i}>
                  <ProjectCard project={c} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
