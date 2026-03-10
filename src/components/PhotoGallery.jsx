import { useState, useEffect, useRef } from 'react';

const photos = [
  '/RDMS (9).png',
  '/RDMS (2).png',
  '/RDMS (10).png',
  '/RDMS (11).png',
  '/RDMS (17).png',
  '/RDMS (23).png',
  '/RDMS (24).png',
  '/RDMS (33).png',
  '/RDMS (13).png',
  '/RDMS (26).png',
  '/RDMS (28).png',
  '/RDMS (29).png',
  '/RDMS (30).png',
  '/RDMS (31).png',
];

export default function PhotoGallery() {
  const [lightbox, setLightbox] = useState(null);
  const [current, setCurrent] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef(null);

  // Intersection observer to detect if carousel is in viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Auto-rotate when NOT in view
  useEffect(() => {
    if (isInView || paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isInView, paused]);

  const goTo = (index) => {
    setCurrent(index);
    setPaused(true);
    setTimeout(() => setPaused(false), 6000);
  };

  const prev = () => goTo((current - 1 + photos.length) % photos.length);
  const next = () => goTo((current + 1) % photos.length);

  // Get indices for visible cards (show 5 around current)
  const getOffset = (i) => {
    let diff = i - current;
    if (diff > photos.length / 2) diff -= photos.length;
    if (diff < -photos.length / 2) diff += photos.length;
    return diff;
  };

  return (
    <section id="photo-gallery" className="section photo-gallery-section" ref={sectionRef}>
      <div className="container reveal">
        <div className="section-kicker">In the Field</div>
        <h2>Project Photos</h2>
        <p className="lead">A visual record of RDMS Rwanda's outreach, events, and community programs.</p>

        <div className="carousel-wrapper">
          <button className="carousel-btn carousel-btn-prev" onClick={prev} aria-label="Previous photo">‹</button>

          <div className="carousel-stage">
            {photos.map((src, i) => {
              const offset = getOffset(i);
              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 3;

              if (!isVisible) return null;

              // When not in view: cards flip sideways (rotateY)
              // When in view: standard carousel positioning
              const rotateY = !isInView ? offset * 35 : offset * 8;
              const translateX = offset * (isInView ? 120 : 80);
              const translateZ = isActive ? 60 : -(Math.abs(offset) * 80);
              const scale = isActive ? 1 : Math.max(0.65, 1 - Math.abs(offset) * 0.15);
              const opacity = isActive ? 1 : Math.max(0.3, 1 - Math.abs(offset) * 0.25);
              const zIndex = 10 - Math.abs(offset);

              return (
                <div
                  className={`carousel-card${isActive ? ' carousel-card-active' : ''}`}
                  key={i}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex,
                  }}
                  onClick={() => {
                    if (isActive) {
                      setLightbox({ src, index: i });
                    } else {
                      goTo(i);
                    }
                  }}
                >
                  <img src={src} alt={`RDMS project photo ${i + 1}`} loading="lazy" />
                  {isActive && (
                    <div className="carousel-card-hint">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button className="carousel-btn carousel-btn-next" onClick={next} aria-label="Next photo">›</button>
        </div>

        <div className="carousel-dots">
          {photos.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === current ? ' carousel-dot-active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox-backdrop" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); setLightbox({ src: photos[(lightbox.index - 1 + photos.length) % photos.length], index: (lightbox.index - 1 + photos.length) % photos.length }); }}
          >‹</button>
          <img
            src={lightbox.src}
            alt={`RDMS project photo ${lightbox.index + 1}`}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); setLightbox({ src: photos[(lightbox.index + 1) % photos.length], index: (lightbox.index + 1) % photos.length }); }}
          >›</button>
          <div className="lightbox-counter">{lightbox.index + 1} / {photos.length}</div>
        </div>
      )}
    </section>
  );
}
