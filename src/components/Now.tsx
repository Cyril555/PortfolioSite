import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import styles from "./Now.module.css";

const POINTS = [
  {
    title: "Shipped a live voice-driven onboarding platform",
    body: "ElevenLabs conversational front end with real-time NPI registry and Google Places lookups that pre-fill a clinic's profile before anyone types.",
  },
  {
    title: "Proposed the trust-and-safety architecture",
    body: "Confirm-before-commit actions, abstain over guess, and reversibility-tiered gating for the agentic system. Under review with the founders.",
  },
  {
    title: "Built the demo used with prospective clinics",
    body: "Reporting directly to the CEO in a four-person team, part-time alongside LSE.",
  },
];

const FACTS = [
  ["Role", "Clinical AI Fellow"],
  ["Company", "Synthax AI"],
  ["Stage", "Seed"],
  ["Focus", "US outpatient clinics"],
  ["Since", "Aug 2026"],
];

export default function Now() {
  return (
    <section className="frame" id="now">
      <SectionHead label="Current role" title="Synthax AI" />
      <div className={styles.grid}>
        <Reveal className={styles.factsCell}>
          <dl className={styles.facts}>
            {FACTS.map(([k, v]) => (
              <div key={k} className={styles.fact}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className={styles.status}>
            <span className={styles.square} aria-hidden="true" />
            Product live on the Synthax site
          </p>
        </Reveal>
        <div className={styles.points}>
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={0.05 * i}>
              <div className={styles.point}>
                <span className={styles.arrow} aria-hidden="true">↳</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
