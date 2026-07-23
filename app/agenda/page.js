"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './AgendaPage.module.css';
import AgendaList from '../components/AgendaList';

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

        {/* Dynamic Agenda List */}
        <AgendaList />
      </div>

      <Footer />
    </>
  );
}
