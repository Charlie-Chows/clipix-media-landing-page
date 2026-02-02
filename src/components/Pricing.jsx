import React from 'react';

const Pricing = ({ handlePlanSelect }) => {
  const plans = [
    {
      name: 'Starter Plan',
      price: '₹14,999',
      period: '/month',
      features: [
        'Up to 20 short videos',
        'Reels / Shorts only',
        'Basic cuts, captions & music',
        'Standard delivery'
      ],
      featured: false
    },
    {
      name: 'Basic Plan',
      price: '₹18,999',
      period: '/month',
      features: [
        'Up to 25 videos',
        'Advanced edits + captions',
        'Faster delivery',
        'Basic motion graphics'
      ],
      featured: true
    },
    {
      name: 'Premium Plan',
      price: '₹24,999',
      period: '/month',
      features: [
        'Up to 30 Videos',
        'Dedicated editor',
        'Priority support',
        'Advanced motion graphics'
      ],
      featured: false
    }
  ];

  return (
    <section id="pricing" style={{ backgroundColor: 'var(--light)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Our Editing Packages</h2>
          <p>Choose the perfect plan for your video editing needs</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={index}>
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                {plan.price}<span style={{ fontSize: '1rem' }}>{plan.period}</span>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button 
                className="plan-button" 
                onClick={() => handlePlanSelect(plan.name)}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;