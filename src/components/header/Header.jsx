import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg?react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
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
        <Link to="/" className="logo-link">
          <Logo className="logo" aria-label="Econutri logo" />
          <span className="logo-text">econutri</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`nav-link ${item.isCta ? 'cta-button' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
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
            <CloseIcon className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;