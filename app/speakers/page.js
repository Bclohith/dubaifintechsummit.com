"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './SpeakersPage.module.css';

export default function SpeakersPage() {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated fetch for Dubai FinTech Summit Speakers
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
        },
        {
          id: 5,
          name: "Nikolay Storonsky",
          title: "CEO",
          company: "Revolut",
          photo: "/placeholder.png",
          tag: "Keynote"
        },
        {
          id: 6,
          name: "Dr. Bernd van Linder",
          title: "CEO",
          company: "Commercial Bank of Dubai",
          photo: "/placeholder.png",
          tag: "Speaker"
        },
        {
          id: 7,
          name: "Yassir Karmal",
          title: "Managing Director",
          company: "Bain & Company",
          photo: "/placeholder.png",
          tag: "Moderator"
        },
        {
          id: 8,
          name: "Ahmed Abdelaal",
          title: "Group CEO",
          company: "Mashreq",
          photo: "/placeholder.png",
          tag: "Speaker"
        }
      ];
      setSpeakers(mockSpeakers);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <>
      <Navbar />
      
      <div className={styles.wrapper}>
        {/* Hero Banner */}
        <div className={styles.heroBanner}>
          <div className={styles.ambientGlow}></div>
          <div className={styles.heroContent}>
            <span className={styles.preTitle}>GLOBAL LEADERSHIP</span>
            <h1 className={styles.heroTitle}>Speakers</h1>
            <p className={styles.heroSubtitle}>Hear from the brightest minds, innovators, and regulators shaping the future of finance at the Dubai FinTech Summit.</p>
          </div>
        </div>

        {/* Speakers Grid Container */}
        <div className={styles.container}>
          {loading ? (
            <div className={styles.loader}>
              <div className={styles.spinner}></div>
              <p>Loading Speakers...</p>
            </div>
          ) : (
            <div className={styles.grid}>
              {speakers.map((speaker) => (
                <div key={speaker.id} className={styles.card}>
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
        </div>
      </div>

      <Footer />
    </>
  );
}
