import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Agenda | Dubai FinTech Summit',
  description: 'Explore the full schedule and agenda for Dubai Future Finance Week.',
};

async function getKonfHubData() {
  try {
    const res = await fetch('https://dubaifintechsummit.com/agenda/', { next: { revalidate: 3600 } });
    const html = await res.text();
    
    // Extract JSON data
    const jsonMatch = html.match(/<script type="application\/json" id="agenda-json-data">([\s\S]*?)<\/script>/);
    const jsonData = jsonMatch ? jsonMatch[1] : '{}';

    return { jsonData };
  } catch (error) {
    console.error("Error fetching KonfHub agenda data:", error);
    return { jsonData: '{}' };
  }
}

export default async function AgendaPage() {
  const { jsonData } = await getKonfHubData();

  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Summit <span className={styles.textGradient}>Agenda</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Plan your week. Discover the sessions, workshops, and keynotes shaping the financial ecosystem.
          </p>
        </div>
      </section>

      <section className={styles.konfhubSection}>
        <div className={styles.container}>
          {/* Inject KonfHub JSON Data */}
          <script
            type="application/json"
            id="agenda-json-data"
            dangerouslySetInnerHTML={{ __html: jsonData }}
          />

          {/* KonfHub Agenda Wrapper */}
          <div className="konfhub-agenda-wrap" data-event-slug="dubai-future-finance-week-2026" data-event-id=""></div>

          {/* Load KonfHub Script */}
          <script src="https://dubaifintechsummit.com/wp-content/plugins/konfhub-agenda-1-4-4-partner-1/assets/agenda.js" async />
        </div>
      </section>

      <Footer />
    </main>
  );
}
