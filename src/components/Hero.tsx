"use client";

import Reveal from "./Reveal";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        <Reveal delay={0.1}>
          <div className={styles.photoFrame}>
            <div className={styles.photoBox}>
              <img src="/profile.jpg" alt="Dr. Cyril" className={styles.profilePic} />
            </div>
          </div>
        </Reveal>

        <div className={styles.heroText}>
          <Reveal>
            <div className={styles.eyebrow}>Doctor · Technologist · Strategist</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className={styles.name}>
              Hi, I&apos;m Cyril<span className={styles.dot}>.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className={styles.sub}>
              My expertise lies at the intersection of clinical medicine, health technology, and management strategy.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.26}>
        <div className={styles.metrics}>
          <div className={styles.metric}>
            <div className={styles.metricValSmall}>
              NHS <span style={{ fontFamily: "system-ui, sans-serif" }}>→</span> LSE
            </div>
            <div className={styles.metricLabel}>From Clinical Medicine<br />To Management Strategy</div>
          </div>
          <div className={styles.metric}>
            <div className={styles.metricVal}>4</div>
            <div className={styles.metricLabel}>Digital Health Products<br />Created And Shipped</div>
          </div>
          <div className={styles.metric}>
            <div className={styles.metricVal}>6</div>
            <div className={styles.metricLabel}>Clinical Audits<br />And QI Projects</div>
          </div>
          <div className={styles.metric}>
            <div className={styles.metricVal}>4</div>
            <div className={styles.metricLabel}>
              Languages<br />
              <span style={{ fontFamily: "var(--mono), system-ui, sans-serif" }}>
                EN · 中文 · ES · தமிழ்
              </span>
            </div>
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
