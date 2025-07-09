import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import ForestIcon from "@mui/icons-material/Forest";
import ScienceIcon from "@mui/icons-material/Science";
import SpaIcon from '@mui/icons-material/Spa';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Hero Section with Background Image */}
      <div className="hero-background">
        <div className="hero-content">
          <motion.div 
            className="hero-text-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="hero-title">
              We recycle CO<sub>2</sub> for sustainable protein production
            </h1>
            <motion.button 
              className="hero-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Request a Sample <ArrowForwardIcon className="arrow-icon" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="feature-cards">
        {[
          {
            icon: <ForestIcon className="card-icon" />,
            title: "We offer sustainably produced proteins...",
            description: "We offer sustainably produced proteins that are processed into specific end products through various downstream processes.",
            buttonText: "Our Products"
          },
          {
            icon: <ScienceIcon className="card-icon" />,
            title: "Our high-tech bio-process...",
            description: "Our high tech bio-process uses carbon dioxide as a source to produce high quality proteins to secure the world's protein demand.",
            buttonText: "Our Process"
          },
          {
            icon: <SpaIcon className="card-icon" />,
            title: "Our impact on sustainability...",
            description: "Our bio-process is paving the way for a more sustainable future in protein production and making a positive impact on the environment.",
            buttonText: "Our Impact"
          }
        ].map((card, index) => (
          <motion.div 
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <motion.div 
              className="icon-container"
              animate={{ 
                rotate: [0, 5, -5, 0],
                transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }
              }}
            >
              {card.icon}
            </motion.div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <motion.button 
              className="card-button"
              whileHover={{ backgroundColor: "#04713d", color: "#fff" }}
            >
              {card.buttonText} <ArrowForwardIcon className="arrow-icon" />
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;