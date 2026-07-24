"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CanvasBackground from '../components/CanvasBackground';
import styles from './SpeakersPage.module.css';

export default function SpeakersPage() {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

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
                // Clean up the category name for consistency
                let cleanTag = cat.category_name.replace(/Dubai FinTech Summit\s*\|\|\s*/i, '').trim();
                if (!cleanTag) cleanTag = 'Speaker'; 
                
                const mappedCatSpeakers = cat.speakers.map(s => ({...s, tag: cleanTag}));
                allSpeakers = [...allSpeakers, ...mappedCatSpeakers];
              }
            }
          });
        }
        
        allSpeakers.sort((a, b) => (a.speaker_order || 999) - (b.speaker_order || 999));

        const mappedSpeakers = allSpeakers.map(s => ({
          id: s.speaker_id,
          name: s.name,
          title: s.designation || '',
          company: s.organisation || '',
          country: s.location || '',
          photo: s.image_url,
          bio: s.about || '',
        }));

        setSpeakers(mappedSpeakers);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch speakers from KonfHub:", error);
        setLoading(false);
      }
    };

    fetchSpeakers();

    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedSpeaker(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedSpeaker) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedSpeaker]);

  return (
    <>
      <Navbar />
      <CanvasBackground />
      
      <div className={styles.wrapper}>
        <div style={{ position: 'relative', zIndex: 1, paddingTop: '40px', paddingBottom: '0px' }}>
          <h1 style={{ fontSize: '4rem', fontWeight: '800', textAlign: 'center', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px', background: 'linear-gradient(to right, #fff, #00e5e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Speakers
          </h1>
          <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Hear from visionary leaders and industry pioneers shaping the global financial landscape.
          </p>
        </div>
        
        {/* Speakers Grid Container */}
        <div className={styles.container}>
          <div className={styles.konfhubSpeakersWrap}>
            {loading ? (
              <div className={styles.loader}>
                <div className={styles.spinner}></div>
                <p style={{color: '#000'}}>Loading Speakers...</p>
              </div>
            ) : (
              <div className={styles.konfhubSpeakersGrid}>
                {speakers.map((speaker) => (
                  <div key={speaker.id} className={styles.speakerCardWrapper}>
                    <div 
                      className={styles.speakerCard} 
                      onClick={() => setSelectedSpeaker(speaker)}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={speaker.photo ? (speaker.photo.startsWith('http') ? speaker.photo : speaker.photo) : "https://ui-avatars.com/api/?name=" + encodeURIComponent(speaker.name) + "&background=f0f0f0&color=181818&size=500"} 
                        alt={speaker.name} 
                        className={styles.speakerImage}
                        onError={(e) => {
                          e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(speaker.name) + "&background=f0f0f0&color=181818&size=500";
                        }}
                      />
                      <div className={styles.speakerInfo}>
                        <h3 className={styles.speakerName}>{speaker.name}</h3>
                        <div className={styles.speakerTitle}>{speaker.title}</div>
                        <div className={styles.speakerOrg}>{speaker.company}</div>
                        <div className={styles.speakerCountry}>{speaker.country}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Speaker Modal Popup */}
      {selectedSpeaker && (
        <div className={styles.modalOverlay} onClick={() => setSelectedSpeaker(null)}>
          <div className={styles.speakerModalInner} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeModal} onClick={() => setSelectedSpeaker(null)}>
              &times;
            </button>
            <div className={styles.modalBody}>
              <div className={styles.modalPhoto}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={selectedSpeaker.photo ? (selectedSpeaker.photo.startsWith('http') ? selectedSpeaker.photo : selectedSpeaker.photo) : "https://ui-avatars.com/api/?name=" + encodeURIComponent(selectedSpeaker.name) + "&background=f0f0f0&color=181818&size=500"} 
                  alt={selectedSpeaker.name} 
                  onError={(e) => {
                    e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(selectedSpeaker.name) + "&background=f0f0f0&color=181818&size=500";
                  }}
                />
              </div>
              <div className={styles.modalContent}>
                <h2>{selectedSpeaker.name}</h2>
                <div className={styles.speakerTitle}>{selectedSpeaker.title}</div>
                <div className={styles.speakerOrg}>{selectedSpeaker.company}</div>
                
                <div className={styles.speakerBio}>
                  <p>{selectedSpeaker.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
