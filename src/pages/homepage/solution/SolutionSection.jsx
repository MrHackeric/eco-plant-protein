import React, { useEffect, useRef } from "react";
import "./SolutionSection.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import solutionImage from "../../../assets/images/hero-bg.jpg"; // Replace with your own asset

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const SolutionSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const introRef = useRef(null);
  const pointsRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
      });

      gsap.from(introRef.current, {
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.4,
        ease: "power2.out",
      });

      gsap.from(pointsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.3,
        delay: 0.6,
        ease: "power2.out",
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 1.4,
        delay: 0.6,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="breakthrough-section" ref={sectionRef}>
      <div className="breakthrough-content">
        <div className="breakthrough-text">
          <h2 ref={headingRef}>🌿 Our Breakthrough Solution</h2>
          <p ref={introRef}>
            Eco-Plant Protein is a digital food-tech startup that upcycles agro-waste using AI-guided fermentation to produce <strong>meat-like protein</strong> that’s <strong>nutrient-rich</strong>, <strong>low-cost</strong>, and <strong>climate-smart</strong>.
          </p>
          <ul className="breakthrough-points">
            {[
              "✔ AI calibrates fermentation for max protein yield",
              "✔ Corn cobs transformed into digestible protein",
              "✔ A product that mimics meat—but greener and cheaper",
            ].map((point, i) => (
              <li key={i} ref={(el) => (pointsRef.current[i] = el)}>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="breakthrough-image-wrapper">
          <div className="breakthrough-glow" />
          <img
            src={solutionImage}
            alt="Breakthrough Illustration"
            className="breakthrough-image"
            ref={imageRef}
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
