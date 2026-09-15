"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import ProjectIcon from "./ProjectIcon";
import { PROJECTS, Project } from "@/lib/projects";
import styles from "./CaseStudies.module.css";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "medicine", label: "Medicine" },
  { id: "technology", label: "Technology" },
  { id: "strategy", label: "Strategy" },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const metric = project.metrics.find((m) => m.value);
  return (
    <Link href={`/projects/${project.slug}`} className={styles.card}>
      <div className={styles.tile}>
        <span className={styles.idx}>{String(index + 1).padStart(2, "0")}</span>
        <span className={styles.year}>{project.date}</span>
        <span className={styles.glyph}>
          <ProjectIcon slug={project.slug} size={30} />
        </span>
      </div>
      <div className={styles.body}>
        <div className={styles.tag}>{project.tag}</div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.summary}>{project.subtitle ?? project.problem}</p>
      </div>
      <div className={styles.foot}>
        {metric ? (
          <span className={styles.metric}>
            <b>{metric.value}</b>
            <span>{metric.label}</span>
          </span>
        ) : (
          <span />
        )}
        <span className={styles.more}>↳ Case study</span>
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

  const tabs = (
    <div className={styles.filters} role="group" aria-label="Filter projects by domain">
      {FILTERS.map((f) => {
        const count = PROJECTS.filter((p) => f.id === "all" || p.domains.includes(f.id)).length;
        return (
          <button
            key={f.id}
            aria-pressed={filter === f.id}
            className={`${styles.tab} ${filter === f.id ? styles.tabOn : ""}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label} <span>{count}</span>
          </button>
        );
      })}
    </div>
  );

  return (
    <section className="frame" id="projects">
      <SectionHead label="Selected work" title="Projects" aside={tabs} />
      <div className={styles.grid}>
        {visible.map((p, i) => (
          <Reveal key={p.slug} delay={0.03 * i} className={styles.cell}>
            <ProjectCard project={p} index={PROJECTS.indexOf(p)} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
