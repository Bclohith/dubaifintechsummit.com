"use client";

import { useEffect, useState, useRef } from 'react';
import styles from './TopicsSection.module.css';

const allTopics = [
  { id: '01', title: 'The future of FinTech: innovation driving global finance', desc: 'How AI, blockchain, and digital-first strategies are reshaping financial services.' },
  { id: '02', title: 'Financial inclusion in emerging markets', desc: 'Bridging gaps with WealthTech, embedded finance, and digital banking innovation.' },
  { id: '03', title: 'Digital assets and tokenisation: building trust at scale', desc: 'Mastering custody, blockchain infrastructure, and tokenised solutions in a fast-moving landscape.' },
  { id: '04', title: 'Crypto-assets: policy, regulation and legal frameworks', desc: 'Navigating compliance, adoption, and risk in the digital asset economy.' },
  { id: '05', title: 'The role of central banks in a sustainable, digital economy', desc: 'Navigating compliance, adoption, and risk in the digital asset economy.' },
  { id: '06', title: 'Digital banking and neobanks: scaling profitable models', desc: 'Monetisation strategies, customer acquisition, and sustainable growth at scale.' },
  { id: '07', title: 'The future of wealth management and private banking', desc: 'Intelligent, inclusive innovation transforming advisory, investment, and client experiences.' },
  { id: '08', title: 'Evolving global regulatory landscape', desc: 'RegTech, compliance innovation, and how regulation is enabling growth and trust.' },
  { id: '09', title: 'Early-stage start-ups and the new venture ecosystem', desc: 'Investor insights, capital trends, and what excites financiers in the next generation of ventures.' },
  { id: '10', title: 'Seamless payments across borders', desc: 'AI, biometrics, and digital infrastructure driving frictionless, secure, and global transactions.' },
  { id: '11', title: 'Embedded finance: redefining everyday transactions', desc: 'How financial services are becoming part of apps, commerce, and daily life.' },
  { id: '12', title: 'From chatbots to financial super-agents', desc: 'AI-driven solutions transforming customer experiences in core financial verticals.' },
  { id: '13', title: 'Trading and investment platforms of tomorrow', desc: 'Next-gen architecture, smart investing, and alternative asset management in a digital-first world.' },
  { id: '14', title: 'Asset management in a fragmented world', desc: 'How active and alternative managers are re-engineering returns across asset classes.' },
  { id: '15', title: 'Scaling FinTech for the global south', desc: 'Innovating beyond borders to deliver financial access, inclusion, and growth opportunities.' }
];

export default function TopicsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Split topics into two rows for the marquee
  const row1 = allTopics.slice(0, 8);
  const row2 = allTopics.slice(8);

  const HoverCanvas = ({ isHovered }) => {
    const canvasRef = useRef(null);
    const reqRef = useRef(null);

    useEffect(() => {
      if (!isHovered) {
        if (reqRef.current) cancelAnimationFrame(reqRef.current);
        return;
      }

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let width = canvas.width = canvas.offsetWidth;
      let height = canvas.height = canvas.offsetHeight;

      const particles = [];
      for(let i = 0; i < 25; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
        });
      }

      const draw = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(0, 229, 229, 0.5)';
        ctx.strokeStyle = 'rgba(0, 229, 229, 0.2)';
        ctx.lineWidth = 1;

        particles.forEach((p, i) => {
          p.x += p.vx;
          p.y += p.vy;
          if(p.x < 0 || p.x > width) p.vx *= -1;
          if(p.y < 0 || p.y > height) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
          ctx.fill();

          for(let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 80) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
        reqRef.current = requestAnimationFrame(draw);
      };
      
      draw();

      return () => {
        if (reqRef.current) cancelAnimationFrame(reqRef.current);
      };
    }, [isHovered]);

    return (
      <canvas 
        ref={canvasRef} 
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', 
          pointerEvents: 'none', zIndex: 0, opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.6s ease', borderRadius: 'inherit'
        }} 
      />
    );
  };

  const TopicCard = ({ topic }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className={styles.topicCard}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <HoverCanvas isHovered={isHovered} />
        <div className={styles.cardHeader}>
          <span className={styles.topicId}>{topic.id}</span>
          <div className={styles.pulseDot}></div>
        </div>
        <h3 className={styles.topicTitle}>{topic.title}</h3>
        <p className={styles.topicDesc}>{topic.desc}</p>
        <div className={styles.cardGlow}></div>
      </div>
    );
  };

  return (
    <section className={styles.section} id="topics" ref={sectionRef}>
      
      <div className={styles.ambientBackground}></div>

      {/* Header Block */}
      <div className={`${styles.headerContainer} ${isVisible ? styles.reveal : ''}`}>
        <span className={styles.eyebrow}>Core Themes</span>
        <h2 className={styles.title}>
          Discussion <span className={styles.cyanText}>Topics</span>
        </h2>
        <p className={styles.subtitle}>
          Explore the critical conversations defining the intersection of finance and technology at the 2026 summit.
        </p>
      </div>

      {/* Infinite Marquee Rows */}
      <div className={`${styles.marqueeWrapper} ${isVisible ? styles.revealMarquee : ''}`}>
        
        {/* Row 1 - Scrolls Left */}
        <div className={styles.marqueeRow}>
          <div className={styles.marqueeTrackLeft}>
            {/* Original */}
            {row1.map(topic => <TopicCard key={`r1-1-${topic.id}`} topic={topic} />)}
            {/* Duplicated for seamless loop */}
            {row1.map(topic => <TopicCard key={`r1-2-${topic.id}`} topic={topic} />)}
          </div>
        </div>

        {/* Row 2 - Scrolls Right */}
        <div className={styles.marqueeRow}>
          <div className={styles.marqueeTrackRight}>
            {/* Original */}
            {row2.map(topic => <TopicCard key={`r2-1-${topic.id}`} topic={topic} />)}
            {/* Duplicated for seamless loop */}
            {row2.map(topic => <TopicCard key={`r2-2-${topic.id}`} topic={topic} />)}
          </div>
        </div>

      </div>
    </section>
  );
}
