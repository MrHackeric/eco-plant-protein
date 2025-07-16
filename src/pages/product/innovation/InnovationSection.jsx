import React from 'react';
import './InnovationSection.css';
import ScienceIcon from '@mui/icons-material/Science';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import innovationImage from '../../../assets/images/food-plate.jpg';

const InnovationSection = () => {
  return (
    <section className="innovation-section">
      <div className="innovation-container">
        <div className="innovation-text fade-in-left">
          <div className="innovation-header">
            <h2>The Innovation</h2>
            <ScienceIcon className="innovation-icon" />
          </div>
          <p className="innovation-subtitle">
            We’ve developed a digital waste-upcycling system that transforms corn cobs—often discarded—into high-quality single-cell protein using AI-optimized solid-state fermentation.
          </p>
          <ul className="innovation-list">
            {[
              '100% plant-based',
              'Easily digestible',
              'Nutrient-dense',
              'Cost-effective & sustainable',
            ].map((item, index) => (
              <li
                key={index}
                className="innovation-bullet"
                style={{ animationDelay: `${0.3 + index * 0.2}s` }}
              >
                <CheckCircleIcon className="check-icon" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="innovation-image fade-in-right">
          <img src={innovationImage} alt="Innovation showcase" />
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
