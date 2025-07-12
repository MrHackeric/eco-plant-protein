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
            Our innovative bio-process is the sustainable solution to the
            increasing demand for alternative proteins.
          </h2>
          {/* <ContactButton href="#process">Explore our Process</ContactButton> */}
        </div>

        <div className="solution-text">
          <p>
            With the potential for significant economic and environmental
            impact, our process utilizes CO₂ and green Hydrogen to efficiently
            produce high-quality proteins that can be processed for various
            applications, including animal feed, human food, and cosmetic or
            technical proteins.
          </p>
          <p>
            By focusing on animal feed proteins, we can quickly achieve our
            sustainability goals while providing an economically viable
            alternative for producers of feed and food protein products. Plus,
            our process allows industrial plants to reduce their CO₂ emissions
            while utilizing carbon as a valuable resource for production.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
