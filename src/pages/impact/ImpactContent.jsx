"use client";
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

        const isInView =
          rect.top <= windowHeight * 0.75 && rect.bottom >= windowHeight * 0.25;

        if (isInView) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0) scale(1)";
        }
      });
    };

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
    handleScroll();

    return () => window.removeEventListener("scroll", optimizedScrollHandler);
  }, []);

  return (
    <div className="impact-content9" ref={impactRef}>
      <h2 className="impact-statement9" ref={statementRef}>
        Our impact goes beyond
        <br />
        sustainable protein production.
      </h2>

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
    </div>
  );
};

export default ImpactContent;
