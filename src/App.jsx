import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import SpecialOffers from './components/SpecialOffers';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or user preference
    const savedTheme = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme ? JSON.parse(savedTheme) : prefersDark;
  });

  useEffect(() => {
    // Apply dark theme class to body
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (id) => {
    closeMenu();
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 150);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handlePlanSelect = (planName) => {
    alert(`Thank you for your interest in the ${planName}! We'll contact you shortly to discuss the details.`);
  };

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.nav-container')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="App">
      <Header 
        menuOpen={menuOpen} 
        toggleMenu={toggleMenu} 
        scrollToSection={scrollToSection}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <Pricing handlePlanSelect={handlePlanSelect} />
      <SpecialOffers />
      <WhyChooseUs />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;