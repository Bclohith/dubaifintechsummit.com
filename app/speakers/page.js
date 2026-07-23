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
        setSpeakers(allSpeakers);
      } catch (err) {
        console.error('Failed to fetch speakers:', err);
      } finally {
        setLoading(false);
      }
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
