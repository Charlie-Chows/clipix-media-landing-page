import React from 'react';
import { FaBars } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Header = ({ menuOpen, toggleMenu, scrollToSection, darkMode, toggleDarkMode }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'offers', label: 'Special Offers' },
    { id: 'why', label: 'Why Choose Us' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    scrollToSection(id);
    if (menuOpen) {
      toggleMenu();
    }
  };

  return (
    <header>
      <div className="container">
        <div className="nav-container">
          <div className="logo" onClick={() => handleNavClick('home')}>
            CLIPIX MEDIA
          </div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {navItems.map(item => (
              <li key={item.id}>
                <a onClick={() => handleNavClick(item.id)}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <div className="mobile-menu" onClick={toggleMenu}>
              <FaBars />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;