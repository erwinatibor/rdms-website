import { useState } from 'react';

const achievements = [
  {
    status: 'Completed',
    statusCls: 'active',
    date: '20 Feb 2026',
    title: 'World Ectodermal Dysplasia Day 2026',
    location: 'Huye, Rwanda · In-person & Live Session',
    desc: 'On World Ectodermal Dysplasia Day, @RDMS_rw hosted both an in-person event and a live session to raise awareness about Ectodermal Dysplasia, promote early detection and referral, and advocate for coordinated support for affected individuals and families.',
    images: ['/Dysplasia.jpeg'],
  },
  {
    status: 'Completed',
    statusCls: 'active',
    date: '2025–2026',
    title: 'Oral Health Outreach in Primary Schools',
    location: 'Eden Primary School, Huye District',
    desc: 'RDMS conducted oral health outreach sessions at Eden Primary School in Huye, delivering hands-on education to pupils on proper brushing techniques, cavity prevention, and the importance of good oral hygiene habits from an early age.',
    images: ['/Oral health.jpeg'],
  },
  {
    status: 'Upcoming',
    statusCls: 'planned',
    date: '20 March 2026',
    title: 'World Oral Health Day 2026',
    location: 'Huye Collections Center, Huye District',
    desc: 'RDMS will be conducting oral health screenings for inmates and making oral health advocacy at Huye Collections Center. A meaningful outreach bringing dental care and awareness to those who need it most.',
    images: ['/RDMS (34).png', '/RDMS (35).png'],
  },
  {
    status: 'Upcoming',
    statusCls: 'planned',
    date: 'April 2026',
    title: 'Dento Medicine Chronicles — Series EP5',
    location: 'Live on YouTube · @official-firat RDMS-rw',
    desc: 'The next episode of the Dento Medicine Chronicles (DMC) Brave Talk series, featuring expert guest speakers discussing critical themes at the intersection of oral and systemic health in Rwanda.',
    images: ['/To be done this april.jpeg'],
  },
];

export default function Achievements() {
  const [lightbox, setLightbox] = useState(null); // { src, alt }

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container reveal">
        <div className="section-kicker">Milestones</div>
        <h2>Achievements &amp; Upcoming Events</h2>
        <p className="lead">Key milestones, events, and community impact moments from RDMS Rwanda.</p>

        <div className="achievements-list">
          {achievements.map((a) => (
            <div className="achievement-card" key={a.title}>
              <div className="achievement-header">
                <div className="achievement-meta">
                  <span className={`tag ${a.statusCls}`}>{a.status}</span>
                  <span className="tag date">{a.date}</span>
                </div>
                <h3 className="achievement-title">{a.title}</h3>
                <div className="achievement-location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {a.location}
                </div>
                <p className="achievement-desc">{a.desc}</p>
              </div>
              <div className="achievement-images">
                {a.images.map((src, i) => (
                  <div
                    className="achievement-img-wrap"
                    key={i}
                    onClick={() => setLightbox({ src, alt: `${a.title} photo ${i + 1}` })}
                  >
                    <img src={src} alt={`${a.title} photo ${i + 1}`} />
                    <div className="achievement-img-overlay" />
                    <div className="achievement-img-zoom-hint">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox-backdrop" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
