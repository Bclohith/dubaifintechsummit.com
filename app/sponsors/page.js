"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EntityGrid from '../components/EntityGrid';

export default function SponsorsPage() {
  return (
    <>
      <Navbar />
      <EntityGrid 
        title="Our Sponsors & Partners" 
        subtitle="Meet the global leaders and innovators supporting the Dubai FinTech Summit 2026." 
        type="3" // Type 3 for sponsors/partners based on WP shortcode entity="3"
      />
      <Footer />
    </>
  );
}
