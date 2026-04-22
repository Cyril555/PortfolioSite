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
            desc: "Two years as an NHS Resident Doctor. Clinical audit, patient safety, evidence-based care.",
            tags: ["Clinical Audit", "Patient Safety"],
          },
          {
            num: "Domain 02",
            name: "Technology",
            desc: "Building health-tech tools that solve real clinical problems.",
            tags: ["Health-Tech", "UI/UX"],
          },
          {
            num: "Domain 03",
            name: "Strategy",
            desc: "Consulting leadership across digital growth and GTM. LSE GMiM.",
            tags: ["Consulting", "GTM"],
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
