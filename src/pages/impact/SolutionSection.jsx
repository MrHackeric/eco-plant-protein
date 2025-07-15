// SolutionSection.js
"use client";

import "./SolutionSection.css"; // Assuming team.css exists; you can create SolutionSection.css instead

const SolutionSection = () => {
  return (
    <div className="solution-section">
      <div className="solution-container">
        <div className="solution-content">
          <p className="solution-subtitle">OUR SOLUTION</p>
          <h2 className="solution-title">
            Revolutionizing Nutrition with AI & Agro-Waste
          </h2>
          {/* <ContactButton href="#process">Explore our Process</ContactButton> */}
        </div>

        <div className="solution-text">
          <p>
            We’ve developed a digital waste-upcycling system that transforms
            corn cobs—often discarded—into high-quality single-cell protein
            using AI-optimized solid-state fermentation. Our solution mimics
            meat in taste and texture, yet it's:
          </p>
          <ul>
            <li>100% plant-based</li>
            <li>Easily digestible</li>
            <li>Nutrient-dense</li>
            <li>Cost-effective & sustainable</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
