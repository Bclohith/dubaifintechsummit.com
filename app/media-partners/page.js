"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EntityGrid from '../components/EntityGrid';

export default function MediaPartnersPage() {
  return (
    <>
      <Navbar />
      <EntityGrid 
        title="Media Partners" 
        subtitle="Our global media partners bringing the Summit to the world." 
        type="2" // Type 2 for association/media partners
      />
      <Footer />
    </>
  );
}
