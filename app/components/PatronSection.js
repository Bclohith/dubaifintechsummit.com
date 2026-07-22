"use client";

import { useEffect, useState, useRef } from 'react';
import styles from './PatronSection.module.css';

export default function PatronSection() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef} id="patron">
      {/* Majestic Typographic Reveal Layout */}
      
      <div className={styles.container}>
        <div className={`${styles.patronContent} ${mounted ? styles.reveal : ''}`}>
          
          <div className={styles.patronLeft}>
            <div className={styles.patronBadge}>
              <span className={styles.badgeDot}></span>
              Under the Patronage of
            </div>
            <div className={styles.goldLine}></div>
          </div>

          <div className={styles.patronRight}>
            <h2 className={styles.patronName}>
              H.H. Sheikh Maktoum bin Mohammed <br/> bin Rashid Al Maktoum
            </h2>
            <p className={styles.patronTitle}>
              First Deputy Ruler of Dubai, Deputy Prime Minister, and Minister of Finance, UAE, and President of DIFC
            </p>
          </div>

        </div>
      </div>

      {/* Readable Sponsor Track */}
      <div className={`${styles.sponsorsWrap} ${mounted ? styles.revealSponsors : ''}`}>
        <div className={styles.sponsorHeader}>
          <span className={styles.sponsorLabel}>Our Sponsors & Partners</span>
          <div className={styles.sponsorLine}></div>
        </div>

        <div className={styles.logoTrackContainer}>
          <div className={styles.logoTrack}>
            {/* Loop of images, without heavy grayscale or opacity filters for maximum readability */}
            {[...Array(22)].map((_, i) => (
              <div key={i} className={styles.logoWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/${i + 1}.png`}
                  alt={`Sponsor ${i + 1}`}
                  className={styles.sponsorLogo}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
            {/* Duplicate track for seamless infinite scroll */}
            {[...Array(22)].map((_, i) => (
              <div key={`dup-${i}`} className={styles.logoWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/${i + 1}.png`}
                  alt={`Sponsor ${i + 1} Duplicate`}
                  className={styles.sponsorLogo}
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
