// ImpactHero.js
import React from "react";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./ImpactHero.css"; // Renamed CSS file
import AfricaImage from "../../assets/images/african-mosaic-child.png";

const ImpactHero = () => {
  const ecoStats = [
    {
      value: "80%",
      description: "CO₂ emission reduction in our production process",
    },
    {
      value: "50%",
      description: "Water conservation compared to traditional methods",
    },
    {
      value: "1M+",
      description: "Tons of sustainable protein produced yearly",
    },
    { value: "30%", description: "Reduction in agricultural land use impact" },
  ];

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
                Revolutionizing sustainable protein production for a healthier
                planet
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1.2 + index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <h3 className="eco-stat-value">{stat.value}</h3>
                <p className="eco-stat-label">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ImpactHero;
