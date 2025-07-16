import React from "react";
import { motion } from "framer-motion";
import GrassIcon from "@mui/icons-material/Grass";
import PestControlIcon from "@mui/icons-material/PestControl";
import ScienceIcon from "@mui/icons-material/Science";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import "./HeroProduct.css";

const HeroProduct = () => {
  const benefits = [
    {
      icon: <GrassIcon className="card-icon" />,
      title: "Vegan",
      description: "100% plant-based proteins without animal byproducts.",
    },
    {
      icon: <PestControlIcon className="card-icon" />,
      title: "Pesticides Free",
      description: "No harmful pesticides used in our cultivation.",
    },
    {
      icon: <ScienceIcon className="card-icon" />,
      title: "GMO Free",
      description: "All ingredients are non-GMO and naturally sourced.",
    },
    {
      icon: <MedicalServicesIcon className="card-icon" />,
      title: "Antibiotics Free",
      description: "No antibiotics involved in our sustainable processes.",
    },
  ];

  return (
    <div className="hero-product-container">
      {/* Hero Section */}
      <div className="hero-product-background">
        <div className="hero-product-content">
          <motion.div
            className="hero-product-text-container"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-product-title">
              Eco-Plant Protein:
              <br />
              <span className="hero-subtitle">
                Where Waste Meets AI to Feed the Future
              </span>
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroProduct;
