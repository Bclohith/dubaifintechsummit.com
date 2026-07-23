"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EntityGrid from '../components/EntityGrid';

export default function ExhibitorsPage() {
  return (
    <>
      <Navbar />
      <EntityGrid 
        title="Our Exhibitors" 
        subtitle="Discover the cutting-edge companies showcasing their latest solutions." 
        type="1" // Type 1 for exhibitors based on WP shortcode entity="1"
      />
      <Footer />
    </>
  );
}
