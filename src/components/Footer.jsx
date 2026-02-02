import React from 'react';
import { FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = ({ scrollToSection }) => {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'offers', label: 'Special Offers' },
    { id: 'contact', label: 'Contact' }
  ];

  const servicesList = [
    'YouTube Video Editing',
    'Instagram Reels & Shorts',
    'Cinematic Edits',
    'Podcast Video Editing'
  ];

  const handleFooterClick = (id) => {
    scrollToSection(id);
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-logo" onClick={() => handleFooterClick('home')} style={{ cursor: 'pointer' }}>
              CLIPIX MEDIA
            </div>
            <p>
              Creative Video Editing & Content Agency specializing in professional 
              video editing for brands, creators, and businesses.
            </p>
            <div className="social-links">
              <a href="https://instagram.com/clipix.media" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="mailto:clippixmedia2k6@gmail.com">
                <FaEnvelope />
              </a>
              <a href="tel:+919391819302">
                <FaPhoneAlt />
              </a>
            </div>
          </div>
          <div>
            <h3 style={{ marginBottom: '20px' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none' }}>
              {quickLinks.map(link => (
                <li key={link.id} style={{ marginBottom: '10px' }}>
                  <a 
                    onClick={() => handleFooterClick(link.id)}
                    style={{ 
                      color: 'inherit', 
                      textDecoration: 'none', 
                      cursor: 'pointer',
                      display: 'inline-block',
                      padding: '5px 0'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ marginBottom: '20px' }}>Our Services</h3>
            <ul style={{ listStyle: 'none' }}>
              {servicesList.map((service, index) => (
                <li key={index} style={{ marginBottom: '10px', opacity: 0.8 }}>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Clipix Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;