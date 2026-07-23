'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Finance3DCanvas from '../components/Finance3DCanvas';
import styles from './page.module.css';

export default function DubaiFutureFinanceWeekPage() {
  return (
    <main className={styles.main}>
      <Finance3DCanvas />
      <Navbar />

      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Finance Reimagined</h1>
          <h2 className={styles.heroSubtitle}>Where innovation meets policy and purpose</h2>
          <p className={styles.heroSubtext}>
            Under the directives of H.H. Sheikh Maktoum bin Mohammed bin Rashid Al Maktoum,<br/>
            Deputy Ruler of Dubai, Deputy Prime Minister and Minister of Finance UAE, and President of DIFC
          </p>
        </div>
      </section>

      {/* 2. Global Impact Stats */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>40,000+</div>
              <div className={styles.statLabel}>Global attendees</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>1,000+</div>
              <div className={styles.statLabel}>International speakers</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>1,000+</div>
              <div className={styles.statLabel}>Sponsors and exhibitors</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Global events</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>120</div>
              <div className={styles.statLabel}>Countries represented</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Governor Message */}
      <section className={styles.messageSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>A message from the Governor</h2>
          <div className={styles.messageGrid}>
            <div className={styles.messageImageWrapper}>
              <img src="https://dubaifintechsummit.com/wp-content/uploads/2026/03/H-E-ESSA-KAZIM-new-img.webp" alt="H.E. Essa Kazim" className={styles.messageImage} />
            </div>
            <div className={styles.messageContent}>
              <div className={styles.quoteMark}>"</div>
              <h3 className={styles.messageQuote}>
                Dubai Future Finance Week is where global leaders and innovators unite to shape the future of finance, reflecting our commitment to innovation, trust, and opportunity.
              </h3>
              <p className={styles.messageFooter}>Governor, DIFC, UAE</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Overview (Bento Box) */}
      <section className={styles.strategySection}>
        <div className={styles.container}>
          <div className={styles.strategyGrid}>
            
            <div className={`${styles.strategyCard} ${styles.fullWidth}`}>
              <h2 className={styles.sectionTitle} style={{marginBottom: '2rem'}}>Shaping the next era of global finance</h2>
              <p>
                Dubai Future Finance Week is a landmark initiative organised by DIFC to convene global financial leaders, innovators, regulators, and investors. Anchored by Dubai FinTech Summit, the week features a curated series of events that explore the future of finance across technology, capital, sustainability, and governance.
              </p>
            </div>

            <div className={styles.strategyCard}>
              <h2 className={styles.sectionTitle} style={{marginBottom: '2rem'}}>Theme</h2>
              <h3>Finance Reimagined</h3>
              <p>Where innovation meets policy and purpose.</p>
            </div>

            <div className={styles.strategyCard}>
              <h2 className={styles.sectionTitle} style={{marginBottom: '2rem'}}>Vision</h2>
              <p>
                To position Dubai as the global benchmark for shaping the future of finance through collaboration, innovation, and strategic dialogue.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Objectives */}
      <section className={styles.objectivesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Objectives</h2>
          <div className={styles.objectivesGrid}>
            
            <div className={styles.objectiveCard}>
              <div className={styles.objectiveIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <p className={styles.objectiveText}>Showcase Dubai’s leadership in financial innovation and policy.</p>
            </div>

            <div className={styles.objectiveCard}>
              <div className={styles.objectiveIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <p className={styles.objectiveText}>Facilitate cross-sector and cross-border collaboration.</p>
            </div>

            <div className={styles.objectiveCard}>
              <div className={styles.objectiveIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <p className={styles.objectiveText}>Drive meaningful conversations around regulation, investment, and impact.</p>
            </div>

            <div className={styles.objectiveCard}>
              <div className={styles.objectiveIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <p className={styles.objectiveText}>Support the growth of emerging financial technologies and ecosystems.</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
