import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-kicker">Get In Touch</div>
          <h2>Connect with RDMS</h2>
          <p>Whether you're a professional, partner, donor, or community member — we'd love to hear from you. Reach out to learn more about our programs, partnership opportunities, research collaborations, or to refer patients to our community services.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="contact-card">
              <div className="contact-item">
                <div className="contact-badge">📍</div>
                <div><strong>Location</strong><span>Ngoma, Huye, Amajyepfo Rwanda (Southern Province)</span></div>
              </div>
              <div className="contact-item">
                <div className="contact-badge">📞</div>
                <div><strong>Phone</strong><span>+250 791 853 120</span></div>
              </div>
              <div className="contact-item">
                <div className="contact-badge">✉️</div>
                <div><strong>Email</strong><span>[email protected]</span></div>
              </div>
              <div className="contact-item">
                <div className="contact-badge">🏛️</div>
                <div><strong>Registration</strong><span>RDB Code: 143885158<br />Registered: 1 July 2024</span></div>
              </div>
              <div className="contact-item">
                <div className="contact-badge">🌐</div>
                <div>
                  <strong>Follow Us</strong>
                  <div className="socials">
                    <a className="social" href="https://x.com/RDMS_rw" target="_blank" rel="noopener noreferrer">𝕏 Twitter / X</a>
                    <a className="social" href="https://www.instagram.com/rdms_rw/" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
                    <a className="social" href="https://www.linkedin.com/in/rdms-dento-medical-society-rwanda-24035029b" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
                    <a className="social" href="https://www.tiktok.com/@rdmsrw" target="_blank" rel="noopener noreferrer">🎵 TikTok</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-shell reveal">
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '36px', marginBottom: '8px' }}>Send Us a Message</h3>
            <p style={{ margin: '0 0 22px', color: 'var(--muted)', lineHeight: 1.8 }}>A refined contact experience that keeps your original fields while making the interaction feel cleaner and more trustworthy.</p>
            <form onSubmit={handleSubmit}>
              <div className="two">
                <div>
                  <label>First Name</label>
                  <input type="text" placeholder="First Name" />
                </div>
                <div>
                  <label>Last Name</label>
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div>
                <label>Email Address</label>
                <input type="email" placeholder="[email protected]" />
              </div>
              <div>
                <label>I am a...</label>
                <select>
                  <option>Select your role</option>
                  <option>Healthcare Professional</option>
                  <option>Dental Student</option>
                  <option>Partner / Donor</option>
                  <option>Community Member / Patient</option>
                  <option>Researcher</option>
                  <option>Government / NGO</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label>Subject</label>
                <input type="text" placeholder="Subject" />
              </div>
              <div>
                <label>Message</label>
                <textarea placeholder="Write your message..."></textarea>
              </div>
              <div>
                <button className="btn btn-primary" type="submit">Send Message →</button>
              </div>
              {submitted && (
                <div className="success">✓ Message sent! We'll get back to you soon.</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
