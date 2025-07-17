import React, { useEffect } from 'react';
import './WhyItMatters.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import mattersImage from '../../../assets/images/why.jpg';

const WhyItMatters = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const points = [
    "Disrupts traditional protein supply chains",
    "Makes high-quality protein accessible in food-insecure regions",
    "Enables decarbonized, localized food systems",
    "Offers digital traceability and quality assurance in real time"
  ];

  return (
    <section className="matters-section">
      <div className="matters-container">
        <div className="matters-text" data-aos="fade-up">
          <div className="matters-header" data-aos="fade-right" data-aos-delay="100">
            <h2>Why It Matters</h2>
            <InfoIcon className="matters-icon" />
          </div>
          <ul className="matters-points">
            {points.map((point, index) => (
              <li
                key={index}
                className="matters-point"
                data-aos="fade-up"
                data-aos-delay={200 + index * 200}
              >
                <CheckCircleIcon className="check-icon" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="matters-image" data-aos="fade-left" data-aos-delay="500">
          <img src={mattersImage} alt="Why it matters" />
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
