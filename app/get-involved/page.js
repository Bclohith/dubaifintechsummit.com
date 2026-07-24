import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Finance3DCanvas from '../components/Finance3DCanvas';
import PricingGrid from '../components/PricingGrid';
import SponsorshipSection from '../components/SponsorshipSection';
import ExhibitorPackages from '../components/ExhibitorPackages';
import TakeTheStage from '../components/TakeTheStage';
import styles from './page.module.css';

export const metadata = {
  title: 'Get Involved | Dubai FinTech Summit',
  description: 'Buy a pass, become a sponsor, or apply to speak at the Dubai FinTech Summit.',
};

export default function GetInvolved() {
  return (
    <main className={styles.main}>
      <Finance3DCanvas />
      <Navbar />
      
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Get Involved</h1>
        <p className={styles.heroSubtitle}>Join the global dialogue shaping the future of finance.</p>
      </div>

      <PricingGrid />
      <SponsorshipSection />
      <ExhibitorPackages />
      <TakeTheStage />
      
      <Footer />
    </main>
  );
}
