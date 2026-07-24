"use client";

import React from 'react';
import { assetPath } from '../utils/assetPath';
import styles from './ExhibitorPackages.module.css';

export default function ExhibitorPackages() {
  return (
    <section className={styles.exhibitorSection}>
      <div className={styles.container}>
        
        {/* Exhibitor Package */}
        <div className={styles.packageRow}>
          <div className={styles.imageCol}>
            {/* Placeholder for "Exhibit Img New" */}
            <div className={styles.placeholderImage}>
              <div className={styles.overlay}></div>
              <img src={assetPath('/exhibit_booth_custom.jpg')} alt="Exhibit Booth" />
            </div>
          </div>
          
          <div className={styles.contentCol}>
            <div className={styles.headerRow}>
              <h3 className={styles.packageTitle}>Exhibitor</h3>
              <div className={styles.priceTag}>USD 6,000</div>
            </div>
            
            <button className={styles.buyBtn}>Buy now</button>
            
            <h4 className={styles.benefitsTitle}>Package Benefits</h4>
            
            <div className={styles.benefitBlock}>
              <div className={styles.benefitHeader}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V4h16v3"/><path d="M4 17v3h16v-3"/><path d="M4 12h16"/><path d="M4 7h16"/><path d="M4 17h16"/></svg>
                <h5>Tickets</h5>
              </div>
              <ul className={styles.benefitList}>
                <li>Conference Pass : 2</li>
                <li>Expo Pass : 3</li>
              </ul>
            </div>
            
            <div className={styles.benefitBlock}>
              <div className={styles.benefitHeader}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M12 8v4l3 3"/></svg>
                <h5>Branding</h5>
              </div>
              <ul className={styles.benefitList}>
                <li>Your company logo with a hyperlink to your website will appear on the event website.</li>
                <li>Your company logo will be branded on pre-event promotional materials and at-event materials including but not limited to: Event emailers and Post-event report.</li>
                <li>Event website to contain and maintain the same level of branding for up to 6 months after the event.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Start-up Pod Package */}
        <div className={`${styles.packageRow} ${styles.reverse}`}>
          <div className={styles.imageCol}>
            {/* Placeholder for "Startup Pod banner img" */}
            <div className={styles.placeholderImage}>
              <div className={styles.overlay}></div>
              <img src={assetPath('/startup_pod_custom.jpg')} alt="Startup Pod" />
            </div>
          </div>
          
          <div className={styles.contentCol}>
            <div className={styles.headerRow}>
              <h3 className={styles.packageTitle}>Start-up Pod</h3>
              <div className={styles.priceTag}>USD 3,000</div>
            </div>
            
            <p className={styles.disclaimer}>*Price includes cost of Start-up Pod Package and a pre-built exhibition pod.</p>
            <button className={styles.buyBtn}>Buy now</button>
            
            <h4 className={styles.benefitsTitle}>Package Benefits</h4>
            
            <div className={styles.benefitBlock}>
              <div className={styles.benefitHeader}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
                <h5>Exhibition Space: 2sqm</h5>
              </div>
              <ul className={styles.benefitList}>
                <li>Pre built exhibition booth</li>
              </ul>
            </div>
            
            <div className={styles.benefitBlock}>
              <div className={styles.benefitHeader}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V4h16v3"/><path d="M4 17v3h16v-3"/><path d="M4 12h16"/><path d="M4 7h16"/><path d="M4 17h16"/></svg>
                <h5>Tickets</h5>
              </div>
              <ul className={styles.benefitList}>
                <li>Conference Pass : 1</li>
                <li>Expo Pass : 2</li>
              </ul>
            </div>
            
            <div className={styles.benefitBlock}>
              <div className={styles.benefitHeader}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M12 8v4l3 3"/></svg>
                <h5>Branding</h5>
              </div>
              <ul className={styles.benefitList}>
                <li>Your company logo with a hyperlink to your website will appear on the event website.</li>
                <li>Your company logo will be branded on pre-event promotional materials and at-event materials including but not limited to: Event emailers and Post-event report.</li>
                <li>Event website to contain and maintain the same level of branding for up to 6 months after the event.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
