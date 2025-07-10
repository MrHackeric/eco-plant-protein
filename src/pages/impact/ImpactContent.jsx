"use client";

import "./ImpactContent.css";

const ImpactContent = () => {
  return (
    <div className="impact-content">
      {/* Description Section */}
      <p className="impact-description">
        By utilizing CO2 and green hydrogen to create high-quality proteins,
        we're helping to reduce{" "}
        <span className="highlight">greenhouse gas emissions</span>,{" "}
        <span className="highlight">decrease land usage</span> for agriculture,
        and <span className="highlight">conserve natural resources</span>.
      </p>

      {/* Video Section */}
      <div className="impact-videos">
        <div className="video-container">
          <img
            src="/placeholder.svg?height=300&width=500"
            alt="Ocean sustainability"
            className="video-thumbnail"
          />
        </div>

        <div className="video-container">
          <img
            src="/placeholder.svg?height=300&width=500"
            alt="Renewable energy"
            className="video-thumbnail"
          />
        </div>
      </div>

      {/* Impact Statement */}
      <h2 className="impact-statement">
        Our impact goes beyond
        <br />
        sustainable protein production.
      </h2>
    </div>
  );
};

export default ImpactContent;
