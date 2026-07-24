'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CanvasBackground from '../components/CanvasBackground';
import { sponsorsData } from '../data/sponsors';

export default function MediaPartnersPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0a0f1d', color: '#fff', position: 'relative' }}>
      <Navbar />
      <CanvasBackground />
      
      <div style={{ position: 'relative', zIndex: 1, paddingTop: '160px', paddingBottom: '100px', maxWidth: '1400px', margin: '0 auto', padding: '160px 5% 100px' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: '800', textAlign: 'center', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px', background: 'linear-gradient(to right, #fff, #00e5e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Media Partners
        </h1>
        <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
          Recognized by leading global media organizations.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem 2rem', marginBottom: '5rem' }}>
          {sponsorsData.mediaPartners.slice(0, 12).map((tierGroup, idx) => (
            <section key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: '800', textAlign: 'center', marginBottom: '0.5rem', color: '#fff', minHeight: '3rem', display: 'flex', alignItems: 'center' }}>
                {tierGroup.tier}
              </h2>
              <div style={{ width: '40px', height: '3px', backgroundColor: '#00e5e5', marginBottom: '1.5rem' }} />
              
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', width: '100%' }}>
                {tierGroup.logos.map((url, i) => (
                  <div key={i} style={{ 
                    backgroundColor: '#ffffff', 
                    border: '1px solid rgba(0, 229, 229, 0.3)', 
                    borderRadius: '12px', 
                    padding: '1.5rem 2.5rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    minWidth: '220px', 
                    height: '110px', 
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                    onMouseOver={(e) => { 
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,229,229,0.2)'; 
                      e.currentTarget.style.transform = 'translateY(-5px)'; 
                      e.currentTarget.style.borderColor = '#00e5e5';
                    }}
                    onMouseOut={(e) => { 
                      e.currentTarget.style.boxShadow = 'none'; 
                      e.currentTarget.style.transform = 'translateY(0)'; 
                      e.currentTarget.style.borderColor = 'rgba(0, 229, 229, 0.3)';
                    }}
                  >
                    <img src={url} alt={`${tierGroup.tier} ${i + 1}`} style={{ maxWidth: '100%', maxHeight: '70px', objectFit: 'contain', transition: 'all 0.3s ease' }} />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {sponsorsData.mediaPartners.slice(12).map((tierGroup, idx) => (
          <section key={idx + 12} style={{ marginBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '0.5rem', color: '#fff' }}>
              {tierGroup.tier}
            </h2>
            <div style={{ width: '40px', height: '3px', backgroundColor: '#00e5e5', marginBottom: '2.5rem', margin: '0 auto 2.5rem' }} />
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', maxWidth: '1000px' }}>
              {tierGroup.logos.map((url, i) => (
                <div key={i} style={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid rgba(0, 229, 229, 0.3)', 
                  borderRadius: '12px', 
                  padding: '1.5rem 2.5rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  minWidth: '220px', 
                  height: '110px', 
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                  onMouseOver={(e) => { 
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,229,229,0.2)'; 
                    e.currentTarget.style.transform = 'translateY(-5px)'; 
                    e.currentTarget.style.borderColor = '#00e5e5';
                  }}
                  onMouseOut={(e) => { 
                    e.currentTarget.style.boxShadow = 'none'; 
                    e.currentTarget.style.transform = 'translateY(0)'; 
                    e.currentTarget.style.borderColor = 'rgba(0, 229, 229, 0.3)';
                  }}
                >
                  <img src={url} alt={`${tierGroup.tier} ${i + 1}`} style={{ maxWidth: '100%', maxHeight: '70px', objectFit: 'contain', transition: 'all 0.3s ease' }} />
                </div>
              ))}
            </div>
          </section>
        ))}

      </div>
      
      <Footer />
    </main>
  );
}
