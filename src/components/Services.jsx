const services = [
  {
    icon: '🤝',
    title: 'Community Outreach & Oral Health Education',
    desc: 'Volunteer-led outreach visits deliver basic screenings, oral hygiene demonstrations, and age-appropriate health education to schools, youth groups, and communities.',
    link: 'Learn about outreach →',
  },
  {
    icon: '🏫',
    title: 'School-Based Dental Screenings',
    desc: 'Regular on-site screenings identify early dental issues, provide referrals, and foster classroom health literacy in partner schools.',
    link: 'View school programs →',
  },
  {
    icon: '🦷',
    title: 'Preventive Care Programs',
    desc: 'Fluoride varnish applications, sealants, and preventive care kits help reduce cavities and promote lifelong oral health habits.',
    link: 'View care programs →',
  },
  {
    icon: '📊',
    title: 'Oral Health Research & Data Collection',
    desc: 'Community-based research gathers local oral health data, informs policy priorities, and supports evidence-based advocacy.',
    link: 'Explore research →',
  },
  {
    icon: '🎓',
    title: 'Volunteer Training & Leadership Development',
    desc: 'Structured trainings, mentorship, and leadership opportunities empower students to serve communities effectively and develop professional skills.',
    link: 'See training opportunities →',
  },
  {
    icon: '📣',
    title: 'Partnerships & Public Health Advocacy',
    desc: 'We build collaborations with schools, clinics, NGOs, and government health agencies to scale impact and promote equitable access to care.',
    link: 'Learn about partnerships →',
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-kicker">What We Do</div>
          <h2>Our Core Services</h2>
          <p>RDMS society provides a range of services focused on prevention, education, research, and capacity building to improve oral health outcomes in Rwanda and the region.</p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <article className="service-card reveal" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="soft-link">{s.link}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
