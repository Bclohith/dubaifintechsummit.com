'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './NewsSection.module.css';
import { assetPath } from '../utils/assetPath';

const newsItems = [
  {
    quote: 'Phenomenal growth, dynamic conversations',
    publication: 'CNBC Arabia',
    tag: 'Featured',
    featured: true,
  },
  {
    quote: 'Visionary speakers, disruptive ideas, and transformative discussions that will shape the future of global finance.',
    publication: 'The Fintech Times',
    tag: 'Review',
  },
  {
    quote: 'A confluence point for introspection and inspiration — redefining what a FinTech summit can achieve.',
    publication: 'Entrepreneur Middle East',
    tag: 'Opinion',
  },
  {
    quote: 'More than 20 MoUs signed on Day 1! A record-breaking milestone for the summit.',
    publication: 'Khaleej Times',
    tag: 'Breaking',
  },
  {
    quote: 'FinTech industry in the spotlight — the world\'s brightest minds convene in Dubai.',
    publication: 'Gulf News',
    tag: 'Report',
  },
  {
    quote: 'A truly global platform for the world\'s FinTech community, delivering real impact.',
    publication: 'The Economic Times',
    tag: 'Analysis',
  },
];

const marqueeItems = [
  'CNBC Arabia', '·', 'The Fintech Times', '·', 'Entrepreneur Middle East', '·',
  'Khaleej Times', '·', 'Gulf News', '·', 'The Economic Times', '·',
  'Forbes Middle East', '·', 'Arabian Business', '·', 'Reuters', '·',
  'Bloomberg', '·', 'Financial Times', '·', 'CNBC Arabia',
];

const tagColors = {
  Featured: { bg: '#0b1d35', text: '#12e9e9' },
  Review:   { bg: '#f0f4ff', text: '#2d5be3' },
  Opinion:  { bg: '#fff7ed', text: '#d4660a' },
  Breaking: { bg: '#fef2f2', text: '#c0392b' },
  Report:   { bg: '#f0fdf4', text: '#166534' },
  Analysis: { bg: '#faf5ff', text: '#7c3aed' },
};

export default function NewsSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const featured = newsItems.find((n) => n.featured);
  const secondary = newsItems.filter((n) => !n.featured);

  return (
    <section ref={sectionRef} className={styles.section} id="news">

      {/* ── Section Header ── */}
      <div className={`${styles.header} ${visible ? styles.visible : ''}`}>
        <span className={styles.eyebrow}>Global Media Coverage</span>
        <h2 className={styles.title}>In the <em>news</em></h2>
        <p className={styles.subtitle}>
          Leading publications across the globe cover the Dubai FinTech Summit.
        </p>
      </div>

      <div className={styles.contentWrap}>

        {/* ── Left: Featured Hero Quote ── */}
        <div 
          className={`${styles.featuredCard} ${visible ? styles.visible : ''}`}
          style={{ backgroundImage: `url(${assetPath('/news_card_bg.jpg')})` }}
        >
          <div
            className={styles.tag}
            style={{ background: tagColors[featured.tag]?.bg, color: tagColors[featured.tag]?.text }}
          >
            {featured.tag}
          </div>
          <div className={styles.heroQuoteMark}>&ldquo;</div>
          <blockquote className={styles.heroQuote}>
            {featured.quote}
          </blockquote>
          <div className={styles.heroFooter}>
            <span className={styles.heroDash} />
            <span className={styles.heroPublication}>{featured.publication}</span>
          </div>

          {/* Decorative ink splash */}
          <div className={styles.inkSplash} />
        </div>

        {/* ── Right: 3×2 Grid ── */}
        <div className={styles.gridWrap}>
          {secondary.map((item, i) => (
            <div
              key={i}
              className={`${styles.card} ${visible ? styles.visible : ''}`}
              style={{ 
                transitionDelay: `${(i + 1) * 100}ms`,
                backgroundImage: `url(${assetPath('/news_card_bg.jpg')})`
              }}
            >
              <div
                className={styles.tag}
                style={{ background: tagColors[item.tag]?.bg, color: tagColors[item.tag]?.text }}
              >
                {item.tag}
              </div>

              <div className={styles.quoteMark}>&ldquo;</div>

              <p className={styles.cardQuote}>{item.quote}</p>

              <div className={styles.cardFooter}>
                <span className={styles.cardDash} />
                <span className={styles.cardPublication}>{item.publication}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Marquee Press Bar ── */}
      <div className={styles.marqueeWrap}>
        <span className={styles.marqueeLabel}>AS SEEN IN</span>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeInner}>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className={item === '·' ? styles.marqueeDot : styles.marqueeItem}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
