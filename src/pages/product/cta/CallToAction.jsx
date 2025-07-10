import React from 'react';
import './CallToAction.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CallToAction = () => {
  return (
    <section className="sustainable-section">
      <div className="sustainable-content">
        <h1 className="sustainable-title">
          Revolutionize your products <br /> with sustainable proteins!
        </h1>
        <p className="sustainable-subtitle">
          Request a sample now to experience the future of ethical <br />
          and eco-conscious nutrition for your products.
        </p>

        <img
          src="/images/sample-bags.png"
          alt="Protein product illustration"
          className="sustainable-image"
        />

        <div className="sustainable-buttons">
          <button className="btn primary">
            Request a Sample <ArrowForwardIcon />
          </button>
          <button className="btn secondary">
            Become our Partner <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
