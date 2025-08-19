import React, { useEffect, useRef } from "react";
import "./MarketSection.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import marketImage from "../../../assets/images/market-img.JPG";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const MarketSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const paragraphsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -80,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      paragraphsRef.current.forEach((p, index) => {
        gsap.from(p, {
          scrollTrigger: {
            trigger: p,
            start: "top 90%",
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="market-section" ref={sectionRef}>
      <div className="market-container">
        <div className="market-image-wrapper" ref={imageRef}>
          <div className="image-overlay"></div>
          <img
            src={marketImage}
            alt="Market Opportunity"
            className="market-image"
            loading="lazy"
          />
        </div>

        <div className="market-content" ref={contentRef}>
          <h2 ref={titleRef}>
            <span className="title-main">Market Opportunity</span>
          </h2>

          <p ref={(el) => (paragraphsRef.current[0] = el)}>
            The global plant-based protein market is projected to reach USD 23.4
            billion by 2028, driven by rising health awareness, climate
            concerns, and shifting dietary preferences. In Africa alone, over
            60% of the population is under 25, creating a growing demand for
            sustainable, affordable nutrition solutions.
          </p>

          <p ref={(el) => (paragraphsRef.current[1] = el)}>
            Simultaneously, over 30% of all food produced is wasted, and yet
            more than 282 million people in Sub-Saharan Africa face food
            insecurity. Corn cobs—an abundant yet underutilized agricultural
            waste—represent a vast, untapped resource.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
