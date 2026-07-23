"use client";

import React, { useEffect, useState } from 'react';
import styles from './EntityGrid.module.css';
import { assetPath } from '../utils/assetPath';

export default function EntityGrid({ title, type, subtitle }) {
  return (
    <div className={styles.wrapper}>
      {/* Hero Banner */}
      <div className={styles.heroBanner}>
        <div className={styles.ambientGlow}></div>
        <div className={styles.heroContent}>
          <span className={styles.preTitle}>GLOBAL NETWORK</span>
          <h1 className={styles.heroTitle}>{title}</h1>
          {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
          <div className={styles.divider}></div>
        </div>
      </div>

      {/* KonfHub Iframe Embed */}
      <div className={styles.container} style={{ padding: '0', maxWidth: '100%' }}>
        <iframe 
          src="https://konfhub.com/dubai-future-finance-week-2026" 
          width="100%" 
          height="1200px" 
          style={{ border: 'none', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
          title={`KonfHub ${title}`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
