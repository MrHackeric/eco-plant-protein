// src/components/Footer/Footer.jsx
import React from 'react';
// import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            {/* <Logo className="footer-logo" /> */}
            <p>Sustainable plant protein for a healthier planet</p>
            <div className="social-links">
              <a href="#instagram" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#facebook" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#twitter" aria-label="Twitter">
                <TwitterIcon />
              </a>
            </div>
          </div>
          
          {/* ... rest of footer content ... */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;