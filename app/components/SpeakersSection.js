"use client";

import { useEffect, useState, useRef } from 'react';
import styles from './SpeakersSection.module.css';
import { assetPath } from '../utils/assetPath';

export default function SpeakersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [speakersData, setSpeakersData] = useState([]);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const res = await fetch(`https://api.konfhub.com/event/public/dubai-future-finance-week-2026/speakers`);
        const data = await res.json();
        let allSpeakers = [];
        if (data && data.categorized) {
          data.categorized.forEach(category => {
            if (category.speakers) {
              category.speakers.forEach(speaker => {
                allSpeakers.push({
                  id: speaker.speaker_id,
                  name: speaker.name,
                  title: speaker.designation || '',
                  company: speaker.organisation || '',
                  photo: speaker.image_url || '/essa-kazim.png',
                  tag: category.category_name.replace('||', '').trim() || 'Speaker'
                });
              });
            }
          });
        }
        // Take top 6 speakers for the homepage
        setSpeakersData(allSpeakers.slice(0, 6));
      } catch (err) {
        console.error('Failed to fetch speakers:', err);
      }
    };
    
    fetchSpeakers();

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
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.section} id="speakers" ref={sectionRef}>
      
      <div className={styles.container}>
        <div className={`${styles.headerBlock} ${isVisible ? styles.reveal : ''}`}>
          <div className={styles.titleInfo}>
            <span className={styles.preTitle}>Visionaries</span>
            <h2 className={styles.title}>The Global Voices <br/> Of FinTech</h2>
            <div className={styles.titleLine}></div>
          </div>
          
          <div className={styles.actionBlock}>
            <button className={styles.viewAllBtn}>
              View All Speakers
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Expanding Accordion Gallery */}
      <div className={`${styles.accordionWrapper} ${isVisible ? styles.reveal : ''}`}>
        <div className={styles.accordionContainer}>
          
          {speakersData.map((speaker, index) => (
            <div 
              key={speaker.id} 
              className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              
              <div className={styles.imageBox}>
                <img src={assetPath(speaker.photo)} alt={speaker.name} className={styles.speakerImage} />
                <div className={styles.gradientScrim}></div>
                
                <div className={styles.tagLabel}>
                  {speaker.tag}
                </div>
              </div>

              {/* Vertical Title (visible when collapsed) */}
              <div className={styles.verticalTitle}>
                {speaker.name}
              </div>

              {/* Full Details (visible when expanded) */}
              <div className={styles.expandedDetails}>
                <h3 className={styles.speakerName}>{speaker.name}</h3>
                <div className={styles.dividerLine}></div>
                <p className={styles.speakerTitle}>{speaker.title}</p>
                <p className={styles.speakerCompany}>{speaker.company}</p>
              </div>
              
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}
