import React from 'react';

const WhyChooseUs = () => {
  const benefits = [
    'Professional Video Editing',
    'Affordable Monthly Plans',
    'On-time Delivery',
    'Dedicated Client Support',
    'Free Demo Available',
    'Quality-focused'
  ];

  return (
    <section id="why" style={{ backgroundColor: 'var(--light)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Us?</h2>
          <p>We're committed to delivering exceptional value</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-item" key={index}>
              <h3>{benefit}</h3>
              <p>
                {benefit === 'Professional Video Editing' && 'High-quality edits that meet industry standards'}
                {benefit === 'Affordable Monthly Plans' && 'Flexible pricing options for every budget'}
                {benefit === 'On-time Delivery' && 'We respect deadlines and deliver as promised'}
                {benefit === 'Dedicated Client Support' && 'We\'re here to help you throughout the process'}
                {benefit === 'Free Demo Available' && 'Try our service risk-free with a demo edit'}
                {benefit === 'Quality-focused' && 'Every video is crafted with attention to detail'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;