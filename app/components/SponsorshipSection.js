"use client";

import React from 'react';
import styles from './SponsorshipSection.module.css';

export default function SponsorshipSection() {
  const sponsorsReasons = [
    {
      title: "Visibility",
      description: "Year-round global exposure across media and markets.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      )
    },
    {
      title: "Access",
      description: "One-on-one deal rooms and curated networking.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: "Influence",
      description: "Shape conversations with regulators, investors, and ministers.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    },
    {
      title: "Credibility",
      description: "Stand alongside the world's most respected brands.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="sponsor" className={styles.sponsorSection}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>Explore sponsorship opportunities</h2>
          <p className={styles.subtitle}>
            Curated themes reflecting the most critical challenges and opportunities shaping finance worldwide in a rapidly evolving landscape.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.leftPanel}>
            <div className={styles.bentoHighlight}>
              <h3 className={styles.whyTitle}>Why<br/>sponsor</h3>
              <p className={styles.whyDesc}>
                Partner with Dubai FinTech Summit to elevate your brand presence on a global scale. Connect with key decision-makers and showcase your innovation to thousands of attendees.
              </p>
              <button className={styles.ctaBtn}>
                Sponsor now
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
          
          <div className={styles.rightGrid}>
            {sponsorsReasons.map((reason, index) => (
              <div key={index} className={styles.bentoCard}>
                <div className={styles.iconWrapper}>
                  {reason.icon}
                </div>
                <h4 className={styles.cardTitle}>{reason.title}</h4>
                <p className={styles.cardDesc}>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
