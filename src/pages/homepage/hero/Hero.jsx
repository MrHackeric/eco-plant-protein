import React from "react";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Hero.css";

// Image imports
import bgImage from "../../../assets/images/hero-bg.jpg";
import img1 from "../../../assets/images/hero-bg.jpg";
import img2 from "../../../assets/images/hero-bg.jpg";
import img3 from "../../../assets/images/hero-bg.jpg";

const Hero = () => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay"></div>
      <div className="hero-content-wrapper">
        {/* Left Text Section */}
        <motion.div
          className="hero-text"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="hero-badge">eco-plant-protein</span>
          <h1 className="hero-heading">
            Revolutionizing Nutrition with AI & Agro-Waste.
          </h1>
          <p className="hero-description">
            We turn discarded corn cobs into high-value, plant-based protein using AI-optimized fermentation—tackling hunger, waste, and climate change in one solution.
          </p>
          <div className="hero-buttons">
            <button className="btn join">
              INVEST IN US <ArrowForwardIcon />
            </button>
            <button className="btn partner">EXPLORE THE INNOVATION</button>
            <button className="btn download">DOWNLOAD INVESTOR DECK</button>
          </div>
        </motion.div>

        {/* Right Images Section */}
        <motion.div
          className="hero-images"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.img src={img1} alt="innovation 1" className="hero-img top" whileHover={{ scale: 1.02 }} />
          <motion.img src={img2} alt="innovation 2" className="hero-img middle" whileHover={{ scale: 1.02 }} />
          <motion.img src={img3} alt="innovation 3" className="hero-img bottom" whileHover={{ scale: 1.02 }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
