"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EntityGrid from '../components/EntityGrid';

export default function AssociationsPage() {
  return (
    <>
      <Navbar />
      <EntityGrid 
        title="Association Partners" 
        subtitle="Organizations and associations driving the future of finance alongside us." 
        type="2" // Type 2 for association/media partners
      />
      <Footer />
    </>
  );
}
