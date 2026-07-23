"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './SpeakersPage.module.css';

export default function SpeakersPage() {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  useEffect(() => {
    // Simulated fetch for Dubai FinTech Summit Speakers
    setTimeout(() => {
      const mockSpeakers = [
        {
          id: 1,
          name: "H.E. Essa Kazim",
          title: "Governor",
          company: "DIFC",
          country: "UAE",
          photo: "/essa-kazim.png",
          bio: "Leading the future of finance in Dubai.",
        },
        {
          id: 2,
          name: "Arif Amiri",
          title: "CEO",
          company: "DIFC Authority",
          country: "UAE",
          photo: "/arif-amiri.png",
          bio: "Driving innovation in the financial sector.",
        },
        {
          id: 3,
          name: "Brad Garlinghouse",
          title: "CEO",
          company: "Ripple",
          country: "USA",
          photo: "/placeholder.png",
          bio: "Pioneering crypto solutions for global payments.",
        },
        {
          id: 4,
          name: "Jenny Johnson",
          title: "President & CEO",
          company: "Franklin Templeton",
          country: "USA",
          photo: "/placeholder.png",
          bio: "Global asset management and digital assets strategy.",
        },
        {
          id: 5,
          name: "Nikolay Storonsky",
          title: "CEO",
          company: "Revolut",
          country: "UK",
          photo: "/placeholder.png",
          bio: "Revolutionizing digital banking.",
        },
        {
          id: 6,
          name: "Dr. Bernd van Linder",
          title: "CEO",
          company: "Commercial Bank of Dubai",
          country: "UAE",
          photo: "/placeholder.png",
          bio: "Innovating the banking landscape in the UAE.",
        }
      ];
      setSpeakers(mockSpeakers);
      setLoading(false);
    }, 800);

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
      
      <div className={styles.wrapper}>
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
                        src={speaker.photo} 
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
                  src={selectedSpeaker.photo} 
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
