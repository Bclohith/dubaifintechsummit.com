"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './AgendaPage.module.css';
import { assetPath } from '../utils/assetPath';

export default function AgendaPage() {
  return (
    <>
      <Navbar />
      
      <div className={styles.wrapper}>
        {/* Hero Banner */}
        <div className={styles.heroBanner}>
          <div className={styles.ambientGlow}></div>
          <div className={styles.heroContent}>
            <span className={styles.preTitle}>PROGRAMME</span>
            <h1 className={styles.heroTitle}>Event Agenda</h1>
            <p className={styles.heroSubtitle}>Two days of groundbreaking keynotes, panels, and strategic dialogues shaping the future.</p>
          </div>
        </div>

        {/* Agenda Iframe Embed */}
        <div className={styles.container} style={{ padding: '0', maxWidth: '100%' }}>
          <iframe 
            src="https://konfhub.com/dubai-future-finance-week-2026" 
            width="100%" 
            height="1200px" 
            style={{ border: 'none', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            title="KonfHub Agenda"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
}
