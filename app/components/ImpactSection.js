'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ImpactSection.module.css';

const statsConfig = [
  { target: 10000, label: 'Business leaders', prefix: '', suffix: '+' },
  { target: 1000, label: 'Investors', prefix: '', suffix: '+' },
  { target: 300, label: 'Speakers', prefix: '', suffix: '+' },
  { target: 120, label: 'Countries', prefix: '', suffix: '+' },
  { target: 200, label: 'Exhibitors & partners', prefix: '', suffix: '+' },
];

function Counter({ target, duration = 2000, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = target;
    const totalTicks = 60;
    const stepTime = duration / totalTicks;
    let currentTick = 0;

    const timer = setInterval(() => {
      currentTick++;
      const progress = currentTick / totalTicks;
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.round(start + (end - start) * easeProgress);

      if (currentTick >= totalTicks) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(currentVal);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return (
    <span ref={elementRef} className={styles.counterNum}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={styles.section} id="impact">
      
      {/* Full-width container split screen */}
      <div className={styles.splitGrid}>
        
        {/* Left Half: Embedded High-Impact Video Stage */}
        <div className={styles.videoStage}>
          {!isPlaying ? (
            <div className={styles.videoWrapper} onClick={() => setIsPlaying(true)}>
              <div className={styles.videoBackdropGlow} />
              
              {/* High-quality poster frame */}
              <div className={styles.posterContainer}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://img.youtube.com/vi/gWajWdoPDSA/maxresdefault.jpg" 
                  alt="DFS Video Highlights" 
                  className={styles.posterImage}
                />
              </div>

              {/* Minimal Tech Play Button */}
              <div className={styles.playInterface}>
                <div className={styles.pulseRing} />
                <div className={styles.playCircle}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.playIcon}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className={styles.playActionText}>Watch Summit Highlights</span>
              </div>

              <div className={styles.cornerLabel}>DFS LIVE HIGHLIGHTS</div>
            </div>
          ) : (
            <div className={styles.iframeStage}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/gWajWdoPDSA?autoplay=1&rel=0&modestbranding=1"
                title="DFS Highlights Reel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.embedIframe}
              ></iframe>
            </div>
          )}
        </div>

        {/* Right Half: Ultra-premium Stat dashboard */}
        <div className={styles.metricsStage}>
          <div className={styles.stageOverlay}></div>
          <div className={styles.metricsContent}>
            
            <div className={styles.header}>
              <span className={styles.preHeader}>GLOBAL BENCHMARK</span>
              <h2 className={styles.title}>Impact at a glance</h2>
              <p className={styles.subtitle}>
                Quantifying the reach of our landmark fourth edition.
              </p>
            </div>

            {/* Premium minimal numeric metric dashboard */}
            <div className={styles.metricGrid}>
              {statsConfig.map((stat, idx) => (
                <div key={idx} className={styles.metricItem}>
                  <div className={styles.metricTop}>
                    <Counter target={stat.target} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <div className={styles.metricBottom}>
                    <span className={styles.metricLabel}>{stat.label}</span>
                  </div>
                  <div className={styles.glowTrack} />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
