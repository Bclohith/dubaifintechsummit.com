import React from 'react';
import styles from './ExhibitSection.module.css';

export default function ExhibitSection() {
  return (
    <section className={styles.section} id="exhibit">
      {/* Floating Parallax Scatter */}
      <div className={styles.container}>
        
        {/* Info Block Layer (Foreground) */}
        <div className={styles.infoBlock}>
          <div className={styles.decoLines}>
            <div className={styles.decoArrow}></div>
            <div className={styles.decoArrow}></div>
          </div>
          
          <h2 className={styles.title}>
            Exhibit. <span className={styles.cyanGradient}>Network.</span> Grow.
          </h2>
          <p className={styles.description}>
            Position your brand at the centre of global FinTech innovation. Engage with investors, enterprises, and industry leaders, showcase your solutions, and create strategic partnerships that drive growth, influence, and impact.
          </p>
          
          <div className={styles.actionWrap}>
            <a href="#exhibit-inquiry" className={styles.ctaBtn}>
              Reserve Your Space
              <div className={styles.arrowCircle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Scattered Image Layer (Background Parallax Effect) */}
        <div className={styles.scatterGrid}>
          
          <div className={`${styles.scatterItem} ${styles.scatterPos1}`}>
            <img src="/exhibit_new_1.jpg" alt="FinTech Exhibit" className={styles.scatterImage} />
            <div className={styles.imageGlow}></div>
          </div>
          
          <div className={`${styles.scatterItem} ${styles.scatterPos2}`}>
            <img src="/exhibit_new_2.jpg" alt="Data Streams" className={styles.scatterImage} />
            <div className={styles.imageGlow}></div>
          </div>
          
          <div className={`${styles.scatterItem} ${styles.scatterPos3}`}>
            <img src="/exhibit-1.webp" alt="Live Demos" className={styles.scatterImage} />
            <div className={styles.imageGlow}></div>
          </div>
          
          <div className={`${styles.scatterItem} ${styles.scatterPos4}`}>
            <img src="/exhibit-2.jpg" alt="Networking" className={styles.scatterImage} />
            <div className={styles.imageGlow}></div>
          </div>

        </div>

      </div>
    </section>
  );
}
