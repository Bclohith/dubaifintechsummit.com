import EntityGrid from '../../components/EntityGrid';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Exhibitors - Dubai FinTech Summit',
  description: 'Our Exhibitors',
};

export default function ExhibitorsPage() {
  return (
    <>
      <Navbar />
      <EntityGrid 
        title="Our Exhibitors" 
        subtitle="Discover groundbreaking technologies and next-generation financial solutions in our world-class exhibition space." 
        type="3" 
      />
      <Footer />
    </>
  );
}
