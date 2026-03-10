import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <main id="home" className="hero">
      <div className="container hero-wrap">
        <section className="hero-copy reveal">
          <div className="eyebrow">🇷🇼 Rwanda · RDB Registered · Code 143885158</div>
          <h1>Advancing <span className="accent">Oral Health</span> for Rwanda &amp; Beyond</h1>
          <p className="hero-sub">
            The Dento-Medical Society Rwanda unites dental surgeons, therapists, and public health professionals to deliver integrated care, research, and advocacy across Rwanda.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/services">Our Services →</Link>
            <Link className="btn btn-secondary" to="/about">Learn About RDMS</Link>
          </div>
          <div className="hero-stats">
            <div className="stat"><strong>2024</strong><span>Founded</span></div>
            <div className="stat"><strong>5+</strong><span>Core Services</span></div>
            <div className="stat"><strong>30+</strong><span>Members</span></div>
          </div>
        </section>

        <aside className="hero-panel reveal">
          <div className="stack">
            <div className="feature-card">
              <div className="chip">Our Programs</div>
              <h3>Integrated Oral &amp; General Health</h3>
              <p>Connecting communities with professional dental care, preventive education, and research innovation.</p>
              <div className="list">
                <div className="list-item"><span className="dot"></span>School-Based Dental Screenings</div>
                <div className="list-item"><span className="dot"></span>Preventive Care Programs</div>
                <div className="list-item"><span className="dot"></span>RDMS Research Academy</div>
                <div className="list-item"><span className="dot"></span>Community Mobile Clinics</div>
              </div>
            </div>
            <div className="info-grid">
              <div className="mini">
                <strong>🏛️ Registered</strong>
                <span>RDB Code: 143885158<br />Huye, Rwanda · Ngoma District</span>
              </div>
              <div className="mini">
                <strong>🦷 Focus Areas</strong>
                <span>Dental Care, Research, Awareness, and Policy engagement nationwide.</span>
              </div>
            </div>
            <div className="feature-card">
              <div className="chip">Recent Activity</div>
              <h3>World Ectodermal Dysplasia Day 2026</h3>
              <p>On 20 February 2026, RDMS joined global advocates to raise awareness and strengthen coordinated support for individuals and families affected by Ectodermal Dysplasia in Rwanda and beyond.</p>
              <div className="meta-row">
                <span className="tag active">🇷🇼 Rwanda</span>
                <span className="tag ongoing">🦷 Oral Health</span>
                <span className="tag planned">🌍 Global</span>
                <span className="tag date">20 February 2026</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Partners Strip */}
      <div className="partners-strip">
        <div className="container">
          <div className="partners-label">Partners &amp; Affiliates</div>
        </div>
        <div className="marquee-track">
          <div className="marquee-inner">
            {[0, 1].map((copy) => (
              <div className="marquee-set" key={copy} aria-hidden={copy === 1}>
                <div className="partner-logo"><img src="/ADC.jpeg" alt="African Dental Congress" /></div>
                <div className="partner-logo"><img src="/DentAfrica.png" alt="DentAfrica" /></div>
                <div className="partner-logo"><img src="/chub.png" alt="CHUB" /></div>
                <div className="partner-logo"><img src="/Firat.png" alt="Firat" /></div>
                <div className="partner-logo"><img src="/hangahubs.png" alt="Hangahubs" /></div>
                <div className="partner-logo"><img src="/anatomy.png" alt="Anatomy" /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
