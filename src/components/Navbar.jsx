import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ isDark, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (isOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen]);

  return (
    <nav className={`nav${isOpen ? ' open' : ''}`} id="mainNav" ref={navRef}>
      <div className="container">
        <div className="nav-inner">
          <NavLink to="/" className="brand" onClick={closeMenu}>
            <div className="brand-mark">
              <img src="/logo.png" alt="RDMS Logo" style={{ width: '34px', height: '34px', objectFit: 'contain' }} />
            </div>
            <div className="brand-text">
              <div className="brand-title">RDMS — Dento-Medical Society Rwanda</div>
              <div className="brand-sub">Integrated oral health, research &amp; advocacy</div>
            </div>
          </NavLink>
          <div className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contact" className="cta">Contact</NavLink>
          </div>
          <div className="nav-end">
            <button
              className="theme-toggle"
              type="button"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title="Toggle theme"
              onClick={onToggleTheme}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button
              className="hamburger"
              type="button"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobileMenu"
              onClick={() => setIsOpen(prev => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <div className="mobile-menu" id="mobileMenu" aria-hidden={!isOpen}>
          <div className="mobile-menu-inner">
            <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
            <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
            <NavLink to="/contact" className="cta" onClick={closeMenu}>Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
