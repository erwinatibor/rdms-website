const projects = [
  {
    icon: '🌍',
    title: 'World Ectodermal Dysplasia Day 2026',
    desc: 'Community awareness event raising support for individuals and families affected by Ectodermal Dysplasia in Rwanda and beyond.',
    tags: [{ label: 'Completed', cls: 'active' }, { label: 'Awareness', cls: 'ongoing' }, { label: '20 Feb 2026', cls: 'date' }],
  },
  {
    icon: '🦷',
    title: 'Daily Oral Health Messaging Campaign',
    desc: 'Automated daily preventive care messages distributed to community members via SMS and social media platforms.',
    tags: [{ label: 'Active', cls: 'active' }, { label: 'Preventive Care', cls: 'ongoing' }, { label: 'Ongoing · 2026', cls: 'date' }],
  },
  {
    icon: '🏫',
    title: 'Huye District School Dental Screening Drive',
    desc: 'Systematic oral health screenings across 7 primary schools in Huye District, identifying untreated caries and periodontal conditions.',
    tags: [{ label: 'Active', cls: 'active' }, { label: 'Screenings', cls: 'ongoing' }, { label: 'Q1 2026', cls: 'date' }],
  },
  {
    icon: '🚐',
    title: 'Mobile Dental Clinic — Rural Outreach Q1',
    desc: 'Mobile dental unit providing free extractions, fluoride treatment, and oral hygiene kits to communities in underserved areas.',
    tags: [{ label: 'Planned', cls: 'planned' }, { label: 'Community Outreach', cls: 'ongoing' }, { label: 'March 2026', cls: 'date' }],
  },
  {
    icon: '🔬',
    title: 'Oral-Systemic Health Baseline Study — Rwanda',
    desc: 'A cross-sectional research study documenting the prevalence of dental conditions and their systemic health correlations in Rwandan adults.',
    tags: [{ label: 'Ongoing', cls: 'ongoing' }, { label: 'Research', cls: 'ongoing' }, { label: '2025–2026', cls: 'date' }],
  },
  {
    icon: '📣',
    title: 'Interdisciplinary Health Workshop Series',
    desc: 'Training workshops for dental and medical professionals on integrating oral and systemic health in patient care.',
    tags: [{ label: 'Planned', cls: 'planned' }, { label: 'Training', cls: 'ongoing' }, { label: 'Q2 2026', cls: 'date' }],
  },
];

const filters = ['All Projects', 'Preventive Care', 'Screenings', 'Outreach', 'Awareness', 'Research'];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container projects-shell reveal">
        <div className="section-kicker">Our Work</div>
        <h2>Projects &amp; Daily Activities</h2>
        <p className="lead">Tracking RDMS active programs, campaigns, and field activities across Rwanda.</p>

        <div className="filters">
          {filters.map(f => (
            <span className="filter" key={f}>{f}</span>
          ))}
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="meta-row">
                {p.tags.map(t => (
                  <span className={`tag ${t.cls}`} key={t.label}>{t.label}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
