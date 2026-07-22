"use client";

import { useEffect, useState, useRef } from 'react';
import styles from './StrategicInnovation.module.css';

const features = [
  { id: '01', title: 'CONFERENCE PROGRAMME', desc: 'Dive into powerful keynotes and sharp panel debates that tackle the real issues shaping global finance.', bg: '/dubaifintechsummit.com/' },
  { id: '02', title: 'THE INNOVATION ARENA', desc: 'Explore breakthrough technologies and meet the companies redefining financial services.', bg: '/dubaifintechsummit.com/' },
  { id: '03', title: 'STRATEGIC NETWORKING', desc: 'Connect with industry leaders, investors, and innovators ready to turn ideas into action.', bg: '/dubaifintechsummit.com/' },
  { id: '04', title: 'DFS DIALOGUES', desc: 'Closed-door discussions among policymakers and C-suite leaders providing valuable regulatory and market insights.', bg: '/dubaifintechsummit.com/' },
  { id: '05', title: 'MOUs & PARTNERSHIPS', desc: 'Build high-impact alliances with the people and companies transforming the FinTech landscape.', bg: '/dubaifintechsummit.com/' },
  { id: '06', title: 'FINTECH WORLD CUP', desc: 'Watch top start-ups battle it out live for global recognition, rewards, and investment.', bg: '/dubaifintechsummit.com/' },
  { id: '07', title: 'FINTECH LAUNCHPAD', desc: 'A platform for announcements, innovations, collaboration, and key connections.', bg: '/dubaifintechsummit.com/' },
  { id: '08', title: 'ECOSYSTEM EVENTS', desc: 'Invite-only sessions and workshops designed for decision-makers driving change across FinTech.', bg: '/dubaifintechsummit.com/' }
];

export default function StrategicInnovation() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="strategic-innovation" ref={sectionRef}>
      
      {/* Abstract Background Elements */}
      <div className={styles.glowTop}></div>
      <div className={styles.glowBottom}></div>

      <div className={styles.container}>
        
        {/* Header Block */}
        <div className={`${styles.headerBlock} ${isVisible ? styles.revealUp : ''}`}>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>
              Global leadership. <br/>
              <span className={styles.cyanGradient}>Strategic dialogue.</span> <br/>
              High-impact innovation.
            </h2>
          </div>
          <div className={styles.headerAction}>
            <a href="#buy-pass" className={styles.ctaButton}>
              Buy a pass
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* 4x2 Hover Reveal Grid */}
        <div className={`${styles.gridContainer} ${isVisible ? styles.revealUpDelay : ''}`}>
          {features.map((item, index) => (
            <div 
              key={item.id} 
              className={styles.featureCard}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Card Background Image with Overlay */}
              <div 
                className={styles.cardBg}
                style={{ backgroundImage: `url(${item.bg})` }}
              >
                <div className={styles.cardOverlay}></div>
              </div>

              {/* Content Wrapper - Grows naturally upwards on hover */}
              <div className={styles.cardContentWrapper}>
                <span className={styles.cardId}>{item.id}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>

                {/* Hover Content - Expands inline */}
                <div className={styles.cardHoverContent}>
                  <div className={styles.hoverLine}></div>
                  <p className={styles.cardDesc}>{item.desc}</p>
                  <div className={styles.arrowIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
