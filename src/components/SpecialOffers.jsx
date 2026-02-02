import React from 'react';
import { FaGift, FaBolt, FaUserTie, FaSyncAlt, FaUsers } from 'react-icons/fa';

const SpecialOffers = () => {
  const offers = [
    {
      icon: <FaGift />,
      title: 'Free 1 Demo Edit',
      description: 'For new clients to experience our quality before committing'
    },
    {
      icon: <FaBolt />,
      title: 'Fast Turnaround Time',
      description: 'Quick delivery without compromising on quality'
    },
    {
      icon: <FaUserTie />,
      title: 'Dedicated Project Manager',
      description: 'Single point of contact for all your projects'
    },
    {
      icon: <FaSyncAlt />,
      title: 'Revision Support',
      description: 'We work with you until you\'re completely satisfied'
    },
    {
      icon: <FaUsers />,
      title: 'Professional Team',
      description: 'Experienced editors specialized in different video styles'
    }
  ];

  return (
    <section id="offers">
      <div className="container">
        <div className="section-title">
          <h2>Special Offers</h2>
          <p>We provide added value with every package</p>
        </div>
        <div className="offers-container">
          {offers.map((offer, index) => (
            <div className="offer-item" key={index}>
              <div className="offer-icon">{offer.icon}</div>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;