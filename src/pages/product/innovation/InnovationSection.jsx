import React, { useEffect } from 'react';
import './InnovationSection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScienceIcon from '@mui/icons-material/Science';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import innovationImage from '../../../assets/images/innovation.jpg';

const InnovationSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="innovation-section">
      <div className="innovation-container">
        <div className="innovation-text" data-aos="fade-up" data-aos-delay="100">
          <div className="innovation-header" data-aos="fade-right" data-aos-delay="200">
            <h2>The Innovation</h2>
            <ScienceIcon className="innovation-icon" />
          </div>

          <p className="innovation-subtitle" data-aos="fade-left" data-aos-delay="300">
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
                data-aos="zoom-in"
                data-aos-delay={400 + index * 200}
              >
                <CheckCircleIcon className="check-icon" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="innovation-image" data-aos="fade-left" data-aos-delay="500">
          <img src={innovationImage} alt="Innovation showcase" />
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
