import React from 'react';
import { FaPhoneAlt, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const contactDetails = [
    {
      icon: <FaPhoneAlt />,
      title: 'Phone',
      value: '+91 9391819302',
      link: 'tel:+919391819302'
    },
    {
      icon: <FaInstagram />,
      title: 'Instagram',
      value: '@clipix.media',
      link: 'https://instagram.com/clipix.media'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'clippixmedia2k6@gmail.com',
      link: 'mailto:clippixmedia2k6@gmail.com'
    }
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:clippixmedia2k6@gmail.com';
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Contact us to discuss your video editing needs</p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            {contactDetails.map((contact, index) => (
              <div className="contact-item" key={index}>
                <div className="contact-icon">{contact.icon}</div>
                <div>
                  <h3>{contact.title}</h3>
                  <a 
                    href={contact.link} 
                    target={contact.title === 'Instagram' ? '_blank' : '_self'}
                    rel={contact.title === 'Instagram' ? 'noopener noreferrer' : ''}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {contact.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 style={{ marginBottom: '20px' }}>Ready to elevate your content?</h3>
            <p style={{ marginBottom: '30px' }}>
              Contact us today to get your free demo edit and discuss how we can help you 
              create stunning video content that engages your audience and grows your brand.
            </p>
            <button className="cta-button" onClick={handleEmailClick}>
              Email Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;