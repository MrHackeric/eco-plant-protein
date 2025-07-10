"use client";
import FoodPlate from "../../assets/images/food-plate.jpg";
import BioProcess from "../../assets/images/bio-process.jpg";
import NatureImage from "../../assets/images/nature-image.jpg";
import HeroBg from "../../assets/images/hero-bg.jpg";

import { useEffect, useRef } from "react";
import "./ImpactContent.css";

const ImpactContent = () => {
  const impactRef = useRef(null);
  const statementRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !impactRef.current ||
        !statementRef.current ||
        !descriptionRef.current
      )
        return;

      const impactRect = impactRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the impact section
      const sectionHeight = impactRef.current.offsetHeight;
      const scrollProgress = Math.max(
        0,
        Math.min(1, -impactRect.top / (sectionHeight * 0.5))
      );

      // Statement animation - fade out more gradually
      const statementOpacity = Math.max(0, 1 - scrollProgress * 1.5);
      const statementTransform = scrollProgress * 50;

      // Description animation - fade in more clearly with better timing
      const descriptionProgress = Math.max(
        0,
        Math.min(1, (scrollProgress - 0.2) * 1.8)
      );
      const descriptionOpacity = descriptionProgress;
      const descriptionTransform = Math.max(0, 40 - descriptionProgress * 40);

      // Apply animations with smoother transitions
      if (statementRef.current) {
        statementRef.current.style.opacity = statementOpacity;
        statementRef.current.style.transform = `translateY(-${statementTransform}px)`;
      }

      if (descriptionRef.current) {
        descriptionRef.current.style.opacity = descriptionOpacity;
        descriptionRef.current.style.transform = `translateY(${descriptionTransform}px)`;
        // Add scale effect for better visibility
        const scale = 0.95 + descriptionProgress * 0.05;
        descriptionRef.current.style.transform += ` scale(${scale})`;
      }
    };

    // Use requestAnimationFrame for smooth animations
    let ticking = false;
    const optimizedScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizedScrollHandler, {
      passive: true,
    });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", optimizedScrollHandler);
  }, []);

  return (
    <div className="impact-content" ref={impactRef}>
      {/* Impact Statement - Shows First */}
      <h2 className="impact-statement" ref={statementRef}>
        Our impact goes beyond
        <br />
        sustainable protein production.
      </h2>

      {/* Description Section - Shows as Statement Fades */}
      <div className="impact-description-container" ref={descriptionRef}>
        <p className="impact-description">
          By utilizing CO2 and green hydrogen to create high-quality proteins,
          we're helping to reduce{" "}
          <span className="highlight">greenhouse gas emissions</span>,{" "}
          <span className="highlight">decrease land usage</span> for
          agriculture, and{" "}
          <span className="highlight">conserve natural resources</span>.
        </p>
      </div>

      {/* Cascading Video Section */}
      <div className="impact-videos-cascade">
        <div className="video-container video-1">
          <img
            src={FoodPlate}
            alt="Sustainable Agriculture"
            className="video-thumbnail"
          />
          <div className="video-overlay">
            <h3>Sustainable Agriculture</h3>
          </div>
        </div>

        <div className="video-container video-2">
          <img
            src={BioProcess}
            alt="Ocean Conservation"
            className="video-thumbnail"
          />
          <div className="video-overlay">
            <h3>Ocean Conservation</h3>
          </div>
        </div>

        <div className="video-container video-3">
          <img
            src={NatureImage}
            alt="Renewable Energy"
            className="video-thumbnail"
          />
          <div className="video-overlay">
            <h3>Renewable Energy</h3>
          </div>
        </div>

        <div className="video-container video-4">
          <img
            src={HeroBg}
            alt="Carbon Reduction"
            className="video-thumbnail"
          />
          <div className="video-overlay">
            <h3>Carbon Reduction</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactContent;
