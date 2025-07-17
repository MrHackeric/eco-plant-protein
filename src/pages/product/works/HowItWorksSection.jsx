import React, { useEffect } from 'react';
import './HowItWorksSection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import processImage from '../../../assets/images/works.jpg';

const HowItWorksSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="how-section">
      <div className="how-container">
        <div className="how-text" data-aos="fade-up">
          <div className="how-header" data-aos="fade-right">
            <h2>How It Works</h2>
            <SettingsSuggestIcon className="how-icon" />
          </div>

          <ol className="how-steps">
            {[
              "Agro-waste sourcing: We collect corn cobs from farmers and waste aggregators.",
              "AI fermentation control: Our proprietary AI models monitor and optimize temperature, pH, and microbial balance in real-time.",
              "Protein extraction: We produce meat-alternative protein ready for food processing (school meals, relief food, etc.)"
            ].map((step, i) => (
              <li
                key={i}
                className="how-step"
                data-aos="fade-up"
                data-aos-delay={200 + i * 200}
              >
                <ArrowRightAltIcon className="step-icon" /> {step}
              </li>
            ))}
          </ol>

          <h3 className="how-features-title" data-aos="fade-up" data-aos-delay="900">Key Features</h3>
          <ul className="how-features">
            {[
              "Zero-waste circular process",
              "AI-driven for precision, scalability, and consistency",
              "Culturally adaptable for school meals & local dishes",
              "Low-cost and climate-smart alternative to meat"
            ].map((feature, i) => (
              <li
                key={i}
                className="how-feature"
                data-aos="zoom-in"
                data-aos-delay={1000 + i * 200}
              >
                <CheckCircleIcon className="check-icon" /> {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="how-image" data-aos="fade-left" data-aos-delay="700">
          <img src={processImage} alt="Process Illustration" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
