"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './SpeakersPage.module.css';
import { assetPath } from '../utils/assetPath';

export default function SpeakersPage() {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated KonfHub API fetch for Speakers
    const fetchSpeakers = async () => {
      setLoading(true);
      // await fetch(`https://api.konfhub.com/speakers?event=dubai-future-finance-week-2026`)
      
      setTimeout(() => {
        const mockSpeakers = [
          { id: 1, name: 'H.E. Essa Kazim', title: 'Governor', company: 'DIFC', photo: '/essa-kazim.png', tag: 'VIP' },
          { id: 2, name: 'Arif Amiri', title: 'CEO', company: 'DIFC Authority', photo: '/arif-amiri.png', tag: 'Host' },
          { id: 3, name: 'Ryan Breslow', title: 'Founder', company: 'Bolt', photo: '/ryan-breslow.png', tag: 'Keynote' },
          { id: 4, name: 'Tan Su Shan', title: 'Group Head', company: 'DBS Bank', photo: '/tan-su-shan.png', tag: 'Banking' },
          { id: 5, name: 'Ashishkumar Chauhan', title: 'MD & CEO', company: 'National Stock Exchange of India', photo: '/ashishkumar-chauhan.png', tag: 'Markets' },
          { id: 6, name: 'Kentaro Okuda', title: 'President & CEO', company: 'Nomura Holdings', photo: '/kentaro-okuda.png', tag: 'Finance' },
          { id: 7, name: 'Jane Doe', title: 'Chief Innovation Officer', company: 'Global Bank', photo: '/essa-kazim.png', tag: 'Innovator' },
          { id: 8, name: 'John Smith', title: 'Managing Director', company: 'Venture Capital', photo: '/arif-amiri.png', tag: 'Investor' },
        ];
        setSpeakers(mockSpeakers);
        setLoading(false);
      }, 1000);
    };

    fetchSpeakers();
  }, []);

  return (
    <>
      <Navbar />
      
      <div className={styles.wrapper}>
        {/* Hero Banner */}
        <div className={styles.heroBanner}>
          <div className={styles.ambientGlow}></div>
          <div className={styles.heroContent}>
            <span className={styles.preTitle}>VISIONARIES</span>
            <h1 className={styles.heroTitle}>The Global Voices Of FinTech</h1>
            <p className={styles.heroSubtitle}>Meet the pioneers, regulators, and innovators shaping the next chapter of global finance.</p>
            <div className={styles.divider}></div>
          </div>
        </div>

        {/* Speakers Grid */}
        <div className={styles.container}>
          {loading ? (
            <div className={styles.loader}>
              <div className={styles.spinner}></div>
              <p>Loading Speakers from KonfHub...</p>
            </div>
          ) : (
            <div className={styles.grid}>
              {speakers.map((speaker) => (
                <div key={speaker.id} className={styles.speakerCard}>
                  <div className={styles.imageWrapper}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={assetPath(speaker.photo)} alt={speaker.name} className={styles.speakerImage} />
                    <div className={styles.gradientScrim}></div>
                    <div className={styles.tagLabel}>{speaker.tag}</div>
                  </div>
                  <div className={styles.details}>
                    <h3 className={styles.speakerName}>{speaker.name}</h3>
                    <div className={styles.tinyDivider}></div>
                    <p className={styles.speakerTitle}>{speaker.title}</p>
                    <p className={styles.speakerCompany}>{speaker.company}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
