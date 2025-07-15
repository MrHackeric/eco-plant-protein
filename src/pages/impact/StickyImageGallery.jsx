import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Water,
  EnergySavingsLeaf,
  Agriculture,
  Recycling,
  Public,
} from "@mui/icons-material";
import NatureImage from "../../assets/images/nature-image.jpg";
import FoodPlate from "../../assets/images/food-plate.jpg";
import BioProcess from "../../assets/images/bio-process.jpg";
import HeroBg from "../../assets/images/hero-bg.jpg";
import "./StickyImageGallery.css";

const impacts = [
  {
    icon: <Water />,
    label: "Conserves Water Resources",
    image: BioProcess,
  },
  {
    icon: <EnergySavingsLeaf />,
    label: "Uses Renewable Energy",
    image: FoodPlate,
  },
  {
    icon: <Agriculture />,
    label: "Minimizes Agricultural Land Use",
    image: HeroBg,
  },
  {
    icon: <Recycling />,
    label: "Recycles CO₂ Emissions",
    image: BioProcess,
  },
  {
    icon: <Public />,
    label: "Global Environmental Impact",
    image: FoodPlate,
  },
  {
    icon: <Water />,
    label: "Reduces Overfishing",
    image: NatureImage,
  },
];

const StickyImageGallery = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            // Optional: Remove this if you don't want fade-out on exit
            entry.target.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="impact-timeline-wrapper">
      {impacts.map((impact, index) => (
        <motion.div
          key={index}
          className="impact-card"
          ref={(el) => (cardsRef.current[index] = el)}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: index * 0.1,
          }}
        >
          <img
            src={impact.image}
            alt={impact.label}
            className="impact-image"
            loading="lazy"
          />
          <div className="impact-info">
            <div className="impact-icon">{impact.icon}</div>
            <h3 className="impact-text">{impact.label}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StickyImageGallery;
