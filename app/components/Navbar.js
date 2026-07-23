'use client';
import { assetPath } from '../utils/assetPath';


import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'HOME', href: '/#home' },
  { 
    label: 'ABOUT US', 
    href: '#',
    dropdown: [
      { label: 'About DFS', href: '/about' },
      { label: 'Dubai Future Finance Week', href: '/dubai-future-finance-week' }
    ]
  },
  { label: 'AGENDA', href: '/agenda' },
  { label: 'SPEAKERS', href: '/speakers' },
  { label: 'GET INVOLVED', href: '/#get-involved' },
  { label: 'ECOSYSTEM', href: '/#ecosystem' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/#home');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMobileOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerInner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img src={assetPath('/dfs-logo-hero-banner.svg')} alt="Dubai FinTech Summit Logo" className={styles.logoImg} />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav} role="navigation" aria-label="Main Navigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li 
                key={link.label} 
                className={styles.navItem}
                onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
              >
                <a
                  href={link.href}
                  className={`${styles.navLink} ${activeLink === link.href ? styles.navLinkActive : ''}`}
                  onClick={(e) => {
                    if (link.dropdown) e.preventDefault();
                    else handleNavClick(link.href);
                  }}
                >
                  {link.label}
                  {link.dropdown && (
                    <svg className={styles.dropdownIcon} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                  <span className={styles.navLinkUnderline}></span>
                </a>
                
                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className={`${styles.dropdownMenu} ${dropdownOpen ? styles.dropdownOpen : ''}`}>
                    <div className={styles.dropdownInner}>
                      {link.dropdown.map((subItem) => (
                        <a 
                          key={subItem.href} 
                          href={subItem.href}
                          className={styles.dropdownItem}
                          onClick={() => handleNavClick(subItem.href)}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Buttons */}
        <div className={styles.ctaGroup}>
          <a href="#enquire" className={styles.btnOutline} id="nav-enquire-btn">
            Enquire Now
          </a>
          <a href="#buy-pass" className={styles.btnPrimary} id="nav-buy-pass-btn">
            Buy a Pass
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`${styles.mobileToggle} ${mobileOpen ? styles.mobileToggleActive : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
          id="mobile-menu-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
        <nav>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${styles.mobileNavLink} ${activeLink === link.href ? styles.mobileNavLinkActive : ''}`}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.mobileCta}>
          <a href="#enquire" className={styles.btnOutline}>Enquire Now</a>
          <a href="#buy-pass" className={styles.btnPrimary}>Buy a Pass</a>
        </div>
      </div>
    </header>
  );
}
