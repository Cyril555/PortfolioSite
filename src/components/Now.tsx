import Reveal from "./Reveal";
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
    title: "Built the demo now used with prospective clinics",
    body: "Reporting directly to the CEO in a four-person team, twenty hours a week alongside LSE.",
  },
];

export default function Now() {
  return (
    <section className={styles.section} id="now">
      <Reveal>
        <div className={styles.card}>
          <div className={styles.head}>
            <div className={styles.eyebrow}>Current role · Aug 2026 → present</div>
            <h2 className={styles.title}>Clinical AI Fellow, Synthax AI</h2>
            <p className={styles.desc}>
              A seed-stage AI operating layer for US outpatient clinics, based in London.
            </p>
            <span className={styles.live}>
              <span className={styles.liveDot} />
              Product live on the Synthax site
            </span>
          </div>
          <ul className={styles.points}>
            {POINTS.map((p) => (
              <li key={p.title}>
                <strong>{p.title}</strong>
                <span>{p.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
