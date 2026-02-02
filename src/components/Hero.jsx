import React from 'react';

const Hero = ({ scrollToSection }) => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>Creative Video Editing & Content Agency</h1>
        <p>
          We transform your raw footage into engaging, professional videos that 
          captivate your audience and elevate your brand.
        </p>
        <button className="cta-button" onClick={() => scrollToSection('contact')}>
          Get Your Free Demo Edit
        </button>
      </div>
    </section>
  );
};

export default Hero;