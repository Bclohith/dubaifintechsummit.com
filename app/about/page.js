'use client';

import { assetPath } from '../utils/assetPath';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Finance3DCanvas from '../components/Finance3DCanvas';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <Finance3DCanvas />
      <Navbar />

      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>About Dubai FinTech Summit</h1>
        </div>
      </section>

      {/* 2. Connecting Ideas Section */}
      <section className={`${styles.section} ${styles.connectingSection}`}>
        <div className={styles.container}>
          <div className={styles.connectingGrid}>
            <div className={styles.connectingText}>
              <h2 className={styles.sectionTitle}>Connecting ideas, markets,<br/>and opportunities</h2>
              <p>Dubai FinTech Summit stands as one of the world's most influential platforms for financial innovation.</p>
              <p>Hosted in Dubai, the event brings global leaders, regulators, investors, and pioneering FinTechs together to examine what's next for finance and how the industry will evolve through new technology, policy, and collaboration.</p>
              <p>As the fourth edition arrives in 2026, the Summit continues to strengthen Dubai's role as a global financial hub – connecting ideas, markets, and opportunities across continents. With a strong focus on real-world outcomes, DFS convenes the people and institutions shaping the direction of banking, payments, digital assets, and financial inclusion. Designed for decision-makers, the Summit offers a space where strategic conversations meet actionable insights, enabling partnerships that influence global finance.</p>
            </div>
            <div className={styles.connectingCollage}>
              <div className={styles.collageImgWrapper}>
                <img src={assetPath('/connected-world.webp')} alt="Speaker" className={styles.collageImg} />
              </div>
              <div className={styles.collageImgWrapper}>
                <img src={assetPath('/technology-enterprises.webp')} alt="Networking" className={styles.collageImg} />
              </div>
              <div className={styles.collageImgWrapper}>
                <img src={assetPath('/technology-enterprises.webp')} alt="VR" className={styles.collageImg} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. D33 Banner */}
      <section className={`${styles.section} ${styles.d33Banner}`}>
        <div className={styles.container}>
          <p>The Summit aligns with the Dubai Economic Agenda D33's strategic goal of propelling Dubai into the ranks of the top four global financial hubs by 2033</p>
        </div>
      </section>

      {/* 4. Future Finance Week */}
      <section className={`${styles.section} ${styles.dffwSection}`}>
        <div className={styles.container}>
          <div className={styles.dffwCard}>
            <h4>Part of</h4>
            <h2>DUBAI <span style={{fontWeight: 800}}>FUTURE FINANCE</span> WEEK</h2>
            <p>Dubai FinTech Summit this year is part of Dubai Future Finance Week. It's a landmark initiative organised by DIFC to convene global financial leaders, innovators, regulators, and investors. Anchored by Dubai FinTech Summit, the week features a curated series of events that explore the future of finance across technology, capital, sustainability, and governance.</p>
          </div>
        </div>
      </section>

      {/* 5. Strategic Themes */}
      <section className={`${styles.section} ${styles.themesSection}`}>
        <div className={styles.container}>
          <h2 className={styles.themesTitle}>Strategic themes</h2>
          <div className={styles.themesGrid}>
            <div className={styles.themeCard}>
              <img src={assetPath('/connected-world.webp')} alt="Insurance" className={styles.themeImage} />
              <div className={styles.themeContent}>
                <h3>Insurance and risk</h3>
              </div>
            </div>
            <div className={styles.themeCard}>
              <img src={assetPath('/technology-enterprises.webp')} alt="Digital assets" className={styles.themeImage} />
              <div className={styles.themeContent}>
                <h3>Digital assets and tokenisation</h3>
              </div>
            </div>
            <div className={styles.themeCard}>
              <img src={assetPath('/connected-world.webp')} alt="Payments" className={styles.themeImage} />
              <div className={styles.themeContent}>
                <h3>Payments, cross-border corridors and embedded finance</h3>
              </div>
            </div>
            <div className={styles.themeCard}>
              <img src={assetPath('/technology-enterprises.webp')} alt="Startup" className={styles.themeImage} />
              <div className={styles.themeContent}>
                <h3>Start-up and investor marketplace</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Global Representation & Industry sectors */}
      <section className={`${styles.section} ${styles.sectorsSection}`}>
        <div className={styles.container}>
          <h2 className={styles.globalTitle}>Global representation</h2>
          <p className={styles.globalText}>An international community of finance leaders meets in Dubai, representing diverse markets and institutions shaping what comes next.</p>
          
          <h2 className={styles.sectorsTitle}>Industry sectors represented</h2>
          <div className={styles.sectorsGrid}>
            <div className={styles.sectorBadge}>Corporate and commercial banking</div>
            <div className={styles.sectorBadge}>Private banking and wealth management</div>
            <div className={styles.sectorBadge}>Digital / neo banks</div>
            <div className={styles.sectorBadge}>Islamic banking</div>
            <div className={styles.sectorBadge}>Capital markets</div>
            <div className={styles.sectorBadge}>Real estate / property management</div>
            <div className={styles.sectorBadge}>Utilities</div>
            <div className={styles.sectorBadge}>Retail and consumer brands</div>
            <div className={styles.sectorBadge}>Travel, airlines and hospitality</div>
            <div className={styles.sectorBadge}>Remittance / FX / exchange houses</div>
          </div>
        </div>
      </section>

      {/* 7. FinTech Leaders */}
      <section className={`${styles.section} ${styles.leadersSection}`}>
        <div className={styles.container}>
          <h2 className={styles.leadersTitle}>FinTech leaders in attendance</h2>
          <div className={styles.leadersGrid}>
            <div className={styles.leaderCard}>
              <img src={assetPath('/connected-world.webp')} className={styles.leaderImage} alt="Leaders"/>
              <div className={styles.leaderLabel}>Global FinTech leaders and innovators</div>
            </div>
            <div className={styles.leaderCard}>
              <img src={assetPath('/technology-enterprises.webp')} className={styles.leaderImage} alt="Institutions"/>
              <div className={styles.leaderLabel}>Financial institutions</div>
            </div>
            <div className={styles.leaderCard}>
              <img src={assetPath('/connected-world.webp')} className={styles.leaderImage} alt="Tech"/>
              <div className={styles.leaderLabel}>Technology and data experts</div>
            </div>
            <div className={styles.leaderCard}>
              <img src={assetPath('/technology-enterprises.webp')} className={styles.leaderImage} alt="Investors"/>
              <div className={styles.leaderLabel}>Investors and capital providers</div>
            </div>
            <div className={styles.leaderCard}>
              <img src={assetPath('/connected-world.webp')} className={styles.leaderImage} alt="Policymakers"/>
              <div className={styles.leaderLabel}>Policymakers and regulators</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. The Dubai FinTech Summit Experience */}
      <section className={`${styles.section} ${styles.experienceSection}`}>
        <div className={styles.container}>
          <div className={styles.expHeader}>
            <h2 className={styles.leadersTitle} style={{textAlign: 'left', marginBottom: 0}}>The Dubai FinTech<br/>Summit experience</h2>
            <p>A unified platform bringing strategic dialogue, breakthrough innovation, and global FinTech talent together in one world-class experience.</p>
          </div>
          <div className={styles.expGrid}>
            <div>
              <div className={styles.expAccordionItem}>
                <div>
                  <div className={styles.expAccordionTitle}>Extended programme – strategic dialogue, global impact</div>
                  <p className={styles.expAccordionText}>Engage with global leaders and senior decision-makers across finance, technology, and policy. Each session delivers actionable insights on emerging trends, regulatory evolution, and market-shaping innovations. The extended programme is where influence meets opportunity.</p>
                </div>
                <div className={styles.expAccordionIcon}>-</div>
              </div>
              <div className={styles.expAccordionItem}>
                <div className={styles.expAccordionTitle}>Exhibition Arena – the innovation showcase</div>
                <div className={styles.expAccordionIcon}>+</div>
              </div>
              <div className={styles.expAccordionItem}>
                <div className={styles.expAccordionTitle}>FinTech World Cup Grand Finale</div>
                <div className={styles.expAccordionIcon}>+</div>
              </div>
            </div>
            <div className={styles.expImageWrapper}>
              <img src={assetPath('/connected-world.webp')} className={styles.expImage} alt="Experience" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Stats 2025 Section */}
      <section className={`${styles.section} ${styles.statsSection}`}>
        <div className={styles.container}>
          <h2 className={styles.statsTitle}>Dubai FinTech Summit 2025</h2>
          <p className={styles.statsSubtitle}>A record-breaking year that set the stage for an even bigger 2026.</p>
          <a href="#" className={styles.reportBtn}>Download DFS 2025 Post Event Report &gt;</a>
          
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>9,200+</div>
              <div className={styles.statLabel}>Participants from 118 countries</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>1,000+</div>
              <div className={styles.statLabel}>Investors with over USD 4trn assets under management</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>300+</div>
              <div className={styles.statLabel}>Speakers across 125 sessions</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>200+</div>
              <div className={styles.statLabel}>Exhibitors showcasing innovation</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Voices Section */}
      <section className={`${styles.section} ${styles.voicesSection}`}>
        <div className={styles.container}>
          <h2 className={styles.voicesTitle}>Voices behind the impact</h2>
          <div className={styles.voicesGrid}>
            <div className={styles.voiceCard}>
              <img src={assetPath('/connected-world.webp')} className={styles.voiceImage} alt="Abdullah"/>
              <div className={styles.playIcon}></div>
              <div className={styles.voiceContent}>
                <div className={styles.voiceName}>Abdullah Alghadouni</div>
                <div className={styles.voiceRole}>COO & Co-Founder at UPFRONT</div>
              </div>
            </div>
            <div className={styles.voiceCard}>
              <img src={assetPath('/technology-enterprises.webp')} className={styles.voiceImage} alt="Amith"/>
              <div className={styles.playIcon}></div>
              <div className={styles.voiceContent}>
                <div className={styles.voiceName}>Amith Rajan</div>
                <div className={styles.voiceRole}>Head of Wholesale Digital Banking Mashreq</div>
              </div>
            </div>
            <div className={styles.voiceCard}>
              <img src={assetPath('/connected-world.webp')} className={styles.voiceImage} alt="Andrew"/>
              <div className={styles.playIcon}></div>
              <div className={styles.voiceContent}>
                <div className={styles.voiceName}>Andrew Reakes</div>
                <div className={styles.voiceRole}>Director Financial Services Industry Presight</div>
              </div>
            </div>
            <div className={styles.voiceCard}>
              <img src={assetPath('/technology-enterprises.webp')} className={styles.voiceImage} alt="Joseph"/>
              <div className={styles.playIcon}></div>
              <div className={styles.voiceContent}>
                <div className={styles.voiceName}>Joseph Ziolkowski</div>
                <div className={styles.voiceRole}>CEO and Founder Relm Insurance, Ltd.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
