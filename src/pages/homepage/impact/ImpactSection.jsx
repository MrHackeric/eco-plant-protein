import React, { useEffect, useRef } from "react";
import "./ImpactSection.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import impactImage from "../../../assets/images/hero-bg.jpg";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const ImpactSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonRef = useRef(null);
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
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
      });

      gsap.from(subheadingRef.current, {
        scrollTrigger: {
          trigger: subheadingRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.4,
        ease: "power2.out",
      });

      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
        scale: 0.85,
        opacity: 0,
        duration: 1.4,
        delay: 0.3,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="impact-modern-section" ref={sectionRef}>
      <div className="impact-modern-content">
        <div className="impact-modern-text">
          <h2 ref={headingRef}>Redefining Global Protein Innovation</h2>
          <p ref={subheadingRef}>
            Through futuristic bio-engineering, we empower the world with sustainable, versatile protein solutions that span food, wellness, and beyond.
          </p>
          <button className="impact-modern-button" ref={buttonRef}>
            <span>Learn More</span>
            <ArrowForwardIcon className="icon" />
          </button>
        </div>
        <div className="impact-modern-image-wrapper">
          <div className="impact-modern-image-glow"></div>
          <img
            src={impactImage}
            alt="Impact Visual"
            className="impact-modern-image"
            ref={imageRef}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
