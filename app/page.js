import Navbar from './components/Navbar';
import CanvasBackground from './components/CanvasBackground';
import HeroBanner from './components/HeroBanner';
import PatronSection from './components/PatronSection';
import AboutSection from './components/AboutSection';
import SpeakersSection from './components/SpeakersSection';
import CurationSection from './components/CurationSection';
import ConnectingCapitals from './components/ConnectingCapitals';
import PartnersSection from './components/PartnersSection';
import TopicsSection from './components/TopicsSection';
import StrategicInnovation from './components/StrategicInnovation';
import ImpactSection from './components/ImpactSection';
import ExhibitSection from './components/ExhibitSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <CanvasBackground />
      <Navbar />
      <HeroBanner />
      <PatronSection />
      <AboutSection />
      <SpeakersSection />
      <CurationSection />
      <ConnectingCapitals />
      <PartnersSection />
      <TopicsSection />
      <StrategicInnovation />
      <ImpactSection />
      <ExhibitSection />
      <NewsSection />
      <Footer />
    </main>
  );
}
