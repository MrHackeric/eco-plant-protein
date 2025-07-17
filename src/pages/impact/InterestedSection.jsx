"use client";

import { ArrowForward, KeyboardArrowUp } from "@mui/icons-material";
import "./Interested.css";

const InterestedSection = () => {
  return (
    <>
      <section className="sample-request-section">
        <div className="sample-request-container">
          <h2 className="sample-request-title">Interested in our product?</h2>
          <h3 className="sample-request-subtitle">Request a sample now!</h3>

          <p className="sample-request-description">
            Request a sample now to experience the future of ethical and
            eco-conscious nutrition for your products.
          </p>

          <div className="product-illustration">
            <div className="decorative-plants">
              <div className="plant-element">🌿</div>
              <div className="plant-element">🍃</div>
              <div className="plant-element">🌱</div>
              <div className="plant-element">🌿</div>
              <div className="plant-element">🍃</div>
              <div className="plant-element">🌱</div>
            </div>

            <div className="product-bags">
              <div className="product-bag blue"></div>
              <div className="product-bag yellow"></div>
              <div className="product-bag green"></div>
            </div>
          </div>

          <div className="sample-cta-buttons">
            <a href="/contact" className="sample-request-button">
              Request a Sample
              <ArrowForward />
            </a>

            <a href="/contact" className="partner-link">
              Become our Partner
              <ArrowForward />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default InterestedSection;
