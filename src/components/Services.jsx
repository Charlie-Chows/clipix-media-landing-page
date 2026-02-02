import React from 'react';
import { FaYoutube, FaInstagram, FaFilm, FaVideo, FaStar, FaUserTie, FaPodcast } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaYoutube />,
      title: 'YouTube Video Editing',
      description: 'Professional editing for YouTube content, optimized for viewer engagement and retention.'
    },
    {
      icon: <FaInstagram />,
      title: 'Instagram Reels & Shorts',
      description: 'Eye-catching Reels and Shorts designed to stop the scroll and increase engagement.'
    },
    {
      icon: <FaFilm />,
      title: 'YouTube Shorts',
      description: 'Vertical video editing optimized for YouTube Shorts to maximize reach and visibility.'
    },
    {
      icon: <FaVideo />,
      title: 'Vlogs & Daily Content',
      description: 'Quick turnaround editing for vlogs and daily content to keep your audience engaged.'
    },
    {
      icon: <FaStar />,
      title: 'Cinematic Edits',
      description: 'High-quality cinematic editing with color grading, effects, and professional pacing.'
    },
    {
      icon: <FaUserTie />,
      title: 'Talking-Head Videos',
      description: 'Polished editing for interview-style and presentation videos with crisp audio.'
    },
    {
      icon: <FaPodcast />,
      title: 'Podcast Video Editing',
      description: 'Transform your podcast audio into engaging video content for multiple platforms.'
    }
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>We offer a comprehensive range of video editing services tailored to your needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;