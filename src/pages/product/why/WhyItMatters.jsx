import React from 'react';
import './WhyItMatters.css';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import mattersImage from '../../../assets/images/food-plate.jpg'; // Replace with appropriate image

const WhyItMatters = () => {
  const points = [
    "Disrupts traditional protein supply chains",
    "Makes high-quality protein accessible in food-insecure regions",
    "Enables decarbonized, localized food systems",
    "Offers digital traceability and quality assurance in real time"
  ];

  return (
    <section className="matters-section">
      <div className="matters-container">
        <div className="matters-text fade-in-left">
          <div className="matters-header">
            <h2>Why It Matters</h2>
            <InfoIcon className="matters-icon" />
          </div>
          <ul className="matters-points">
            {points.map((point, index) => (
              <li
                key={index}
                className="matters-point"
                style={{ animationDelay: `${index * 0.2 + 0.3}s` }}
              >
                <CheckCircleIcon className="check-icon" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="matters-image fade-in-right">
          <img src={mattersImage} alt="Why it matters" />
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
