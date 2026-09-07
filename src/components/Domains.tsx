"use client";

import Reveal from "./Reveal";
import styles from "./Domains.module.css";

const DOMAINS = [
  {
    id: "medicine",
    name: "Medicine",
    desc: "Two years as an NHS resident doctor across six specialties. Clinical audit, patient safety, evidence-based care.",
    icon: <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4zM12 9v6M9 12h6" />,
  },
  {
    id: "technology",
    name: "Technology",
    desc: "Clinical software that has shipped, won, or been tested with doctors: voice onboarding, AI safety tooling, ward dashboards.",
    icon: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />,
  },
  {
    id: "strategy",
    name: "Strategy",
    desc: "LSE Global Master's in Management. Consulting engagements as project lead, from systems roadmaps to go-to-market.",
    icon: <path d="M4 19V5M4 19h16M8 15v-4M12 15V8M16 15v-7" />,
  },
];

export function filterProjects(domain: string) {
  window.dispatchEvent(new CustomEvent("filter-domain", { detail: domain }));
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
}

export default function Domains() {
  return (
    <section className={styles.section} id="domains">
      <Reveal>
        <h2 className={styles.heading}>Three domains, one perspective</h2>
      </Reveal>
      <div className={styles.grid}>
        {DOMAINS.map((d, i) => (
          <Reveal key={d.id} delay={0.06 * i}>
            <button className={styles.card} onClick={() => filterProjects(d.id)}>
              <span className={styles.icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {d.icon}
                </svg>
              </span>
              <span className={styles.name}>{d.name}</span>
              <span className={styles.desc}>{d.desc}</span>
              <span className={styles.link}>See {d.name.toLowerCase()} projects →</span>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
