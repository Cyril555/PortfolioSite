"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { PROJECTS } from "@/lib/projects";
import styles from "./CaseStudies.module.css";

const DOMAINS = [
  { key: "all", label: "All" },
  { key: "medicine", label: "Medicine" },
  { key: "technology", label: "Technology" },
  { key: "strategy", label: "Strategy" },
];

export default function CaseStudies() {
  const [activeDomain, setActiveDomain] = useState("all");

  const filtered =
    activeDomain === "all"
      ? PROJECTS
      : PROJECTS.filter((c) => c.domains.includes(activeDomain));

  return (
    <section className={styles.section} id="domains">
      <Reveal>
        <div className={styles.sectionHead}>
          <span className={styles.num}>02</span>
          <div className={styles.line} />
        </div>
        <div className={styles.title}>Case Studies</div>
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
              <div className={styles.caseLeft}>
                <div>
                  <div className={styles.caseTag}>{c.tag}</div>
                  <div className={styles.caseTitle}>{c.title}</div>
                  <div className={styles.caseDomains}>
                    {c.domains.map((d) => (
                      <span key={d} className={styles.caseDomainPill}>{d}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.caseBody}>
                <div>
                  <div className={styles.caseLabel}>Problem</div>
                  <div className={styles.caseText}>{c.problem}</div>
                </div>
                <div>
                  <div className={styles.caseLabel}>Approach</div>
                  <div className={styles.caseText}>{c.approach}</div>
                </div>
                <div>
                  <div className={styles.caseLabel}>Outcome</div>
                  <div className={styles.caseText}>{c.outcome}</div>
                </div>
              </div>
              <div className={styles.caseRight}>
                {c.metrics.map((m, j) => (
                  <div className={styles.metric} key={j}>
                    <div className={styles.metricVal}>{m.value}</div>
                    <div className={styles.metricLabel}>{m.label}</div>
                  </div>
                ))}
                <div className={styles.readMore}>Read article →</div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
