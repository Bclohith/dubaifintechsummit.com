"use client";

import React, { useState, useEffect } from 'react';
import styles from './EntityGrid.module.css';
import { assetPath } from '../utils/assetPath';

export default function EntityGrid({ title, type, subtitle }) {
  const [entities, setEntities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Generate beautiful mock data for the UI
    setTimeout(() => {
      const mockData = Array.from({ length: 12 }).map((_, i) => ({
        id: i + 1,
        name: `${title} Partner ${i + 1}`,
        logo: `/${(i % 22) + 1}.png`, // Use placeholder logo paths
        url: "#"
      }));
      setEntities(mockData);
      setLoading(false);
    }, 800);
  }, [title]);

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

      {/* Grid Container */}
      <div className={styles.container}>
        {loading ? (
          <div className={styles.loader}>
            <div className={styles.spinner}></div>
            <p>Loading {title}...</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {entities.map((entity) => (
              <a key={entity.id} href={entity.url} target="_blank" rel="noopener noreferrer" className={styles.card}>
                <div className={styles.logoWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={assetPath(entity.logo)} 
                    alt={entity.name} 
                    className={styles.logoImage}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={styles.fallbackText} style={{ display: 'none' }}>
                    {entity.name}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
