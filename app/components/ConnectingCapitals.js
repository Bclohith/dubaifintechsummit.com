'use client';
import { assetPath } from '../utils/assetPath';


import { useEffect, useState, useRef } from 'react';
import styles from './ConnectingCapitals.module.css';

export default function ConnectingCapitals() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);
  const mapRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e) => {
    if (!mapRef.current) return;
    const rect = mapRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section ref={sectionRef} className={styles.section} id="connecting-capitals">
      
      {/* Background Ambience */}
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        <div className={styles.splitLayout}>
          
          {/* Left Block: Narrative content */}
          <div className={`${styles.infoBlock} ${mounted ? styles.revealLeft : ''}`}>
            <span className={styles.tagline}>GLOBAL CONVERGENCE</span>
            <h2 className={styles.title}>
              Connecting the world’s <br />
              <span className={styles.cyanGradient}>financial capitals</span>
            </h2>
            <div className={styles.titleLine} />
            <p className={styles.description}>
              From Wall Street to the City of London, and from Silicon Valley to Singapore—
              the greatest minds and capital allocators converge in Dubai to shape the next era of global finance.
            </p>
          </div>

          {/* Right Block: Interactive Radar Map */}
          <div 
            className={`${styles.mapStage} ${mounted ? styles.revealRight : ''}`}
            ref={mapRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className={styles.mapFrame}>
              {/* Corner Brackets */}
              <div className={styles.bracketTopLeft} />
              <div className={styles.bracketTopRight} />
              <div className={styles.bracketBottomLeft} />
              <div className={styles.bracketBottomRight} />
              
              <div className={styles.mapImageWrapper}>
                <img 
                  src={assetPath('/world_map_with_cities.jpg')} 
                  alt="Global Convergence Map" 
                  className={styles.mapImage}
                />
                
                {/* Interactive Radar Overlay */}
                <div 
                  className={`${styles.radarOverlay} ${isHovering ? styles.radarActive : ''}`}
                  style={{
                    left: `${mousePos.x}%`,
                    top: `${mousePos.y}%`
                  }}
                >
                  <div className={styles.radarRing1}></div>
                  <div className={styles.radarRing2}></div>
                  <div className={styles.radarCrosshairX}></div>
                  <div className={styles.radarCrosshairY}></div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
