"use client";

import { useState } from "react";
import Link from "next/link";
import { PenTool, Presentation, Activity, Stethoscope, Briefcase, Zap } from "lucide-react";
import Reveal from "./Reveal";
import { PROJECTS, ProjectMetric } from "@/lib/projects";
import styles from "./CaseStudies.module.css";

const DOMAINS = [
  { key: "all", label: "All" },
  { key: "medicine", label: "Medicine" },
  { key: "technology", label: "Technology" },
  { key: "strategy", label: "Strategy" },
];

const ICONS: Record<string, any> = {
  PenTool,
  Presentation,
  Activity,
  Stethoscope,
  Briefcase,
  Zap,
};

export default function CaseStudies() {
  const [activeDomain, setActiveDomain] = useState("all");

  const filtered =
    activeDomain === "all"
      ? PROJECTS
      : PROJECTS.filter((c) => c.domains.includes(activeDomain));

  return (
    <section className={styles.section} id="projects">
      <Reveal>
        <div className={styles.sectionHead}>
          <span className={styles.num}>02</span>
          <div className={styles.line} />
        </div>
        <div className={styles.title}>Projects</div>
        <div className={styles.subtitle}>
          Each project framed as problem, approach, and measurable outcome — because impact is what matters.
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className={styles.filterBar}>
          {DOMAINS.map((d) => (
            <button
              key={d.key}
              className={`${styles.filterBtn} ${activeDomain === d.key ? styles.filterActive : ""}`}
              onClick={() => setActiveDomain(d.key)}
            >
              {d.label}
              {d.key !== "all"
                ? ` (${PROJECTS.filter((c) => c.domains.includes(d.key)).length})`
                : ""}
            </button>
          ))}
        </div>
      </Reveal>

      <div className={styles.cases}>
        {filtered.map((c, i) => (
          <Reveal key={c.slug} delay={0.05 * i}>
            <Link href={`/projects/${c.slug}`} className={styles.case}>
              {c.thumbnailImage ? (
                <>
                  <div className={styles.caseThumbnail}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.thumbnailImage} alt={c.title} />
                  </div>
                  <div className={styles.caseContent}>
                    <div className={styles.caseTop}>
                      <div>
                        <div className={styles.caseTag}>{c.tag}</div>
                        <div className={styles.caseTitle}>{c.title}</div>
                      </div>
                      <div className={styles.caseDomains}>
                        {c.domains.map((d) => (
                          <span key={d} className={styles.caseDomainPill}>{d}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className={styles.caseBottom}>
                      <div className={styles.metricsWrapper}>
                        {c.metrics.map((m, j) => {
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
                </>
              ) : (
                <div className={styles.caseContent}>
                  <div className={styles.caseTop}>
                    <div>
                      <div className={styles.caseTag}>{c.tag}</div>
                      <div className={styles.caseTitle}>{c.title}</div>
                    </div>
                    <div className={styles.caseDomains}>
                      {c.domains.map((d) => (
                        <span key={d} className={styles.caseDomainPill}>{d}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.caseBottom}>
                    <div className={styles.metricsWrapper}>
                      {c.metrics.map((m, j) => {
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
              )}
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
