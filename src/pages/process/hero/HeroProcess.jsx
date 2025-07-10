import React from "react";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./HeroProcess.css";

const HeroProcess = () => {
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
      <div className="hero-product-background">
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
              Our Process
            </motion.h1>

            <motion.h2
              className="hero-product-subtitle"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Our innovative bio-process is the sustainable solution to the
              increasing demand for alternative proteins.
            </motion.h2>

            <motion.button
              className="hero-product-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Request a Sample <ArrowForwardIcon className="arrow-icon" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroProcess;
