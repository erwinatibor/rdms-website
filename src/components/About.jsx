import { useState } from 'react';

const faqs = [
  {
    q: 'What does RDMS Rwanda do?',
    a: 'RDMS Rwanda unites dental and medical students to promote oral and public health through outreach, research, innovation, and partnerships—serving communities in Rwanda and beyond.',
  },
  {
    q: 'Who can join RDMS Rwanda?',
    a: 'Any enrolled dental or medical student and professionals who shares a commitment to community service and improving health through collaboration and evidence-based practice.',
  },
  {
    q: 'Where are RDMS Rwanda activities conducted?',
    a: 'Activities take place primarily in Ngoma and surrounding districts in the south of Rwanda, with programs expanding to other regions through partner networks.',
  },
  {
    q: 'How can I partner with RDMS Rwanda?',
    a: 'Reach out via the contact page or email us to discuss collaboration with schools, clinics, NGOs, and government health programs.',
  },
  {
    q: 'Is there a membership or participation fee?',
    a: 'No. RDMS Rwanda operates as a volunteer, student-led nonprofit; participation is free, with support from donations and grants.',
  },
];

const team = [
  {
    name: 'IGISUBIZO J. Confiance',
    position: 'Chief Executive Officer',
    occupation: 'Dental Surgeon',
    bio: 'Leads organization strategy, oversees operations, represents RDMS, ensures impact.',
    photo: '/IGISUBIZO Jimmy Confiance.jpeg',
  },
  {
    name: 'DUSHIMITANGA Luc',
    position: 'V.P. Finance',
    occupation: 'Medicine',
    bio: 'Manages finances, budgets, fundraising, financial reporting, and resource allocation.',
    photo: '/DUSHIMITANGA Luc.jpeg',
  },
  {
    name: 'NATUKUNDA Sharon',
    position: 'General Secretary',
    occupation: 'Medicine',
    bio: 'Coordinates communication, records, meetings, execution, and internal organizational support.',
    photo: '/NATUKUNDA Sharon.jpeg',
  },
  {
    name: 'KUBWIMANA Steven',
    position: 'V.P. External Affairs',
    occupation: 'Dental Surgeon',
    bio: 'Manages partnerships, outreach, representation, collaborations, and international stakeholder engagement.',
    photo: '/KUBWIMANA Steven.jpeg',
  },
  {
    name: 'MBAGOROZIKI Samuel',
    position: 'V.P. Internal Affairs',
    occupation: 'Dental Surgeon',
    bio: 'Oversees internal operations, member engagement, event coordination, and organizational cohesion.',
    photo: '/MBAGOROZIKI Samuel.jpeg',
  },
  {
    name: 'Professor Julienne',
    position: 'Mentor',
    occupation: 'Lecturer',
    bio: 'Guides RDMS with academic mentorship, strategic counsel, and institutional expertise in community dentistry.',
    photo: '/Julienne.jpeg',
  },
  {
    name: 'Dr. Agholor CN',
    position: 'Senior Lecturer',
    occupation: 'BDS FWACS FICS',
    bio: 'Senior Lecturer at PRD, CMHS, University of Rwanda. Contact: nimbiye@gmail.com',
    photo: '/Dr. Agholor CN.jpeg',
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <div className="faq-list">
      {faqs.map((item, i) => (
        <div
          key={i}
          className={`faq-item${open === i ? ' faq-open' : ''}`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="faq-q">
            <span>{item.q}</span>
            <span className="faq-icon">{open === i ? '−' : '+'}</span>
          </div>
          {open === i && <div className="faq-a">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}

function TeamSection() {
  return (
    <div className="team-section reveal">
      <div className="section-head" style={{ marginBottom: '32px' }}>
        <div className="section-kicker">Our Leadership</div>
        <h2>Meet the Team</h2>
        <p>The dedicated professionals driving RDMS Rwanda's mission forward.</p>
      </div>
      <div className="team-grid-v2">
        {team.map((member) => (
          <div
            className="team-card-v2"
            key={member.name}
          >
            <div className="tc2-photo-side">
              {member.photo ? (
                <img src={member.photo} alt={member.name} />
              ) : (
                <div className="tc2-photo-placeholder">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              )}
              <div className="tc2-photo-gradient" />
            </div>
            <div className="tc2-content">
              <div className="tc2-occupation">{member.occupation}</div>
              <h3 className="tc2-name">{member.name}</h3>
              <div className="tc2-position">{member.position}</div>
            </div>
            <div className="tc2-popup">
              <div className="tc2-popup-inner">
                <div className="tc2-popup-role">{member.position}</div>
                <p className="tc2-popup-bio">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-kicker">Who We Are</div>
          <h2>Rwanda's Dento-Medical Society</h2>
          <p>A nonprofit professional organization uniting dental and medical students and professionals to advance oral and public health across Rwanda and beyond.</p>
        </div>

        <div className="about-cards reveal">
          <div className="panel rich about-card-item">
            <h3>Who We Are</h3>
            <p><strong>RDMS Rwanda</strong> is a nonprofit, professional organization based in Ngoma, Huye, in the south of Rwanda. It unites dental and medical students and professionals to promote oral and public health through outreach, research, innovation, and partnerships that advance healthcare in Rwanda and beyond.</p>
          </div>

          <div className="panel rich about-card-item">
            <h3>The Challenge</h3>
            <p>In Rwanda, oral health has long existed at the margins of the national healthcare system — underfunded, underrepresented, and often invisible to the communities that need it most. Dental disease, though largely preventable, continues to affect children, adults, and vulnerable populations who lack access to even the most basic oral care.</p>
          </div>

          <div className="panel rich about-card-item">
            <h3>Our Story</h3>
            <p>RDMS was founded in 2024 to confront this reality head-on. Driven by a shared belief that oral health is inseparable from general health, our founders built a society that bridges the gap between dentistry and medicine — bringing professionals, students, and communities together under one mission.</p>
          </div>

          <div className="panel rich about-card-item">
            <h3>Official Registration</h3>
            <p>Registered under RDB as a Non-Profit Limited by Guarantee (Code: 143885158), RDMS operates from Huye and reaches communities across Rwanda through field programs, research, education, and policy engagement.</p>
          </div>
        </div>

        <div className="about-mission-vision reveal">
          <div className="panel vision-card">
            <div className="vision-kicker">Mission & Vision</div>
            <h3>Our Purpose</h3>
            <div className="quote-box">
              <h4>Mission</h4>
              <p>"To unite dental surgeons, dental therapists, and public health professionals in advancing integrated oral health services, research, advocacy, and community-based care in Rwanda and beyond."</p>
            </div>
            <div className="quote-box" style={{ marginTop: '16px' }}>
              <h4>Vision</h4>
              <p>"A Rwanda where oral health is fully integrated into general healthcare, accessible to every community, and driven by evidence-based practice and collaboration."</p>
            </div>
            <div className="metric-grid">
              <div className="metric"><strong>2024</strong><span>Founded</span></div>
              <div className="metric"><strong>Huye</strong><span>Based in Rwanda</span></div>
              <div className="metric"><strong>National</strong><span>Community Reach</span></div>
            </div>
            <div className="pill-grid">
              <div className="pill">Community Outreach</div>
              <div className="pill">Public Health Education</div>
              <div className="pill">Research &amp; Data</div>
              <div className="pill">Professional Collaboration</div>
            </div>
          </div>
        </div>

        <TeamSection />

        {/* FAQ Section */}
        <div className="faq-section reveal">
          <div className="section-head" style={{ marginBottom: '24px' }}>
            <div className="section-kicker">FAQ</div>
            <h2>Common Questions</h2>
            <p>Answers to common questions about RDMS Rwanda, our mission, and how to participate.</p>
          </div>
          <FAQ />
        </div>
      </div>
    </section>
  );
}
