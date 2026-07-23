"use client";

import React, { useState, useEffect } from 'react';
import styles from './SpeakersSection.module.css';

export default function SpeakersSection() {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Generate beautiful realistic mock data for the Homepage Speakers Section
    setTimeout(() => {
      const mockSpeakers = [
        {
          id: 1,
          name: "H.E. Essa Kazim",
          title: "Governor",
          company: "DIFC",
          photo: "/essa-kazim.png",
          tag: "Keynote"
        },
        {
          id: 2,
          name: "Arif Amiri",
          title: "CEO",
          company: "DIFC Authority",
          photo: "/arif-amiri.png",
          tag: "Speaker"
        },
        {
          id: 3,
          name: "Brad Garlinghouse",
          title: "CEO",
          company: "Ripple",
          photo: "/placeholder.png",
          tag: "Speaker"
        },
        {
          id: 4,
          name: "Jenny Johnson",
          title: "President & CEO",
          company: "Franklin Templeton",
          photo: "/placeholder.png",
          tag: "Speaker"
        }
      ];
      setSpeakers(mockSpeakers);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <section className={styles.speakersSection}>
      <div className={styles.ambientGlow}></div>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <span className={styles.preTitle}>GLOBAL LEADERSHIP</span>
          <h2 className={styles.title}>Meet the Speakers</h2>
          <p className={styles.subtitle}>
            Hear from the brightest minds, innovators, and regulators shaping the future of finance at the Dubai FinTech Summit.
          </p>
        </div>

        {loading ? (
          <div className={styles.loader}>
            <div className={styles.spinner}></div>
            <p>Loading Speakers...</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {speakers.map((speaker, index) => (
              <div 
                key={speaker.id} 
                className={styles.card}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.imageWrapper}>
                  <div className={styles.imageOverlay}></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={speaker.photo} 
                    alt={speaker.name} 
                    className={styles.speakerImage}
                    onError={(e) => {
                      e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(speaker.name) + "&background=1a1a2e&color=fff&size=500";
                    }}
                  />
                  <div className={styles.speakerTag}>{speaker.tag}</div>
                </div>
                <div className={styles.speakerInfo}>
                  <h3 className={styles.speakerName}>{speaker.name}</h3>
                  <p className={styles.speakerTitle}>{speaker.title}</p>
                  <p className={styles.speakerCompany}>{speaker.company}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.ctaWrapper}>
          <a href="/speakers" className={styles.viewAllBtn}>
            View All Speakers
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
        
      </div>
    </section>
  );
}
