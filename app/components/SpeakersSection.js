'use client';

import React, { useState, useEffect } from 'react';
import { assetPath } from '../utils/assetPath';
import styles from './SpeakersSection.module.css';

export default function SpeakersSection() {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await fetch('https://api.konfhub.com/event/public/dubai-future-finance-week-2026/speakers');
        const data = await response.json();
        
        let allSpeakers = [];
        
        // ONLY pull speakers from categories that contain "Dubai FinTech Summit ||"
        if (data.categorized && data.categorized.length > 0) {
          data.categorized.forEach(cat => {
            if (cat.category_name && cat.category_name.includes('Dubai FinTech Summit ||')) {
              if (cat.speakers && cat.speakers.length > 0) {
                // Clean up the category name so it fits in the vertical tag
                let cleanTag = cat.category_name.replace(/Dubai FinTech Summit\s*\|\|\s*/i, '').trim();
                if (!cleanTag) cleanTag = 'Speaker'; 
                
                const mappedCatSpeakers = cat.speakers.map(s => ({...s, tag: cleanTag}));
                allSpeakers = [...allSpeakers, ...mappedCatSpeakers];
              }
            }
          });
        }
        
        // Sort by speaker_order if available
        allSpeakers.sort((a, b) => (a.speaker_order || 999) - (b.speaker_order || 999));

        // Map KonfHub fields to our UI fields
        const mappedSpeakers = allSpeakers.map(s => ({
          id: s.speaker_id,
          name: s.name,
          title: s.designation || '',
          company: s.organisation || '',
          photo: s.image_url,
          tag: s.tag
        }));

        // Limit to 10 for the homepage accordion UI
        setSpeakers(mappedSpeakers.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch speakers from KonfHub:", error);
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.headerBlock}>
          <div className={styles.titleInfo}>
            <span className={styles.preTitle}>GLOBAL LEADERSHIP</span>
            <h2 className={styles.title}>Meet the Speakers</h2>
            <div className={styles.titleLine}></div>
          </div>
          <a href="/speakers" className={styles.viewAllBtn}>
            View All Speakers
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        {loading ? (
          <div className={styles.loader}>
            <p>Loading Speakers...</p>
          </div>
        ) : (
          <div className={styles.accordionWrapper}>
            <div className={styles.accordionContainer}>
              {speakers.map((speaker, index) => {
                const isActive = activeIndex === index;
                return (
                  <div 
                    key={speaker.id} 
                    className={`${styles.accordionItem} ${isActive ? styles.active : ''}`}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <div className={styles.imageBox}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={speaker.photo ? (speaker.photo.startsWith('http') ? speaker.photo : assetPath(speaker.photo)) : "https://ui-avatars.com/api/?name=" + encodeURIComponent(speaker.name) + "&background=1a1a2e&color=fff&size=500"} 
                        alt={speaker.name} 
                        className={styles.speakerImage}
                        onError={(e) => {
                          e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(speaker.name) + "&background=1a1a2e&color=fff&size=500";
                        }}
                      />
                    </div>
                    
                    <div className={styles.gradientScrim}></div>
                    
                    <div className={styles.tagLabel}>{speaker.tag}</div>
                    
                    <div className={styles.verticalTitle}>{speaker.name}</div>
                    
                    <div className={styles.expandedDetails}>
                      <h3 className={styles.speakerName}>{speaker.name}</h3>
                      <div className={styles.dividerLine}></div>
                      <p className={styles.speakerTitle}>{speaker.title}</p>
                      <p className={styles.speakerCompany}>{speaker.company}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
      </div>
    </section>
  );
}
