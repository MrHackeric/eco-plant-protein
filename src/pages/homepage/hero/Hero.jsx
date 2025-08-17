import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Dark Overlay */}
      <motion.div
        className="hero-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 1.2 }}
      />

      <div className="hero-content-wrapper">
        {/* Left Text */}
        <motion.div
          className="hero-text"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="hero-heading"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            Turning Agricultural Waste into <span> Sustainable & Equitable Nutrition </span> 
            for all, saving countless lives
          </motion.h1>
          <motion.div
            className="hero-buttons"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
