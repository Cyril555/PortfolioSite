"use client";

import Reveal from "./Reveal";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Reveal>
        <div className={styles.eyebrow}>Doctor · Technologist · Strategist</div>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className={styles.name}>
          Cyrilkumaar<br />
          Vijayakumar<span className={styles.dot}>.</span>
        </h1>
      </Reveal>
      <Reveal delay={0.16}>
        <p className={styles.sub}>
          I sit at the intersection of clinical medicine, health technology, and management strategy.
          LSE Master's candidate building the bridge between patient outcomes and business impact.
        </p>
      </Reveal>
      <Reveal delay={0.26}>
        <div className={styles.metrics}>
          <div className={styles.metric}>
            <div className={styles.metricVal}>100+</div>
            <div className={styles.metricLabel}>Patients Managed<br />Across 6 Specialities</div>
          </div>
          <div className={styles.metric}>
            <div className={styles.metricVal}>25%</div>
            <div className={styles.metricLabel}>Monitoring Improvement<br />Glucose Sensors</div>
          </div>
          <div className={styles.metric}>
            <div className={styles.metricVal}>100%</div>
            <div className={styles.metricLabel}>Testing Increase<br />Vitamin D Audit</div>
          </div>
          <div className={styles.metric}>
            <div className={styles.metricVal}>4</div>
            <div className={styles.metricLabel}>Languages<br />EN · 中文 · ES · தமிழ்</div>
          </div>
        </div>
      </Reveal>
      <div className={styles.scroll}>
        <div className={styles.scrollBar} />
        Scroll to explore
      </div>
    </section>
  );
}
