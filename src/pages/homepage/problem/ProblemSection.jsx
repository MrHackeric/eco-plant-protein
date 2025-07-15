import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDrumstickBite, FaLeaf, FaBiohazard } from "react-icons/fa";
import "./ProblemSection.css";

const crisisItems = [
  {
    icon: <FaLeaf />,
    text: "Severe protein deficiency in vulnerable communities",
  },
  {
    icon: <FaBiohazard />,
    text: "Agricultural waste pollution (corn cobs are massively underutilized)",
  },
  {
    icon: <FaDrumstickBite />,
    text: "Livestock-based protein that worsens climate change",
  },
];

const ProblemSection = () => {
  const [currentCrisis, setCurrentCrisis] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCrisis((prev) => (prev + 1) % crisisItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="problem-section">
      <div className="problem-card">
        <div className="problem-text">
          <h2>
            🌍 One-third of global food is wasted. <br />
            🧒 1 in 3 children in Kenya is malnourished. <br />
            🐄 Traditional meat production emits 14.5% of global GHGs.
          </h2>
          <p>We are solving three interconnected crises:</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentCrisis}
            className="animated-crisis-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="crisis-icon">{crisisItems[currentCrisis].icon}</div>
            <div className="crisis-text">{crisisItems[currentCrisis].text}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProblemSection;
