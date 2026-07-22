'use client';

import { useEffect, useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Branding Partner Row */}
        <div className={styles.brandRow}>
          <div className={styles.brandCol}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/dubaifintechsummit.com/" alt="Dubai Fintech Summit" className={styles.brandLogo} />
          </div>
          <div className={styles.dividerSlash} />
          <div className={styles.brandCol}>
            <span className={styles.logoLabel}>Organised by</span>
            {/* White pill badge so the DIFC logo is visible on the dark footer */}
            <div className={styles.difcPill}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/dubaifintechsummit.com/" alt="DIFC" className={styles.brandLogoDifc} />
            </div>
          </div>
          <div className={styles.dividerSlash} />
          <div className={styles.brandCol}>
            <span className={styles.logoLabel}>Part of</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/dubaifintechsummit.com/" alt="Dubai Future Finance Week" className={styles.brandLogoFuture} />
          </div>
          <div className={styles.dividerSlash} />
          <div className={styles.brandCol}>
            <span className={styles.logoLabel}>Managed by</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/dubaifintechsummit.com/" alt="Trescon" className={styles.brandLogoTrescon} />
          </div>
        </div>

        {/* Footer Navigation Links Block */}
        <div className={styles.linkGrid}>
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>ABOUT</h4>
            <ul className={styles.linkList}>
              <li><a href="#about">DFS</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>ENQUIRE</h4>
            <ul className={styles.linkList}>
              <li><a href="#media">Media partnership</a></li>
              <li><a href="#sponsorship">Sponsorship</a></li>
              <li><a href="#affiliate">Become an affiliate</a></li>
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>TERMS AND CONDITIONS</h4>
            <ul className={styles.linkList}>
              <li><a href="#cookie">Cookie policy</a></li>
              <li><a href="#privacy">Privacy policy</a></li>
              <li><a href="#terms">General terms and conditions</a></li>
            </ul>
          </div>

          <div className={styles.newsletterCol}>
            <h4 className={styles.colTitle}>STAY UP TO DATE WITH US</h4>
            <div className={styles.inputWrap}>
              <input type="email" placeholder="Email address" className={styles.emailInput} />
              <button aria-label="Submit email" className={styles.submitBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>Copyright ©2026 DIFC, All Rights Reserved.</p>
          
          <div className={styles.socials}>
            <a href="#x" aria-label="X (Twitter)" className={styles.socialLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
            <a href="#youtube" aria-label="YouTube" className={styles.socialLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2c.46-1.71.46-5.33.46-5.33s0-3.62-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
              </svg>
            </a>
            <a href="#facebook" aria-label="Facebook" className={styles.socialLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#instagram" aria-label="Instagram" className={styles.socialLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className={styles.socialLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Floating Scroll up CTA */}
      <button 
        onClick={scrollToTop} 
        className={`${styles.scrollTopBtn} ${showScroll ? styles.visible : ''}`}
        aria-label="Scroll to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>

    </footer>
  );
}
