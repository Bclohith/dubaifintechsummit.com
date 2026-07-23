import EntityGrid from '../../components/EntityGrid';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Associations - Dubai FinTech Summit',
  description: 'Our Association Partners',
};

export default function AssociationsPage() {
  return (
    <>
      <Navbar />
      <EntityGrid 
        title="Association Partners" 
        subtitle="Collaborating with industry bodies to build a borderless financial world." 
        type="association" 
      />
      <Footer />
    </>
  );
}
