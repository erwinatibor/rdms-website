import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Research from './components/Research';
import Achievements from './components/Achievements';
import PhotoGallery from './components/PhotoGallery';
import Contact from './components/Contact';

function GalleryPage() {
  return (
    <>
      <Achievements />
      <PhotoGallery />
      <Projects />
      <Research />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function RevealObserver() {
  const { pathname } = useLocation();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );

    const frame = requestAnimationFrame(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);
  return null;
}

export default function App() {
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    document.body.classList.add('grain');
    return () => document.body.classList.remove('grain');
  }, []);

  return (
    <>
      <ScrollToTop />
      <RevealObserver />
      <Topbar />
      <Navbar isDark={isDark} onToggleTheme={toggle} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
