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
          <span className="hero-badge">ECO PLANT PROTEIN</span>
          <h1 className="hero-heading">We recycle CO2 for sustainable protein production</h1>
          <p className="hero-description">
            As Green2Grow we are dedicated to empowering communities through sustainable greenhouse farming. 
            We provide innovative agricultural solutions to help individuals grow food, improve livelihoods, 
            and promote environmental sustainability.
          </p>
          <div className="hero-buttons">
            <button className="btn join">
              JOIN US <ArrowForwardIcon />
            </button>
            <button className="btn partner">PARTNER WITH US</button>
          </div>
        </motion.div>

        {/* Right Images Section */}
        <motion.div
          className="hero-images"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.img src={img1} alt="farm 1" className="hero-img top" whileHover={{ scale: 1.02 }} />
          <motion.img src={img2} alt="farm 2" className="hero-img middle" whileHover={{ scale: 1.02 }} />
          <motion.img src={img3} alt="farm 3" className="hero-img bottom" whileHover={{ scale: 1.02 }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
