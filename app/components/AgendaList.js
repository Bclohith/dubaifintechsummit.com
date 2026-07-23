"use client";

import React, { useState, useEffect } from 'react';
import styles from '../agenda/AgendaPage.module.css';

export default function AgendaList() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeDay, setActiveDay] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAgenda = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch('/data/agenda.json');
        
        if (!res.ok) {
          throw new Error('Failed to load agenda data');
        }

        const data = await res.json();

        if (data && Array.isArray(data)) {
          // The KonfHub API groups sessions by tracks, so we need to flatten them
          let allSessions = [];
          data.forEach((track, trackIndex) => {
            if (track.sessions) {
              track.sessions.forEach(session => {
                allSessions.push({
                  id: session.session_id,
                  day: trackIndex + 1,
                  time: `${new Date(session.start_timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - ${new Date(session.end_timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`,
                  title: session.session_title,
                  location: session.session_location || track.track_title || 'Main Stage',
                  speaker: session.session_speakers && session.session_speakers.length > 0 
                    ? { name: session.session_speakers[0].name, title: session.session_speakers[0].designation } 
                    : null
                });
              });
            }
          });
          setSessions(allSessions);
        }
      } catch (err) {
        console.warn('KonfHub API Error (Fallback to mock data):', err.message);
        setError(true);
        // Fallback Mock Data
        setTimeout(() => {
          const mockAgenda = [
            {
              id: 1, day: 1, time: '09:00 AM - 09:30 AM',
              title: 'Welcome Address & Opening Keynote',
              location: 'Main Plenary Stage, Dubai World Trade Centre',
              speaker: { name: 'H.E. Essa Kazim', title: 'Governor, DIFC' }
            },
            {
              id: 2, day: 1, time: '09:30 AM - 10:15 AM',
              title: 'The Future of Borderless Finance',
              location: 'Innovation Track A',
              speaker: { name: 'Arif Amiri', title: 'CEO, DIFC Authority' }
            },
            {
              id: 3, day: 1, time: '10:45 AM - 11:30 AM',
              title: 'Panel: Regulating AI in Banking',
              location: 'Main Plenary Stage, Dubai World Trade Centre',
              speaker: null
            },
            {
              id: 4, day: 2, time: '10:00 AM - 10:45 AM',
              title: 'Digital Assets and the Tokenized Economy',
              location: 'Stage B',
              speaker: { name: 'Ryan Breslow', title: 'Founder, Bolt' }
            }
          ];
          setSessions(mockAgenda);
        }, 500);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };

    fetchAgenda();
  }, []);

  const filteredSessions = sessions.filter(s => s.day === activeDay);

  return (
    <>
      <div className={styles.tabContainer}>
        <button 
          className={`${styles.tabBtn} ${activeDay === 1 ? styles.active : ''}`}
          onClick={() => setActiveDay(1)}
        >
          Day 1
        </button>
        <button 
          className={`${styles.tabBtn} ${activeDay === 2 ? styles.active : ''}`}
          onClick={() => setActiveDay(2)}
        >
          Day 2
        </button>
      </div>

      <div className={styles.container}>
        {error && (
          <div style={{ padding: '15px', background: 'rgba(255, 50, 50, 0.1)', color: '#ff6b6b', borderRadius: '8px', marginBottom: '30px', textAlign: 'center', border: '1px solid rgba(255,50,50,0.3)' }}>
            <strong>Displaying Mock Data:</strong> Could not load Agenda data.
          </div>
        )}
        
        {loading ? (
          <div className={styles.loader}>
            <div className={styles.spinner}></div>
            <p>Loading Agenda from KonfHub...</p>
          </div>
        ) : (
          <div className={styles.timeline}>
            {filteredSessions.map((session, index) => (
              <div key={session.id} className={styles.sessionCard}>
                
                {/* Timeline node */}
                <div className={styles.timelineNode}></div>
                
                <div className={styles.sessionTimeWrap}>
                  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span className={styles.sessionTime}>{session.time}</span>
                </div>

                <div className={styles.sessionContent}>
                  <h3 className={styles.sessionTitle}>{session.title}</h3>
                  
                  <div className={styles.sessionMeta}>
                    <div className={styles.metaItem}>
                      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>{session.location}</span>
                    </div>
                  </div>
                  
                  {session.speaker && (
                    <div className={styles.speakerWrap}>
                      <div className={styles.speakerAvatar}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div className={styles.speakerDetails}>
                        <span className={styles.sName}>{session.speaker.name}</span>
                        <span className={styles.sTitle}>{session.speaker.title}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {filteredSessions.length === 0 && (
              <div className={styles.emptyState}>No sessions scheduled for this day yet.</div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
