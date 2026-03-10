import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container footer-card reveal">
        <div className="footer-brand-center">
          <Link to="/" className="brand" style={{ marginBottom: '12px', textDecoration: 'none', justifyContent: 'center' }}>
            <div className="brand-mark">
              <img src="/logo.png" alt="RDMS Logo" style={{ width: '34px', height: '34px', objectFit: 'contain' }} />
            </div>
            <div className="brand-text">
              <div className="brand-title" style={{ color: 'white' }}>RDMS — Dento-Medical Society Rwanda</div>
              <div className="brand-sub" style={{ color: 'rgba(255,255,255,0.62)' }}>Rwanda's oral health future</div>
            </div>
          </Link>
          <p>Uniting professionals, students, and communities to advance oral and public health through service delivery, prevention, research, and advocacy.</p>
        </div>
        <div className="footer-columns">
          <div>
            <h4>Navigate</h4>
            <Link to="/about">About</Link><br />
            <Link to="/services">Services</Link><br />
            <Link to="/gallery">Gallery</Link><br />
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h4>Programs</h4>
            <Link to="/services">School Screenings</Link><br />
            <Link to="/services">Preventive Care</Link><br />
            <Link to="/gallery">Mobile Clinics</Link><br />
            <Link to="/gallery">Research Academy</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <Link to="/contact">Ngoma, Huye</Link><br />
            <Link to="/contact">+250 791 853 120</Link><br />
            <Link to="/contact">rdmspresident13@gmail.com</Link><br />
            <Link to="/contact">RDB Code: 143885158</Link>
          </div>
          <div>
            <h4>Follow Us</h4>
            <a href="https://x.com/RDMS_rw" target="_blank" rel="noopener noreferrer">𝕏 Twitter / X</a><br />
            <a href="https://www.instagram.com/rdms_rw/" target="_blank" rel="noopener noreferrer">📸 Instagram</a><br />
            <a href="https://www.linkedin.com/in/rdms-dento-medical-society-rwanda-24035029b" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a><br />
            <a href="https://www.tiktok.com/@rdmsrw" target="_blank" rel="noopener noreferrer">🎵 TikTok</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 RDMS Rwanda. All rights reserved.</span>
          <span>Built with the original RDMS content preserved and elevated into a premium modern experience.</span>
        </div>
      </div>
    </footer>
  );
}
