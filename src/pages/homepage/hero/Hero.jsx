import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "./Hero.css";

import heroImage from "../../../assets/images/hero-img.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-content-wrapper">
        {/* Left Text */}
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
            We turn discarded corn cobs into high-value, plant-based protein
            using AI-optimized fermentation—tackling hunger, waste, and climate
            change in one solution.
          </p>
          <div className="hero-buttons">

            <Link to="/donate">
              <button className="btn green">
                <AttachMoneyIcon /> INVEST IN US
              </button>
            </Link>

            <Link to="/products">
              <button className="btn white">
                <InfoIcon /> EXPLORE THE INNOVATION
              </button>
            </Link>

            <Link to="/contact">
              <button className="btn outline">
                <FileDownloadIcon /> DOWNLOAD DECK
              </button>
            </Link>

          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="hero-image-container"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img src={heroImage} alt="Hero Visual" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
