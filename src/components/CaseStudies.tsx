"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import ProjectIcon from "./ProjectIcon";
import { PROJECTS, Project } from "@/lib/projects";
import styles from "./CaseStudies.module.css";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "medicine", label: "Medicine" },
  { id: "technology", label: "Technology" },
  { id: "strategy", label: "Strategy" },
];

function ProjectCard({ project }: { project: Project }) {
  const metric = project.metrics.find((m) => m.value);
  return (
    <Link href={`/projects/${project.slug}`} className={styles.card}>
      <div className={styles.tile}>
        <ProjectIcon slug={project.slug} size={34} />
        <ProjectIcon slug={project.slug} size={150} className={styles.ghost} />
      </div>
      <div className={styles.body}>
        <div className={styles.tag}>{project.tag}</div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.summary}>{project.subtitle ?? project.problem}</p>
        <div className={styles.foot}>
          {metric && (
            <span className={styles.metric}>
              <b>{metric.value}</b> {metric.label}
            </span>
          )}
          <span className={styles.more}>Read case study →</span>
        </div>
      </div>
    </Link>
  );
}

export default function CaseStudies() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const onFilter = (e: Event) => setFilter((e as CustomEvent<string>).detail);
    window.addEventListener("filter-domain", onFilter);
    return () => window.removeEventListener("filter-domain", onFilter);
  }, []);

  const visible = PROJECTS.filter((p) => filter === "all" || p.domains.includes(filter));

  return (
    <section className={styles.section} id="projects">
      <Reveal>
        <div className={styles.head}>
          <div>
            <h2 className={styles.heading}>Projects</h2>
            <p className={styles.lede}>
              Each one is written up as a case study: the problem, the approach, and what changed.
            </p>
          </div>
          <div className={styles.filters} role="tablist">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                className={`${styles.chip} ${filter === f.id ? styles.chipOn : ""}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <div className={styles.grid}>
        {visible.map((p, i) => (
          <Reveal key={p.slug} delay={0.04 * i}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
