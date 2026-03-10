const achievements = [
  {
    status: 'Upcoming',
    statusCls: 'planned',
    date: '20 March 2026',
    title: 'World Oral Health Day 2026',
    location: 'Huye Collections Center, Huye District',
    desc: 'RDMS will be conducting oral health screenings for inmates and making oral health advocacy at Huye Collections Center. A meaningful outreach bringing dental care and awareness to those who need it most.',
    images: ['/RDMS (34).png', '/RDMS (35).png'],
  },
];

export default function Achievements() {
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
                  <div className="achievement-img-wrap" key={i}>
                    <img src={src} alt={`${a.title} photo ${i + 1}`} />
                    <div className="achievement-img-overlay" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
