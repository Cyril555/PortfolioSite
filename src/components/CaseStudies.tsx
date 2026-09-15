"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import SectionHead from "./SectionHead";
import ProjectIcon from "./ProjectIcon";
import { getProject, Project } from "@/lib/projects";
import styles from "./CaseStudies.module.css";

/** The four projects highlighted on the homepage, one per angle of the work. */
const FEATURED = ["reframe-ai", "taskr", "continuous-glucose-monitoring", "castore-digital-strategy"]
  .map(getProject)
  .filter((p): p is Project => Boolean(p));

const INTERVAL_MS = 6000;

/** Which featured project a domain card on the page should jump to. */
const DOMAIN_PICK: Record<string, string> = {
  medicine: "continuous-glucose-monitoring",
  technology: "reframe-ai",
  strategy: "castore-digital-strategy",
};

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const select = useCallback((i: number) => setActive((i + FEATURED.length) % FEATURED.length), []);

  // Auto-advance, unless paused by hover/focus or the visitor prefers reduced motion
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => select(active + 1), INTERVAL_MS);
    return () => window.clearTimeout(id);
  }, [active, paused, select]);

  // Domain cards elsewhere on the page jump to the first featured project in that domain
  useEffect(() => {
    const onDomain = (e: Event) => {
      const i = FEATURED.findIndex((p) => p.slug === DOMAIN_PICK[(e as CustomEvent<string>).detail]);
      if (i >= 0) select(i);
    };
    window.addEventListener("filter-domain", onDomain);
    return () => window.removeEventListener("filter-domain", onDomain);
  }, [select]);

  const project = FEATURED[active];
  const metric = project.metrics.find((m) => m.value);

  return (
    <section
      id="projects"
      className="band tone-dark"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="frame">
        <SectionHead label="Selected work" title="Featured projects" />
        <div className={styles.stage}>
          <ol className={styles.list}>
            {FEATURED.map((p, i) => (
              <li key={p.slug}>
                <button
                  className={`${styles.item} ${i === active ? styles.itemOn : ""}`}
                  onClick={() => select(i)}
                  onMouseEnter={() => select(i)}
                  aria-current={i === active}
                >
                  <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.name}>{p.title}</span>
                  <span className={styles.kind}>{p.tag}</span>
                  {i === active && (
                    <span
                      key={`${active}-${paused}`}
                      className={`${styles.progress} ${paused ? styles.progressPaused : ""}`}
                      style={{ animationDuration: `${INTERVAL_MS}ms` }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            ))}
          </ol>

          <Link href={`/projects/${project.slug}`} className={styles.panel} aria-live="polite">
            <div key={project.slug} className={styles.panelInner}>
              <div className={styles.tile}>
                <span className={styles.glyph}>
                  <ProjectIcon slug={project.slug} size={44} />
                </span>
              </div>
              <div className={styles.caption}>
                <p className={styles.summary}>{project.subtitle}</p>
                <div className={styles.captionFoot}>
                  {metric && (
                    <span className={styles.metric}>
                      <b>{metric.value}</b> {metric.label}
                    </span>
                  )}
                  <span className={styles.more}>↳ Read case study</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
