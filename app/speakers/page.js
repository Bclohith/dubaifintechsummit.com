import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Speakers | Dubai FinTech Summit',
  description: 'Global experts and leaders at the Dubai FinTech Summit.',
};

async function getKonfHubData() {
  try {
    const res = await fetch('https://dubaifintechsummit.com/speakers/', { next: { revalidate: 3600 } });
    const html = await res.text();
    
    // Extract JSON data
    const jsonMatch = html.match(/<script type="application\/json" id="speakers-json-data">([\s\S]*?)<\/script>/);
    const jsonData = jsonMatch ? jsonMatch[1] : '{}';

    return { jsonData };
  } catch (error) {
    console.error("Error fetching KonfHub data:", error);
    return { jsonData: '{}' };
  }
}

export default async function SpeakersPage() {
  const { jsonData } = await getKonfHubData();

  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Global <span className={styles.textGradient}>Speakers</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Hear from the brightest minds shaping the future of finance.
          </p>
        </div>
      </section>

      <section className={styles.konfhubSection}>
        <div className={styles.container}>
          {/* Inject KonfHub JSON Data */}
          <script
            type="application/json"
            id="speakers-json-data"
            dangerouslySetInnerHTML={{ __html: jsonData }}
          />

          {/* KonfHub Speakers Wrapper */}
          <div className="konfhub-speakers-wrap" data-event-slug="dubai-future-finance-week-2026" data-event-id=""></div>

          {/* Load KonfHub Script */}
          <script src="https://dubaifintechsummit.com/wp-content/plugins/konfhub-agenda-1-4-4-partner-1/assets/agenda.js" async />
        </div>
      </section>

      <Footer />
    </main>
  );
}
