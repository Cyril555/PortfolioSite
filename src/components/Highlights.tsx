import Link from "next/link";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import ProjectIcon from "./ProjectIcon";
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
    <section className="band" id="work">
      <div className="frame">
        <SectionHead
          label="Selected work"
          title="Three disciplines, one perspective"
          aside={
            <Link href="/articles" className={styles.seeAll}>
              See all work ↗
            </Link>
          }
        />
        <div className={styles.grid}>
          {HIGHLIGHTS.map((h, i) => {
            const project = getProject(h.slug);
            if (!project) return null;
            const metric = project.metrics.find((m) => m.value);
            return (
              <Reveal key={h.slug} delay={0.06 * i} className={styles.cell}>
                <Link href={`/projects/${project.slug}`} className={styles.card}>
                  <div className={styles.top}>
                    <span className={styles.discipline}>{h.discipline}</span>
                    <span className={styles.context}>{h.context}</span>
                  </div>
                  <div className={styles.tile}>
                    <span className={styles.glyph}>
                      <ProjectIcon slug={project.slug} size={32} />
                    </span>
                  </div>
                  <div className={styles.body}>
                    <h3 className={styles.title}>{project.title}</h3>
                    {metric && (
                      <p className={styles.metric}>
                        <b>{metric.value}</b>
                        <span>{metric.label}</span>
                      </p>
                    )}
                  </div>
                  <span className={styles.more}>↳ Read case study</span>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <Link href="/articles" className={styles.moreRow}>
          <span className={styles.moreLabel}>More work</span>
          <span className={styles.moreText}>See more case studies, audits and publications</span>
          <span className={styles.moreArrow} aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
