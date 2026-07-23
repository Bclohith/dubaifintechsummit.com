import { assetPath } from '../utils/assetPath';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Dubai Future Finance Week | Dubai FinTech Summit',
  description: 'A transformative week defining the future of global finance.',
};

export default function DFFWPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* Dynamic Background Elements */}
        <div className={styles.ambientLight} />
        <div className={styles.gridLayer} />
        
        <div className={styles.heroContent}>
          <div className={styles.logoWrapper}>
            <img 
              src={assetPath('/dubai-future-fintech-week-logo.svg')} 
              alt="Dubai Future Finance Week" 
              className={styles.heroLogo} 
            />
          </div>
          <h1 className={styles.heroTitle}>
            Where Finance Meets <br/>
            <span className={styles.textGradient}>The Future</span>
          </h1>
          <p className={styles.heroSubtitle}>
            A transformative week of exclusive events, workshops, and high-level networking driving the next era of global finance.
          </p>
        </div>
      </section>

      {/* Core Content Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          
          <div className={styles.introBlock}>
            <p className={styles.introText}>
              Dubai Future Finance Week is a landmark initiative organised by DIFC to convene global financial leaders, innovators, regulators, and investors. Anchored by Dubai FinTech Summit, the week features a curated series of events that explore the future of finance across technology, capital, sustainability, and governance.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            
            {/* Feature Card 1 */}
            <div className={styles.featureCard}>
              <div className={styles.cardGlow} />
              <div className={styles.cardImageWrapper}>
                <img src={assetPath('/connected-world.webp')} alt="Global Ecosystem" className={styles.cardImage} />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Global Ecosystem</h3>
                <p className={styles.cardText}>
                  Engage with a curated selection of international banks, innovative startups, and regulatory bodies shaping the global digital economy.
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className={styles.featureCard}>
              <div className={styles.cardGlow} />
              <div className={styles.cardImageWrapper}>
                <img src={assetPath('/fintechs.webp')} alt="Innovation Labs" className={styles.cardImage} />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Innovation Labs</h3>
                <p className={styles.cardText}>
                  Experience hands-on workshops and deep-dive sessions into Web3, AI in finance, and sustainable investment frameworks.
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className={styles.featureCard}>
              <div className={styles.cardGlow} />
              <div className={styles.cardImageWrapper}>
                <img src={assetPath('/bank-executives.webp')} alt="Executive Networking" className={styles.cardImage} />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Executive Networking</h3>
                <p className={styles.cardText}>
                  Exclusive access to closed-door roundtables and VIP networking events with industry titans and policymakers.
                </p>
              </div>
            </div>

          </div>

          {/* Interactive CTA Section */}
          <div className={styles.ctaSection}>
            <div className={styles.ctaInner}>
              <h2>Be Part of the Future</h2>
              <p>Join the movement that is transforming global economies.</p>
              <div className={styles.buttonGroup}>
                <a href="#register" className={styles.btnPrimary}>Register Interest</a>
                <a href="#partner" className={styles.btnOutline}>Become a Partner</a>
              </div>
            </div>
            
            {/* Abstract 3D elements inside CTA */}
            <div className={styles.shape1} />
            <div className={styles.shape2} />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
