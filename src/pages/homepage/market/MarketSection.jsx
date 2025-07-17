import React, { useEffect, useRef } from "react";
import "./MarketSection.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaChartLine,
  FaLeaf,
  FaChild,
  FaGlobeAfrica,
} from "react-icons/fa";
import marketImage from "../../../assets/images/market-img.jpg";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    icon: <FaChartLine className="icon" />,
    text: "Global alternative protein market = $14B by 2027",
  },
  {
    icon: <FaLeaf className="icon" />,
    text: "Plant-based diets are on the rise",
  },
  {
    icon: <FaChild className="icon" />,
    text: "Kenya's 1.1M malnourished children urgently need affordable protein",
  },
  {
    icon: <FaGlobeAfrica className="icon" />,
    text: "Eco-Plant Protein is uniquely positioned with a first-mover advantage in East Africa",
  },
];

const MarketSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const itemRefs = useRef([]);
  const contentRef = useRef(null);

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

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
      });

      itemRefs.current.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          x: 50,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.15,
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
            alt="Market Validation"
            className="market-image"
            loading="lazy"
          />
        </div>

        <div className="market-content" ref={contentRef}>
          <h2 ref={titleRef}>
            <span className="title-main">Market Opportunity</span>
            <span className="title-sub">Why Now Is The Right Time</span>
          </h2>
          
          <ul className="market-list">
            {points.map((item, index) => (
              <li
                key={index}
                className="market-point"
                ref={(el) => (itemRefs.current[index] = el)}
              >
                <div className="point-icon">{item.icon}</div>
                <p className="point-text">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;