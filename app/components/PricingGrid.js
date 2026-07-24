"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './PricingGrid.module.css';

const passes = [
  { name: 'Expo Pass', priceOld: 'USD 199', price: 'FREE', cta: 'Apply now', disclaimer: '*Complimentary Expo Pass is not applicable to solution providers within the FinTech or financial services sectors.' },
  { name: 'Conference Pass', priceOld: 'USD 999', price: 'USD 599', cta: 'Buy tickets' },
  { name: 'VIP Pass', priceOld: 'USD 1,999', price: 'USD 1,299', cta: 'Buy tickets', highlight: true },
  { name: 'VIP Investor Pass', priceOld: 'USD 1,999', price: 'USD 1,299', cta: 'Buy tickets' }
];

const featuresList = [
  { name: 'Expo area', values: [true, true, true, true] },
  { name: 'Innovation stages', values: [true, true, true, true] },
  { name: 'Meet-up cafe', values: [true, true, true, true] },
  { name: 'Ignyte membership', values: [false, true, true, true] },
  { name: 'MoU ceremonies', values: [true, true, true, true] },
  { name: 'Post event report', values: [true, true, true, true] },
  { name: 'AI image gallery', values: [true, true, true, true] },
  { name: 'Mobile app general features', values: [true, true, true, true] },
  { name: 'Mobile app matchmaking and networking', values: [false, true, true, true] },
  { name: 'Whatsapp bot', values: [false, true, true, true] },
  { name: 'Networking drinks', values: [false, true, true, true] },
  { name: 'F&B vouchers', values: [false, false, true, true] },
  { name: 'VIP Lounge access', values: [false, false, true, true] },
  { name: 'Investor Lounge access', values: [false, false, false, true] },
  { name: '1-on-1 Investor matchmaking', values: [false, false, false, true] },
];

export default function PricingGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const tableRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the table is visible
    );

    if (tableRef.current) {
      observer.observe(tableRef.current);
    }

    return () => {
      if (tableRef.current) observer.unobserve(tableRef.current);
    };
  }, []);

  return (
    <section id="tickets" className={styles.pricingSection}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>Pick your pass</h2>
          <p className={styles.subtitle}>Your access to two days of global FinTech dialogue</p>
        </div>

        <div className={styles.tableWrapper} ref={tableRef}>
          <table className={`${styles.pricingTable} ${isVisible ? styles.shutterOpen : ''}`}>
            <thead>
              <tr>
                <th className={styles.featureHeader}></th>
                {passes.map((pass, idx) => (
                  <th key={idx} className={`${styles.tierHeader} ${pass.highlight ? styles.highlight : ''}`}>
                    {pass.highlight && <div className={styles.popularBadge}>Most Popular</div>}
                    <div className={styles.tierCard}>
                      <h3 className={styles.tierName}>{pass.name}</h3>
                      <div className={styles.priceContainer}>
                        <span className={styles.priceCurrent}>{pass.price}</span>
                        {pass.priceOld && <span className={styles.priceOriginal}>{pass.priceOld}</span>}
                      </div>
                      <button className={styles.ctaBtn}>{pass.cta}</button>
                      {pass.disclaimer && <p className={styles.disclaimer}>{pass.disclaimer}</p>}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featuresList.map((feature, rowIndex) => (
                <tr key={rowIndex} className={styles.featureRow}>
                  <td className={styles.featureName}>{feature.name}</td>
                  {feature.values.map((hasFeature, colIndex) => (
                    <td key={colIndex} className={`${styles.featureCell} ${passes[colIndex].highlight ? styles.highlightCol : ''}`}>
                      {hasFeature ? (
                        <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      ) : (
                        <svg className={styles.crossIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
