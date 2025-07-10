import React from "react";
import "./Products.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import backgroundImage from "../../../assets/images/products-section-foods.webp"; // Adjust path as needed

const ProductsSection = () => {
  return (
    <section className="protein-section">
      <div 
        className="protein-bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="protein-card">
        <p className="protein-text">
          From livestock feed and eco-friendly pet food to versatile non-food products and nutritious human food options,
          our proteins cater to diverse needs, ensuring a sustainable choice for every application.
        </p>
        <button className="explore-btn">
          Explore our Products <ArrowForwardIcon fontSize="small" />
        </button>
      </div>
    </section>
  );
};

export default ProductsSection;