import { Link } from 'react-router-dom';

const articles = [
  {
    icon: '🩺',
    category: 'Oral-Systemic Health',
    title: 'The Link Between Periodontal Disease and Diabetes: Evidence from Sub-Saharan Africa',
    desc: 'Emerging data from Sub-Saharan Africa highlights bidirectional associations between periodontitis and glycaemic control, with implications for integrated care pathways.',
    date: 'March 2026',
  },
  {
    icon: '🧴',
    category: 'Preventive Dentistry',
    title: 'Fluoride Varnish Efficacy in Primary School Children: A Systematic Review',
    desc: 'This review synthesizes evidence on fluoride varnish application frequency, concentration, and effectiveness in reducing early childhood caries in low-resource settings.',
    date: 'February 2026',
  },
  {
    icon: '🧬',
    category: 'Ectodermal Dysplasia',
    title: 'Dental Management of Ectodermal Dysplasia: Clinical Guidelines for Rwandan Practitioners',
    desc: 'A practical clinical guide adapted for Rwandan dental professionals managing patients with hypohidrotic ectodermal dysplasia, including prosthetic and implant considerations.',
    date: 'February 2026',
  },
  {
    icon: '📚',
    category: 'Public Health',
    title: 'Oral Health Literacy in Rwanda: Survey Findings and Implications',
    desc: 'A community survey examining awareness of dental hygiene practices, barriers to dental visits, and the role of community health workers in improving oral health literacy.',
    date: 'January 2026',
  },
  {
    icon: '👩🏽‍⚕️',
    category: 'Clinical Practice',
    title: 'Integrated Referral Pathways Between Dental and Medical Providers',
    desc: 'An evolving practice framework supporting cross-referral, shared risk assessment, and better continuity of care for patients with oral-systemic conditions.',
    date: '2026',
  },
  {
    icon: '📈',
    category: 'Data & Monitoring',
    title: 'Community Screening Metrics and Program Evaluation Design',
    desc: 'A practical model for assessing outreach effectiveness, tracking follow-up care, and improving the quality of oral health interventions over time.',
    date: '2026',
  },
];

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="container">
        <div className="academy-banner reveal">
          <h3>RDMS Research Academy</h3>
          <p>Where knowledge meets practice. The RDMS Research Academy is a continuous learning platform for dental and health professionals in Rwanda — curating the latest research, publishing lessons, and advancing evidence-based oral health practice.</p>
          <div className="hero-actions" style={{ marginTop: '18px' }}>
            <Link className="btn btn-secondary" to="/contact">Join the Academy →</Link>
          </div>
        </div>

        <div className="section-head reveal">
          <div className="section-kicker">Latest Lessons</div>
          <h2>Research-Based Learning</h2>
          <p>Curated topics designed to strengthen interdisciplinary understanding and evidence-based practice.</p>
        </div>

        <div className="research-grid">
          {articles.map((a) => (
            <article className="research-card reveal" key={a.title}>
              <div className="research-icon">{a.icon}</div>
              <small>{a.category}</small>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
              <div className="meta-row">
                <span className="tag date">{a.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
