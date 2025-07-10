"use client";

// import ContactButton from "./ContactButton";
import "../team/team.css";

const SolutionSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#2e7d32",
              marginBottom: "20px",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            OUR SOLUTION
          </p>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "600",
              color: "#333",
              marginBottom: "30px",
              lineHeight: "1.2",
              fontFamily: "Red Hat Display, sans-serif",
            }}
          >
            Our innovative bio-process is the sustainable solution to the
            increasing demand for alternative proteins.
          </h2>
          {/* <ContactButton href="#process">Explore our Process</ContactButton> */}
        </div>

        <div>
          <p
            style={{
              fontSize: "1rem",
              color: "#666",
              lineHeight: "1.6",
              marginBottom: "20px",
              fontFamily: "Red Hat Display, sans-serif",
            }}
          >
            With the potential for significant economic and environmental
            impact, our process utilizes CO₂ and green Hydrogen to efficiently
            produce high-quality proteins that can be processed for various
            applications, including animal feed, human food, and cosmetic or
            technical proteins.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "#666",
              lineHeight: "1.6",
              fontFamily: "Red Hat Display, sans-serif",
            }}
          >
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
