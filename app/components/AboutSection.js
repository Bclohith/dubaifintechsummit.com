import React from 'react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.section} id="about">
      {/* Editorial Overlap Layout */}
      <div className={styles.editorialGrid}>
        
        {/* Massive 3D Abstract Image spanning the background */}
        <div className={styles.imageBackdrop}>
          <img 
            src="/dubaifintechsummit.com/about_abstract.jpg" 
            alt="3D FinTech Abstract" 
            className={styles.backdropImage}
          />
          <div className={styles.imageGradient}></div>
        </div>

        {/* Large Typographic Element */}
        <div className={styles.giantType}>
          <span>3RD</span>
          <span className={styles.giantTypeSub}>EDITION</span>
        </div>

        {/* Asymmetrical Content Panel */}
        <div className={styles.contentPanel}>
          <div className={styles.contentInner}>
            <span className={styles.tagline}>About The Event</span>
            
            <h2 className={styles.title}>
              Building a <span className={styles.cyanGradient}>connected, borderless</span> financial world
            </h2>
            
            <div className={styles.description}>
              <p style={{ marginBottom: '1rem' }}>
                Organised by DIFC, Dubai FinTech Summit – now in its fourth edition – convenes C-suite leaders, decision-makers, regulators, innovators, and market pioneers from finance, policy, and technology to shape the standards, strategies, and innovations defining the next chapter of global finance.
              </p>
              <p>
                Experience groundbreaking insights, bold ideas, and transformative collaborations driving the evolution of the FinTech industry.
              </p>
            </div>
            
            <div className={styles.quoteBlock}>
              "A definitive platform where global capital meets transformative innovation."
            </div>
            
            <a href="#discover" className={styles.btnExplore}>
              Explore The Vision
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
