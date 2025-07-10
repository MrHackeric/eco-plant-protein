import React from "react";
import { motion } from "framer-motion";
import "./HeroProduct.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GrassIcon from '@mui/icons-material/Grass'; // For Vegan
import PestControlIcon from '@mui/icons-material/PestControl'; // For Pesticides Free
import ScienceIcon from '@mui/icons-material/Science'; // For GMO Free
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'; // For Antibiotics Free

const HeroProduct = () => {
  return (
    <div className="hero-product-container">
      {/* Hero Section with Background Image */}
      <div className="hero-product-background">
        <div className="hero-product-content">
          <motion.div 
            className="hero-product-text-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="hero-product-title">
              Our Products
            </h1>
            <h1 className="hero-product-subtitle">We offer sustainably produced proteins that are processed into specific end products through various downstream processes.</h1>
            <motion.button 
              className="hero-product-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Request a Sample <ArrowForwardIcon className="arrow-icon" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Benefits Cards Section */}
      <div className="benefit-cards">
        {[
          {
            icon: <GrassIcon className="card-icon" />,
            title: "Vegan",
            description: "100% plant-based proteins with no animal products or byproducts.",
          },
          {
            icon: <PestControlIcon className="card-icon" />,
            title: "Pesticides Free",
            description: "Produced without the use of harmful pesticides or chemicals.",
          },
          {
            icon: <ScienceIcon className="card-icon" />,
            title: "GMO Free",
            description: "Non-genetically modified organisms used in our production process.",
          },
          {
            icon: <MedicalServicesIcon className="card-icon" />,
            title: "Antibiotics Free",
            description: "No antibiotics used at any stage of our protein production.",
          }
        ].map((card, index) => (
          <motion.div 
            key={index}
            className="benefit-card"
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroProduct;