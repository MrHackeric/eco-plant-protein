import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ImpactHero.css";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const ecoStats = [
  {
    value: 10,
    suffix: "+ Tons",
    description: "Agricultural Waste Upcycled",
  },
  {
    value: 30000,
    suffix: "+",
    description:
      "Over 30,000 protein-rich meals distributed to vulnerable children and families",
  },
  {
    value: 200,
    suffix: "+",
    description: "Livelihood Creations",
  },
];

const ImpactHero = () => {
  const statRefs = useRef([]);
  const [counts, setCounts] = useState(ecoStats.map(() => 0));

  useEffect(() => {
    const ctx = gsap.context(() => {
      statRefs.current.forEach((el, index) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 80%",
          onEnter: () => {
            gsap.to(
              {},
              {
                duration: 2,
                ease: "power2.out",
                onUpdate: function () {
                  const progress = this.progress();
                  const target = ecoStats[index].value;
                  const formatted = Math.floor(progress * target);
                  setCounts((prev) => {
                    const newCounts = [...prev];
                    newCounts[index] = formatted;
                    return newCounts;
                  });
                },
              }
            );
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      className="eco-hero-container"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } },
      }}
    >
      <div className="eco-hero-background">
        <div className="eco-hero-content">
          <div className="eco-hero-layout">
            <motion.div
              className="eco-hero-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1
                className="eco-hero-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                EcoPlant Protein
              </motion.h1>
              <motion.p
                className="eco-hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                From Waste to Wellness.
              </motion.p>
              <motion.button
                className="eco-hero-button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Our Impact
                <ArrowForwardIcon className="eco-arrow-icon" />
              </motion.button>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            className="eco-stats-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {ecoStats.map((stat, index) => (
              <motion.div
                key={index}
                className="eco-stat-card"
                ref={(el) => (statRefs.current[index] = el)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1.2 + index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="eco-stat-value">
                  {counts[index].toLocaleString()}
                  {stat.suffix}
                </h3>
                <h2 className="eco-stat-description">{stat.description}</h2>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ImpactHero;
