'use client';

import React, { useState, useEffect } from 'react';
import { assetPath } from '../utils/assetPath';
import styles from './SpeakersSection.module.css';

export default function SpeakersSection() {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Generate mock data for the Homepage Speakers Section accordion
    setTimeout(() => {
      const mockSpeakers = [
        {
          id: 1,
          name: "H.E. Essa Kazim",
          title: "Governor",
          company: "DIFC, UAE",
          photo: "/speakers/1773138551905-358d648a-dfab-4bbf-9a9d-8eed9c851380.png",
          tag: "Keynote"
        },
        {
          id: 2,
          name: "Noel Quinn",
          title: "Chairman",
          company: "Julius Baer Group, UK",
          photo: "/speakers/1773138659479-b4b31f3c-6819-4ed6-a4da-55d009dbcae5.png",
          tag: "Speaker"
        },
        {
          id: 3,
          name: "Jenny Johnson",
          title: "CEO",
          company: "Franklin Templeton, USA",
          photo: "/speakers/1773138788933-c372563f-9e29-403e-8da7-fb83736fce69.png",
          tag: "Speaker"
        },
        {
          id: 4,
          name: "Tan Su Shan",
          title: "CEO & Director",
          company: "DBS Group, Singapore",
          photo: "/speakers/1773138867713-423d0d88-3b20-4766-b1ee-86a945f1bb4c.png",
          tag: "Speaker"
        },
        {
          id: 5,
          name: "Kentaro Okuda",
          title: "President & CEO",
          company: "Nomura Holdings, Inc, Japan",
          photo: "/speakers/1773139013619-f0299db9-0981-4534-bf54-edab1a05cca7.png",
          tag: "Speaker"
        },
        {
          id: 6,
          name: "Ryan Breslow",
          title: "Founder & CEO",
          company: "Bolt, USA",
          photo: "/speakers/1773139362791-89a36de9-fc87-49c0-8516-9f6001b98476.png",
          tag: "Speaker"
        },
        {
          id: 7,
          name: "Shri Ashishkumar Chauhan",
          title: "MD & CEO",
          company: "National Stock Exchange of India",
          photo: "/speakers/1773139445550-c75c2101-e6c6-445e-875d-23d854dc67c0.png",
          tag: "Speaker"
        },
        {
          id: 8,
          name: "H.E. Arif Amiri",
          title: "CEO",
          company: "DIFC Authority, UAE",
          photo: "/speakers/1773139840556-456e41e4-0505-4fd8-95dc-3376fe94db63.png",
          tag: "Speaker"
        },
        {
          id: 9,
          name: "Chris Hogbin",
          title: "CEO",
          company: "Lazard Asset Management, USA",
          photo: "/speakers/1773140075492-497ac243-6ae2-44d4-b3fc-a1c9a6cd338a.png",
          tag: "Speaker"
        },
        {
          id: 10,
          name: "Nicolas Moreau",
          title: "CEO",
          company: "HSBC Asset Management, UK",
          photo: "/speakers/1773140197836-f1420645-6d06-4bbc-b417-c1ac658f3fb4.png",
          tag: "Speaker"
        }
      ];
      setSpeakers(mockSpeakers);
      setLoading(false);
    }, 800);
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
                        src={speaker.photo} 
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
