import React, { useEffect, useRef } from "react";
import "./MarketSection.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaChartBar,
  FaLeaf,
  FaChild,
  FaMapMarkedAlt,
} from "react-icons/fa";
import marketImage from "../../../assets/images/hero-bg.jpg"; // Replace with your actual image

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    icon: <FaChartBar />,
    text: "Global alternative protein market = $14B by 2027",
  },
  {
    icon: <FaLeaf />,
    text: "Plant-based diets are on the rise",
  },
  {
    icon: <FaChild />,
    text: "Kenya’s 1.1M malnourished children urgently need affordable protein",
  },
  {
    icon: <FaMapMarkedAlt />,
    text: "Eco-Plant Protein is uniquely positioned with a first-mover advantage in East Africa",
  },
];

const MarketSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(itemRefs.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="market-section" ref={sectionRef}>
      <div className="market-container">
        <div className="market-image-wrapper" ref={imageRef}>
          <img
            src={marketImage}
            alt="Market Validation"
            className="market-image"
            loading="lazy"
          />
        </div>

        <div className="market-content">
          <h2 ref={titleRef}>
            📈 Why Now?{" "}
            <span className="subtitle">(Market Validation)</span>
          </h2>
          <ul className="market-list">
            {points.map((item, index) => (
              <li
                key={index}
                className="market-point"
                ref={(el) => (itemRefs.current[index] = el)}
              >
                <span className="market-icon">{item.icon}</span>
                <span className="market-text">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
