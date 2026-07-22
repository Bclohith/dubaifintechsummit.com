"use client";

import { useEffect, useState, useRef } from 'react';
import styles from './CurationSection.module.css';

const stats = [
  { id: 1, count: 20, label: 'Global financial regulators', percentage: 40 },
  { id: 2, count: 5, label: 'Stock exchanges', percentage: 25 },
  { id: 3, count: 30, label: 'Top bank executives', percentage: 60 },
  { id: 4, count: 20, label: 'Top investment management firms', percentage: 40 },
  { id: 5, count: 50, label: 'FinTechs', percentage: 85 },
  { id: 6, count: 20, label: 'Technology enterprises', percentage: 40 }
];

export default function CurationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="curation" ref={sectionRef}>
      
      {/* Decorative ambient background */}
      <div className={styles.ambientGlow}></div>
      <div className={styles.gridOverlay}></div>

      <div className={styles.container}>
        
        {/* Left Side: Editorial Typography */}
        <div className={`${styles.infoBlock} ${isVisible ? styles.revealLeft : ''}`}>
          <div className={styles.eyebrowWrapper}>
            <span className={styles.eyebrowText}>A Curated Gathering</span>
          </div>
          
          <h2 className={styles.title}>
            A curated gathering of <br/>
            <span className={styles.cyanGradient}>global financial leadership</span>
          </h2>
          
          <p className={styles.description}>
            A curated assembly of global financial leaders, spanning regulation, capital markets, banking, investment, and financial technology.
          </p>

          <a href="#attendees" className={styles.exploreLink}>
            Explore Attendee Profile 
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Right Side: Massive Animated Rings (3x2 Grid) */}
        <div className={styles.statsContainer}>
          {stats.map((stat, index) => {
            const radius = 80;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = isVisible ? circumference - (stat.percentage / 100) * circumference : circumference;

            return (
              <div 
                key={stat.id} 
                className={`${styles.statItem} ${isVisible ? styles.revealRight : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className={styles.ringWrapper}>
                  {/* Background Track */}
                  <svg className={styles.ringSvg} width="200" height="200">
                    <circle 
                      cx="100" cy="100" r={radius} 
                      className={styles.ringTrack}
                    />
                    {/* Animated Progress Ring */}
                    <circle 
                      cx="100" cy="100" r={radius} 
                      className={styles.ringProgress}
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      style={{ transition: 'stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s' }}
                    />
                  </svg>
                  
                  {/* Inner Content */}
                  <div className={styles.ringContent}>
                    <span className={styles.number}>
                      {isVisible ? stat.count : 0}<span className={styles.plus}>+</span>
                    </span>
                  </div>
                </div>

                <h3 className={styles.statLabel}>{stat.label}</h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
