'use client';

import { useEffect, useState } from 'react';
import styles from './PartnersSection.module.css';

export default function PartnersSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        
        {/* Section Title Area */}
        <div className={`${styles.headerArea} ${mounted ? styles.reveal : ''}`}>
          <span className={styles.preTitle}>GLOBAL NETWORK PARTNERS</span>
          <h2 className={styles.title}>2026 partners</h2>
          <div className={styles.titleLine} />
        </div>

        {/* Scrolling Partner Logo Ticker Row 1 - Reverse speed */}
        <div className={styles.tickerContainer}>
          <div className={`${styles.tickerTrack} ${styles.reverseTicker}`}>
            {[...Array(22)].map((_, i) => (
              <div key={i} className={styles.logoWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/${i + 1}.png`}
                  alt={`Partner Row1 ${i + 1}`}
                  className={styles.partnerLogo}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
            {/* Duplicate for seamless looping */}
            {[...Array(22)].map((_, i) => (
              <div key={`dup1-${i}`} className={styles.logoWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/${i + 1}.png`}
                  alt={`Partner Row1 Dup ${i + 1}`}
                  className={styles.partnerLogo}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling Partner Logo Ticker Row 2 - Forward speed */}
        <div className={styles.tickerContainer}>
          <div className={`${styles.tickerTrack} ${styles.forwardTicker}`}>
            {[...Array(22)].map((_, i) => (
              <div key={i} className={styles.logoWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/${(22 - i)}.png`}
                  alt={`Partner Row2 ${i + 1}`}
                  className={styles.partnerLogo}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
            {/* Duplicate for seamless looping */}
            {[...Array(22)].map((_, i) => (
              <div key={`dup2-${i}`} className={styles.logoWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/${(22 - i)}.png`}
                  alt={`Partner Row2 Dup ${i + 1}`}
                  className={styles.partnerLogo}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
