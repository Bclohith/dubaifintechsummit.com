"use client";

import React, { useState, useEffect } from 'react';
import styles from './EntityGrid.module.css';
import { assetPath } from '../utils/assetPath';

export default function EntityGrid({ title, type, subtitle }) {
  const [entities, setEntities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchEntities = async () => {
      setLoading(true);
      setError(false);
      try {
        const apiKey = process.env.NEXT_PUBLIC_KONFHUB_API_KEY;
        const res = await fetch(`https://api.konfhub.com/event/dubai-future-finance-week-2026/entities?type=${type}`, {
          headers: apiKey ? { 'x-api-key': apiKey } : {}
        });
        
        const data = await res.json();
        
        if (data && data.message === 'Missing Authentication Token') {
          throw new Error('Missing API Key');
        }

        if (data && Array.isArray(data)) {
          const formattedEntities = data.map(e => ({
            id: e.entity_id,
            name: e.entity_name,
            logo: e.logo_url || '/placeholder.png',
            url: e.website_url || '#'
          }));
          setEntities(formattedEntities);
        }
      } catch (err) {
        console.warn('KonfHub API Error (Fallback to mock data):', err.message);
        setError(true);
        // Fallback Mock Data
        setTimeout(() => {
          const mockData = Array.from({ length: 12 }).map((_, i) => ({
            id: i + 1,
            name: `${title} Partner ${i + 1}`,
            logo: `/${(i % 22) + 1}.png`,
            url: "#"
          }));
          setEntities(mockData);
        }, 500);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };

    fetchEntities();
  }, [title, type]);

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
        {error && (
          <div style={{ padding: '15px', background: 'rgba(255, 50, 50, 0.1)', color: '#ff6b6b', borderRadius: '8px', marginBottom: '30px', textAlign: 'center', border: '1px solid rgba(255,50,50,0.3)' }}>
            <strong>Displaying Mock Data:</strong> Please configure <code>NEXT_PUBLIC_KONFHUB_API_KEY</code> in Vercel to fetch live {title} from KonfHub.
          </div>
        )}
        
        {loading ? (
          <div className={styles.loader}>
            <div className={styles.spinner}></div>
            <p>Loading {title} from KonfHub...</p>
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
