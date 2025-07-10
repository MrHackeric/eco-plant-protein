import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg?react';
import { Menu, Close, ArrowForward } from '@mui/icons-material';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const navItems = [
    { name: 'Products', path: '/products' },
    { name: 'Process', path: '/process' },
    { name: 'Impact', path: '/impact' },
    { name: 'Team', path: '/team' },
    { name: 'News', path: '/news' },
    { name: 'Contact Us', path: '/contact', isCta: true }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <Logo className="logo" aria-label="Econutri logo" />
            <span className="logo-text">Eco Plant Protein</span>
          </Link>
        </div>

        <nav className={`nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <ul>
            {navItems.map((item, index) => (
              <li key={item.name} className={`nav-item-${index}`}>
                <Link
                  to={item.path}
                  className={`nav-link ${item.isCta ? 'cta-button1' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  {item.isCta && <ArrowForward className="arrow-icon" />}
                  {!item.isCta && <span className="link-underline"></span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <Close className="menu-icon" />
          ) : (
            <Menu className="menu-icon" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;