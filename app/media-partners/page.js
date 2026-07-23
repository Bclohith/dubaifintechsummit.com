import EntityGrid from '../../components/EntityGrid';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Media Partners - Dubai FinTech Summit',
  description: 'Our Media Partners',
};

export default function MediaPartnersPage() {
  return (
    <>
      <Navbar />
      <EntityGrid 
        title="Media Partners" 
        subtitle="The voices amplifying our message across the globe." 
        type="media" 
      />
      <Footer />
    </>
  );
}
