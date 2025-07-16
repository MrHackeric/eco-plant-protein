import React from 'react';
import './HowItWorksSection.css';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import processImage from '../../../assets/images/food-plate.jpg'; // Replace with your relevant image

const HowItWorksSection = () => {
  return (
    <section className="how-section">
      <div className="how-container">
        <div className="how-text fade-in-left">
          <div className="how-header">
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
                style={{ animationDelay: `${i * 0.2 + 0.3}s` }}
              >
                <ArrowRightAltIcon className="step-icon" /> {step}
              </li>
            ))}
          </ol>

          <h3 className="how-features-title">Key Features</h3>
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
                style={{ animationDelay: `${i * 0.2 + 0.9}s` }}
              >
                <CheckCircleIcon className="check-icon" /> {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="how-image fade-in-right">
          <img src={processImage} alt="Process Illustration" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
