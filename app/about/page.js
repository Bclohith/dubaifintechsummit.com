import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'About | Dubai FinTech Summit',
  description: 'Connecting Markets - Transforming Economies',
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroGrid} />
        <div className={styles.heroGlow} />
        
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} /> ABOUT DFS
          </div>
          <h1 className={styles.heroTitle}>
            Connecting ideas, markets, <br/>
            <span className={styles.textGradient}>and opportunities</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Dubai FinTech Summit stands as one of the world's most influential platforms for financial innovation.
          </p>
        </div>

        {/* 3D Decorators */}
        <div className={styles.floatingCube1} />
        <div className={styles.floatingCube2} />
      </section>

      {/* Main Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          
          <div className={styles.missionGrid}>
            <div className={styles.missionContent}>
              <div className={styles.missionTextBlock}>
                <h2 className={styles.sectionTitle}>About Dubai FinTech Summit</h2>
                <p className={styles.missionText}>
                  Hosted in Dubai, the event brings global leaders, regulators, investors, and pioneering FinTechs together to examine what's next for finance and how the industry will evolve through new technology, policy, and collaboration.
                </p>
                <p className={styles.missionText}>
                  As the fourth edition arrives in 2026, the Summit continues to strengthen Dubai's role as a global financial hub – connecting ideas, markets, and opportunities across continents. With a strong focus on real-world outcomes, DFS convenes the people and institutions shaping the direction of banking, payments, digital assets, and financial inclusion. Designed for decision-makers, the Summit offers a space where strategic conversations meet actionable insights, enabling partnerships that influence global finance.
                </p>
              </div>
            
              <div className={styles.missionCards}>
                <div className={styles.glassCard}>
                  <div className={styles.cardImageWrapper}>
                    <img src="/dubaifintechsummit.com/connected-world.webp" alt="Insurance and risk" className={styles.cardImage} />
                    <div className={styles.imageOverlay} />
                  </div>
                  <div className={styles.cardTextContent}>
                    <h3>Insurance and risk</h3>
                    <p>Innovating protection for tomorrow</p>
                  </div>
                </div>
                <div className={styles.glassCard}>
                  <div className={styles.cardImageWrapper}>
                    <img src="/dubaifintechsummit.com/technology-enterprises.webp" alt="Digital assets and tokenisation" className={styles.cardImage} />
                    <div className={styles.imageOverlay} />
                  </div>
                  <div className={styles.cardTextContent}>
                    <h3>Digital assets and tokenisation</h3>
                    <p>Redefining value in digital form</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className={styles.visionSection}>
            <div className={styles.visionGlow} />
            <div className={styles.visionContent}>
              <h2 className={styles.visionTitle}>Our Vision</h2>
              <p className={styles.visionText}>
                To pioneer a cohesive, sustainable, and inclusive financial ecosystem. We bridge the gap between traditional banking and disruptive technology, fostering collaborations that empower economies and uplift societies globally.
              </p>
              
              <div className={styles.statsGrid}>
                <div className={styles.statBox}>
                  <div className={styles.statNumber}>8K+</div>
                  <div className={styles.statLabel}>Attendees</div>
                </div>
                <div className={styles.statBox}>
                  <div className={styles.statNumber}>100+</div>
                  <div className={styles.statLabel}>Countries</div>
                </div>
                <div className={styles.statBox}>
                  <div className={styles.statNumber}>300+</div>
                  <div className={styles.statLabel}>Speakers</div>
                </div>
                <div className={styles.statBox}>
                  <div className={styles.statNumber}>200+</div>
                  <div className={styles.statLabel}>Exhibitors</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
