import React from "react";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./ImpactHero.css";

const ImpactHero = () => {
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
      <div className="hero-product-background1">
        <div className="hero-product-content">
          <motion.div
            className="hero-product-text-container"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="hero-product-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Our Impact
            </motion.h1>

            {/* <motion.h2
              className="hero-product-subtitle"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Our multidisciplinary team is dedicated to meet the challenges of
              creating a process that can be both ecologically feasible as well
              as economically valuable.
            </motion.h2> */}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ImpactHero;
