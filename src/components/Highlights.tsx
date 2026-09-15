import Link from "next/link";
import SectionHead from "./SectionHead";
import Figure from "./Figure";
import { getProject } from "@/lib/projects";
import styles from "./Highlights.module.css";

/** One key project per discipline. Everything else lives on /articles. */
const HIGHLIGHTS = [
  { discipline: "Medicine", context: "NHS · FY1 audit", slug: "continuous-glucose-monitoring" },
  { discipline: "Technology", context: "Hackathon winner", slug: "reframe-ai" },
  { discipline: "Strategy", context: "Castore Consulting", slug: "castore-digital-strategy" },
];

export default function Highlights() {
  return (
    <section id="work" className="section">
      <div className="sheet">
        <SectionHead title="Three disciplines, one perspective" note="Selected work" />

        {/* A results table, not a card set: the reader scans findings down one column */}
        <div className={styles.table}>
          {HIGHLIGHTS.map((h) => {
            const project = getProject(h.slug);
            if (!project) return null;
            const metric = project.metrics.find((m) => m.value);
            return (
              <Link key={h.slug} href={`/projects/${project.slug}`} className={`split ${styles.row}`}>
                <div className={styles.rail}>
                  <span className={styles.discipline}>{h.discipline}</span>
                  <span className={styles.context}>{h.context}</span>
                </div>
                <div className={styles.body}>
                  <h3 className={styles.title}>{project.title}</h3>
                  {metric && (
                    <p className={styles.metric}>
                      <Figure value={metric.value!} />
                      <span className={styles.metricLabel}>{metric.label}</span>
                    </p>
                  )}
                  <span className={styles.more}>Read case study</span>
                </div>
              </Link>
            );
          })}
        </div>

        <p className={styles.moreBar}>
          <Link href="/articles" className={styles.moreLink}>
            See more work
          </Link>
        </p>
      </div>
    </section>
  );
}
