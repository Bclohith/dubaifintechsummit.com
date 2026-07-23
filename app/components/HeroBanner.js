"use client";

import { useEffect, useState } from 'react';
import styles from './HeroBanner.module.css';

export default function HeroBanner() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={`${styles.contentLayer} ${loaded ? styles.visible : ''}`}>
        
        {/* Clean, Elegant Typography */}
        <div className={styles.centerContent}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.titleText}>Connecting <span className={styles.cyanGradient}>Markets</span></h1>
            <h1 className={styles.titleText}>Transforming <span className={styles.cyanGradient}>Economies</span></h1>
          </div>
          
          <p className={styles.subtitle}>
            2-3 November 2026 | Madinat Jumeirah, Dubai, UAE
          </p>

          <div className={styles.actionBlock}>
            <a href="#register" className={styles.btnSolid}>
              Register Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#agenda" className={styles.linkSimple}>View Agenda</a>
          </div>

          <div className={styles.secondaryLogosContainer}>
            <img src="/dubaifintechsummit.com/part-of-dffw.png" alt="Part of Dubai Future Finance Week" className={styles.secondaryLogo} />
            <div className={styles.logoDivider}></div>
            <img src="/dubaifintechsummit.com/organised-by-difc.png" alt="Organised by DIFC" className={styles.secondaryLogo} />
          </div>
        </div>

      </div>
    </section>
  );
}
