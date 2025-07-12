import React from "react";
import { motion } from "framer-motion";
import "./Products.css";

const ProductsSection = () => {
  return (
    <section className="products-video-section">
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/MRt8DxYhN90?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&playsinline=1"
          title="Sustainable Protein Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="video-overlay" />

      <motion.div
        className="overlay-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        style={{
          zIndex: 3,
          position: "relative",
          color: "#fff",
          textAlign: "center",
          fontSize: "2rem",
          padding: "1rem",
        }}
      >
        Watch How We Grow Sustainable Protein 🌱
      </motion.div>
    </section>
  );
};

export default ProductsSection;
