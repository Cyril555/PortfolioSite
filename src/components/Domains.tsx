import Reveal from "./Reveal";
import styles from "./Domains.module.css";

export default function Domains() {
  return (
    <div className={styles.section} id="impact">
      <Reveal>
        <div className={styles.eyebrow}>Where I Operate</div>
        <div className={styles.heading}>Three domains. One perspective.</div>
      </Reveal>
      <div className={styles.grid}>
        {[
          {
            num: "Domain 01",
            name: "Medicine",
            desc: "Two years as an NHS Resident Doctor across six specialities. Clinical audit design, patient safety, and evidence-based practice at scale.",
            tags: ["Clinical Audit", "Patient Safety", "Research"],
          },
          {
            num: "Domain 02",
            name: "Technology",
            desc: "Health-tech prototyping, UI/UX design in Figma, and hands-on development. Building tools that solve real clinical problems — from glucose monitoring to digital dashboards.",
            tags: ["Health-Tech", "UI/UX", "Python", "Prototyping"],
          },
          {
            num: "Domain 03",
            name: "Strategy",
            desc: "Project leadership in consulting engagements — digital growth for consumer brands, go-to-market for AI startups. LSE GMiM with predicted distinction.",
            tags: ["Consulting", "GTM Strategy", "LSE GMiM"],
          },
        ].map((d, i) => (
          <Reveal key={d.name} delay={0.07 * i}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>{d.num}</div>
              <div className={styles.cardName}>{d.name}</div>
              <div className={styles.cardDesc}>{d.desc}</div>
              <div className={styles.tags}>
                {d.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
