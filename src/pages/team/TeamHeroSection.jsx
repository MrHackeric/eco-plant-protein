import React from "react";
import { motion } from "framer-motion";

import "./TeamHero.css";

const TeamHeroSection = () => {
  return (
    <motion.div
      className="hero-product-container"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
    >
      <div className="hero-product-background2">
        <div className="hero-product-content20">
          <motion.div
            className="hero-product-text-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="hero-product-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Our Team
            </motion.h1>

            <motion.h2
              className="hero-product-subtitle20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Driven by Purpose, Powered by Expertise.
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamHeroSection;
