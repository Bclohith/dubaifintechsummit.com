'use client';

import { useEffect, useState } from 'react';
import styles from './PartnersSection.module.css';
import { sponsorsData } from '../data/sponsors';

export default function PartnersSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Extract all valid logo URLs from the hierarchical tiers, ignoring the 'General' tier
  let allSponsors = [];
  if (sponsorsData && sponsorsData.sponsors) {
    sponsorsData.sponsors.forEach(tier => {
      if (tier.tier !== 'General') {
        tier.logos.forEach(url => {
          if (!url.includes('Dubai-Fintech-Summit-Green-White-Logo') && !url.includes('organized-difc')) {
            allSponsors.push(url);
          }
        });
      }
    });
  }
  
  // Split the sponsors array roughly in half for the two rows
  const midPoint = Math.ceil(allSponsors.length / 2);
  const row1Sponsors = allSponsors.slice(0, midPoint);
  const row2Sponsors = allSponsors.slice(midPoint);

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
            {row1Sponsors.map((url, i) => (
              <div key={i} className={styles.logoWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={url}
                  alt={`Partner ${i + 1}`}
                  className={styles.partnerLogo}
                  style={{ filter: 'brightness(0) invert(1)' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
            {/* Duplicate for seamless looping */}
            {row1Sponsors.map((url, i) => (
              <div key={`dup1-${i}`} className={styles.logoWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={url}
                  alt={`Partner Dup ${i + 1}`}
                  className={styles.partnerLogo}
                  style={{ filter: 'brightness(0) invert(1)' }}
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
            {row2Sponsors.map((url, i) => (
              <div key={i} className={styles.logoWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={url}
                  alt={`Sponsor ${i + 1}`}
                  className={styles.partnerLogo}
                  style={{ filter: 'brightness(0) invert(1)' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
            {/* Duplicate for seamless looping */}
            {row2Sponsors.map((url, i) => (
              <div key={`dup2-${i}`} className={styles.logoWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={url}
                  alt={`Sponsor Dup ${i + 1}`}
                  className={styles.partnerLogo}
                  style={{ filter: 'brightness(0) invert(1)' }}
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
