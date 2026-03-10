import { useState } from 'react';

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

  return (
    <section id="photo-gallery" className="section photo-gallery-section">
      <div className="container reveal">
        <div className="section-kicker">In the Field</div>
        <h2>Project Photos</h2>
        <p className="lead">A visual record of RDMS Rwanda's outreach, events, and community programs.</p>

        <div className="photo-grid">
          {photos.map((src, i) => (
            <div
              className="photo-tile"
              key={i}
              onClick={() => setLightbox({ src, index: i })}
            >
              <img src={src} alt={`RDMS project photo ${i + 1}`} loading="lazy" />
              <div className="photo-tile-overlay">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
            </div>
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
