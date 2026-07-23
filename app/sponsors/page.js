import EntityGrid from '../components/EntityGrid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Sponsors - Dubai FinTech Summit',
  description: 'Our Sponsors & Partners',
};

export default function SponsorsPage() {
  return (
    <>
      <Navbar />
      <EntityGrid 
        title="Our Sponsors" 
        subtitle="The visionaries and market leaders fueling the future of global finance." 
        type="1" 
      />
      <Footer />
    </>
  );
}
