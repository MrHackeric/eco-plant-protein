import React from "react";
import { motion } from "framer-motion";
import "./HeroProduct.css";

const HeroProduct = () => {
  return (
    <div className="hero-product-container">
      {/* Hero Section */}
      <div className="hero-product-background">
        <motion.h1
          className="hero-product-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Product
        </motion.h1>
      </div>
    </div>
  );
};

export default HeroProduct;
