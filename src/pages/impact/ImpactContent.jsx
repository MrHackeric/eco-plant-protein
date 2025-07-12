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
      const elements = [statementRef.current, descriptionRef.current];
      elements.forEach((element) => {
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate when element is in view
        const isInView =
          rect.top <= windowHeight * 0.75 && rect.bottom >= windowHeight * 0.25;

        if (isInView) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0) scale(1)";
        }
      });

      // Handle image containers animation
      const imageContainers = document.querySelectorAll(
        ".impact-image-container"
      );
      imageContainers.forEach((container, index) => {
        const rect = container.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.85;

        if (isInView) {
          container.style.animationDelay = `${index * 0.1}s`;
          container.style.opacity = "1";
          container.style.transform = "translateY(0)";
        }
      });
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
    <div className="impact-content9" ref={impactRef}>
      {/* Impact Statement - Shows First */}
      <h2 className="impact-statement9" ref={statementRef}>
        Our impact goes beyond
        <br />
        sustainable protein production.
      </h2>

      {/* Description Section - Shows as Statement Fades */}
      <div className="impact-description-container9" ref={descriptionRef}>
        <p className="impact-description9">
          By utilizing CO2 and green hydrogen to create high-quality proteins,
          we're helping to reduce{" "}
          <span className="highlight">greenhouse gas emissions</span>,{" "}
          <span className="highlight">decrease land usage</span> for
          agriculture, and{" "}
          <span className="highlight">conserve natural resources</span>.
        </p>
      </div>

      {/* Auto-scrolling Image Carousel */}
      <div className="impact-image-carousel">
        <div className="carousel-track">
          {/* First set of images */}
          <div className="impact-image-container">
            <img
              src={FoodPlate}
              alt="Sustainable Agriculture"
              className="impact-image"
            />
            <div className="image-overlay">
              <h3>Sustainable Agriculture</h3>
              <p>Reducing land usage and preserving ecosystems</p>
            </div>
          </div>
          <div className="impact-image-container">
            <img
              src={BioProcess}
              alt="Ocean Conservation"
              className="impact-image"
            />
            <div className="image-overlay">
              <h3>Ocean Conservation</h3>
              <p>Protecting marine life and reducing ocean pollution</p>
            </div>
          </div>
          <div className="impact-image-container">
            <img
              src={NatureImage}
              alt="Renewable Energy"
              className="impact-image"
            />
            <div className="image-overlay">
              <h3>Renewable Energy</h3>
              <p>Using clean energy in our production process</p>
            </div>
          </div>
          <div className="impact-image-container">
            <img src={HeroBg} alt="Carbon Reduction" className="impact-image" />
            <div className="image-overlay">
              <h3>Carbon Reduction</h3>
              <p>Converting CO2 into valuable protein</p>
            </div>
          </div>

          {/* Duplicate set for continuous scrolling */}
          <div className="impact-image-container">
            <img
              src={FoodPlate}
              alt="Sustainable Agriculture"
              className="impact-image"
            />
            <div className="image-overlay">
              <h3>Sustainable Agriculture</h3>
              <p>Reducing land usage and preserving ecosystems</p>
            </div>
          </div>
          <div className="impact-image-container">
            <img
              src={BioProcess}
              alt="Ocean Conservation"
              className="impact-image"
            />
            <div className="image-overlay">
              <h3>Ocean Conservation</h3>
              <p>Protecting marine life and reducing ocean pollution</p>
            </div>
          </div>
          <div className="impact-image-container">
            <img
              src={NatureImage}
              alt="Renewable Energy"
              className="impact-image"
            />
            <div className="image-overlay">
              <h3>Renewable Energy</h3>
              <p>Using clean energy in our production process</p>
            </div>
          </div>
          <div className="impact-image-container">
            <img src={HeroBg} alt="Carbon Reduction" className="impact-image" />
            <div className="image-overlay">
              <h3>Carbon Reduction</h3>
              <p>Converting CO2 into valuable protein</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactContent;
