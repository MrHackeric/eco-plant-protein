import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  AgricultureRounded,
  MailLockOutlined,
  FoodBankOutlined,
  WindPowerOutlined,
  Work,
} from "@mui/icons-material";
import NutritionalOutcome from "../../assets/images/impact/nutritional_outcome.jpeg";
import LivelihoodCreation from "../../assets/images/impact/livelihood_creation.JPG";
import AgriculturalWaste from "../../assets/images/impact/agricultural_waste.JPG";
import Recognition from "../../assets/images/impact/recognition.jpeg";
import ClimateAction from "../../assets/images/impact/climate_action.jpeg";
import "./StickyImageGallery.css";

const impacts = [
  {
    icon: <AgricultureRounded />,
    label: "Agricultural Waste Upcycled",
    image: AgriculturalWaste,
    description:
      "Over 10 tons of corn cobs recycled from landfills • Creating a zero-waste circular model that supports regenerative agriculture",
  },
  {
    icon: <FoodBankOutlined />,
    label: "Nutritional Outcomes",
    image: NutritionalOutcome,
    description:
      "Over 30,000 protein-rich meals distributed to vulnerable children and families •	Combating protein malnutrition in arid and semi-arid Kenyan regions•	Proven 40% increase in child nutritional markers in early pilots",
  },
  {
    icon: <Work />,
    label: "Livelihood Creation",
    image: LivelihoodCreation,
    description:
      "Trained 200+ youth and women in green jobs: fermentation, waste aggregation, and product distribution •	Established community micro-hubs for decentralized production",
  },
  {
    icon: <WindPowerOutlined />,
    label: "Climate Action",
    image: ClimateAction,
    description:
      "Reduced carbon emissions by replacing livestock-based protein •	Lowered methane and water usage with plant-based fermentation •	Aligned with Kenya’s NDC goals on food and waste",
  },
  {
    icon: <MailLockOutlined />,
    label: " Recognition",
    image: Recognition,
    description:
      "Finalist in top innovation platforms (FAO, African Union, etc.) •	Strategic partnerships with research institutions and grassroots networks",
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
            <div className="impact-text-group">
              <h3 className="impact-text">{impact.label}</h3>
              {impact.description && (
                <ul className="impact-description">
                  {impact.description.split("•").map((point, i) => (
                    <li key={i}>{point.trim()}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StickyImageGallery;
