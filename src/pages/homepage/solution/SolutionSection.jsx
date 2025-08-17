import React, { useEffect, useRef } from "react";
import "./SolutionSection.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import solutionImage from "../../../assets/images/solution-img.jpg";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const SolutionSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphsRef = useRef([]);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
      });

      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
      });

      gsap.from(paragraphsRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.3,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
      });

      gsap.from(imageRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1.4,
        delay: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="solution-section" ref={sectionRef}>
      <div className="solution-container" ref={contentRef}>
        {/* Text Section */}
        <div className="solution-text">
          <h2 ref={headingRef}>🌿 Our Solution</h2>
          {[
            "At Eco-Plant Protein, we’ve developed an innovative, AI-powered fermentation technology that transforms agricultural waste—specifically corn cobs—into high-quality, digestible plant protein. This circular solution not only diverts biomass from polluting the environment but also produces an affordable and sustainable alternative to meat protein.",
            "Using machine learning algorithms, we optimize fermentation parameters in real time, ensuring consistent production of single-cell protein with the right amino acid profile for human consumption. This breakthrough process delivers a safe, scalable, and climate-smart food innovation that supports communities facing food insecurity, malnutrition, and economic hardship.",
            "Our protein can be integrated into school feeding programs, emergency nutrition packs, or consumer-ready vegan products. It’s a game-changer for regions vulnerable to climate change, resource scarcity, and nutritional inequality.",
          ].map((text, i) => (
            <p key={i} ref={(el) => (paragraphsRef.current[i] = el)}>
              {text}
            </p>
          ))}
        </div>

        {/* Image Section */}
        <div className="solution-image-wrapper">
          <div className="solution-glow" />
          <img
            src={solutionImage}
            alt="Eco-Plant Protein Solution"
            className="solution-image"
            ref={imageRef}
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
