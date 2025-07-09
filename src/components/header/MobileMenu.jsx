// src/components/Header/MobileMenu.jsx
import React from 'react';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import RecyclingIcon from '@mui/icons-material/Recycling';
import Nature from '@mui/icons-material/Nature';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <div className="mobile-menu-content">
        <nav>
          <ul>
            <li>
              <a href="#products" onClick={onClose}>
                <LocalFloristIcon className="menu-icon" />
                Products
              </a>
            </li>
            <li>
              <a href="#process" onClick={onClose}>
                <RecyclingIcon className="menu-icon" />
                Process
              </a>
            </li>
            <li>
              <a href="#impact" onClick={onClose}>
                <Nature className="menu-icon" /> {/* Fixed component name */}
                Impact
              </a>
            </li>
            <li>
              <a href="#about" onClick={onClose}>
                <InfoIcon className="menu-icon" />
                About
              </a>
            </li>
            <li>
              <a href="#blog" onClick={onClose}>
                <ArticleIcon className="menu-icon" />
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <button className="btn-primary">Shop Now</button>
      </div>
    </div>
  );
};

export default MobileMenu;