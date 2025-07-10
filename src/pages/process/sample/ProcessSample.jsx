import React from 'react';
import './ProcessSample.css';
import bagsImage from '../../../assets/images/products-section-foods.webp'; // Use your actual image path

const ProcessSample = () => {
  return (
    <section className="request-sample-section">
      <div className="content-wrapper">
        <h2 className="heading">Interested in our product?</h2>
        <h3 className="subheading">Request a sample now!</h3>
        <p className="description">
          Request a sample now to experience the future of ethical<br />
          and eco-conscious nutrition for your products.
        </p>

        <img src={bagsImage} alt="EcoNutri Sample Bags" className="sample-image" />

        <div className="buttons-container">
          <button className="primary-button">
            Request a Sample <span className="arrow">→</span>
          </button>
          <button className="secondary-button">
            Become our Partner <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSample;
