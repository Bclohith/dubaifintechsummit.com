"use client";

import React from 'react';
import styles from './TakeTheStage.module.css';

export default function TakeTheStage() {
  return (
    <section id="speak" className={styles.stageSection}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          
          <div className={styles.textContent}>
            <div className={styles.badge}>Apply to become a speaker</div>
            <h2 className={styles.title}>Take the stage</h2>
            <p className={styles.description}>
              Interested to take the stage as a keynote speaker or a panelist at Dubai FinTech Summit? Share your insights, shape the future of finance, and engage with a global audience of decision-makers.
            </p>
            <button className={styles.ctaBtn}>
              Submit application
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
          
          <div className={styles.imageContent}>
            {/* Placeholder for "Take the stage Img" */}
            <div className={styles.imageWrapper}>
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80" alt="Speaker on stage" />
              <div className={styles.glowEffect}></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
