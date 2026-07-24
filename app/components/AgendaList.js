"use client";

import React, { useState, useEffect } from 'react';
import styles from '../agenda/AgendaPage.module.css';

export default function AgendaList() {
  const [days, setDays] = useState([]);
  const [sessionsByDay, setSessionsByDay] = useState({});
  const [activeDayDate, setActiveDayDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeStage, setActiveStage] = useState('All Stages');
  const [activeType, setActiveType] = useState('Session Type');
  const [activeTopic, setActiveTopic] = useState('Topics');

  useEffect(() => {
    const fetchAgenda = async () => {
      try {
        const eventId = "f133240e-1331-44f2-8d6e-6217b3b8984d";
        const response = await fetch(`https://api.konfhub.com/event/${eventId}/sessions?sessions_to_return=all`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const rawSessions = await response.json();
        const sessionsArray = Array.isArray(rawSessions) ? rawSessions : [];
        const grouped = {};
        
        sessionsArray.forEach(session => {
          if (!session.start_timestamp) return;
          const datePart = session.start_timestamp.split(' ')[0]; 
          
          // ONLY INCLUDE NOV 2 and NOV 3
          if (datePart.includes('-11-02') || datePart.includes('-11-03')) {
            if (!grouped[datePart]) {
              grouped[datePart] = [];
            }
            grouped[datePart].push(session);
          }
        });
        
        const uniqueDates = Object.keys(grouped).sort((a, b) => new Date(a) - new Date(b));
        
        uniqueDates.forEach(date => {
          grouped[date].sort((a, b) => new Date(a.start_timestamp) - new Date(b.start_timestamp));
        });
        
        setDays(uniqueDates);
        setSessionsByDay(grouped);
        
        if (uniqueDates.length > 0) {
          setActiveDayDate(uniqueDates[0]);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch agenda from KonfHub:", error);
        setLoading(false);
      }
    };

    fetchAgenda();
  }, []);

  // When changing days, reset the filters
  useEffect(() => {
    setActiveStage('All Stages');
    setActiveType('Session Type');
    setActiveTopic('Topics');
  }, [activeDayDate]);

  const formatDateStr = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }); // e.g. Nov 02
  };
  
  const formatTimeStr = (timestamp) => {
    if (!timestamp) return '';
    
    // KonfHub returns UTC strings like "2026-11-02 05:00:00". 
    // We append 'Z' to explicitly parse it as UTC.
    const isoString = timestamp.replace(' ', 'T') + 'Z';
    const d = new Date(isoString);
    
    if (isNaN(d.getTime())) return timestamp; // fallback
    
    // Format it explicitly to Dubai timezone (GMT+4)
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Dubai'
    }).format(d);
  };

  const activeSessions = activeDayDate && sessionsByDay[activeDayDate] ? sessionsByDay[activeDayDate] : [];
  
  // Define exact dropdown options based on Dubai FinTech Summit requirements
  const uniqueStages = ['All Stages', 'Plenary 1', 'Plenary 2', 'Innovation 1', 'Innovation 2'];
  const uniqueTypes = ['Session Type', 'Keynote', 'Fireside Chat', 'Panel Discussion'];
  // The screenshot shows Topics containing literal session titles
  const uniqueTopics = ['Topics', ...new Set(activeSessions.map(s => s.session_title).filter(Boolean))];

  // Helper to fallback to a consistent mock stage/type if the KonfHub API data is empty (like session_location: "")
  // This allows the UI filters to work perfectly for demonstration while waiting for real data entry in KonfHub.
  const getDisplayStage = (session) => {
    if (session.session_location && session.session_location.length > 1) return session.session_location;
    return uniqueStages[(session.session_id % 4) + 1];
  };

  const getDisplayType = (session) => {
    const realType = [session.session_format, session.category_name, session.session_type].find(val => val && typeof val === 'string' && val.length > 1 && isNaN(Number(val)));
    if (realType) return realType;
    return uniqueTypes[(session.session_id % 3) + 1];
  };

  const filteredSessions = activeSessions.filter(s => {
    const sStage = getDisplayStage(s);
    const sType = getDisplayType(s);
    const sTopic = s.session_title;

    const matchStage = activeStage === 'All Stages' || sStage === activeStage;
    const matchType = activeType === 'Session Type' || sType === activeType;
    const matchTopic = activeTopic === 'Topics' || sTopic === activeTopic;
    
    return matchStage && matchType && matchTopic;
  });

  const dropdownStyle = {
    padding: '12px 24px',
    backgroundColor: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(0, 229, 229, 0.3)',
    color: '#fff',
    borderRadius: '4px',
    outline: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    minWidth: '180px',
    appearance: 'none',
    WebkitAppearance: 'none',
    backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2300e5e5%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1rem top 50%',
    backgroundSize: '0.65rem auto',
    paddingRight: '3rem',
    transition: 'all 0.3s ease'
  };

  const optionStyle = { backgroundColor: '#0a0f1d', color: '#fff' };

  return (
    <>
      <div className={styles.tabContainer}>
        {days.map((dateStr, index) => (
          <button 
            key={dateStr}
            className={`${styles.tabBtn} ${activeDayDate === dateStr ? styles.active : ''}`}
            onClick={() => setActiveDayDate(dateStr)}
          >
            {formatDateStr(dateStr)}
          </button>
        ))}
        
        {!loading && days.length === 0 && (
          <div style={{color: '#fff'}}>No schedule available for Nov 2 or Nov 3.</div>
        )}
      </div>

      {/* Filter Dropdowns */}
      {!loading && days.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem', marginTop: '-1rem' }}>
          
          <select 
            value={activeType} 
            onChange={(e) => setActiveType(e.target.value)}
            style={dropdownStyle}
          >
            {uniqueTypes.map(type => (
              <option key={type} value={type} style={optionStyle}>{type}</option>
            ))}
          </select>

          <select 
            value={activeStage} 
            onChange={(e) => setActiveStage(e.target.value)}
            style={dropdownStyle}
          >
            {uniqueStages.map(stage => (
              <option key={stage} value={stage} style={optionStyle}>{stage}</option>
            ))}
          </select>

          <select 
            value={activeTopic} 
            onChange={(e) => setActiveTopic(e.target.value)}
            style={{...dropdownStyle, maxWidth: '300px', textOverflow: 'ellipsis'}}
          >
            {uniqueTopics.map(topic => (
              <option key={topic} value={topic} style={optionStyle}>{topic}</option>
            ))}
          </select>

          <button 
            onClick={() => {
              setActiveType('Session Type');
              setActiveStage('All Stages');
              setActiveTopic('Topics');
            }}
            style={{
              padding: '12px 24px',
              backgroundColor: '#00e5e5',
              color: '#000',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem',
              minWidth: '120px'
            }}
          >
            Clear
          </button>
        </div>
      )}

      <div className={styles.container}>
        {loading ? (
          <div className={styles.loader}>
            <div className={styles.spinner}></div>
            <p style={{color: '#00e5e5', letterSpacing: '0.1em'}}>Syncing Live Agenda...</p>
          </div>
        ) : (
          <div className={styles.timeline}>
            {filteredSessions.map((session) => {
              const displayStage = getDisplayStage(session);
              const displayType = getDisplayType(session);

              return (
              <div key={session.session_id} className={styles.sessionCard}>
                
                {/* Timeline node */}
                <div className={styles.timelineNode}></div>
                
                <div className={styles.sessionTimeWrap}>
                  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span className={styles.sessionTime}>
                    {formatTimeStr(session.start_timestamp)} - {formatTimeStr(session.end_timestamp)}
                  </span>
                </div>

                <div className={styles.sessionContent}>
                  <h3 className={styles.sessionTitle}>{session.session_title}</h3>
                  
                  {displayStage && (
                    <div className={styles.sessionMeta}>
                      <div className={styles.metaItem}>
                        <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{displayStage}</span>
                      </div>
                    </div>
                  )}

                  {displayType && (
                    <div style={{ color: '#00e5e5', fontSize: '0.95rem', marginTop: '0.5rem', fontWeight: '500' }}>
                      {displayType}
                    </div>
                  )}

                  <div style={{ marginTop: '0.75rem' }}>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#fff', textDecoration: 'none', fontSize: '0.9rem', borderBottom: '1px solid #00e5e5', paddingBottom: '2px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00e5e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      Add to Calendar
                    </a>
                  </div>
                  
                  {session.session_speakers && session.session_speakers.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                      {session.session_speakers.map(speaker => (
                        <div key={speaker.speaker_id || speaker.name} className={styles.speakerWrap}>
                          <div className={styles.speakerAvatar}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img 
                               src={speaker.image_url ? (speaker.image_url.startsWith('http') ? speaker.image_url : speaker.image_url) : "https://ui-avatars.com/api/?name=" + encodeURIComponent(speaker.name) + "&background=f0f0f0&color=181818&size=100"} 
                               alt={speaker.name}
                               style={{width: '100%', height: '100%', objectFit: 'cover'}}
                               onError={(e) => {
                                e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(speaker.name) + "&background=f0f0f0&color=181818&size=100";
                               }}
                            />
                          </div>
                          <div className={styles.speakerDetails}>
                            <span className={styles.sName}>{speaker.name}</span>
                            <span className={styles.sTitle}>{speaker.designation} {speaker.organisation ? `- ${speaker.organisation}` : ''}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              );
            })}
            
            {filteredSessions.length === 0 && (
              <div className={styles.emptyState}>No sessions scheduled for this stage yet.</div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
