import React from "react";
import { motion } from "framer-motion";
import { FaDrumstickBite, FaLeaf, FaBiohazard } from "react-icons/fa";
import "./ProblemSection.css";

const crisisItems = [
  {
    icon: <FaLeaf />,
    title: "Nutritional Insecurity",
    description: "Millions face chronic protein deficiency, especially in vulnerable communities.",
  },
  {
    icon: <FaBiohazard />,
    title: "Agricultural Waste",
    description: "Massive underutilization of corn cobs contributes to environmental degradation.",
  },
  {
    icon: <FaDrumstickBite />,
    title: "High-Emission Protein",
    description: "Meat production emits over 14% of global greenhouse gases.",
  },
];

const ProblemSection = () => {
  return (
    <section className="problem-section">
      <motion.div
        className="problem-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="problem-header">
          <h2>Three urgent global challenges we’re addressing</h2>
          <p>
            From malnutrition to food waste to climate change — these crises are deeply connected.
          </p>
        </div>

        <div className="crisis-grid">
          {crisisItems.map((item, index) => (
            <motion.div
              key={index}
              className="crisis-card"
              whileHover={{ y: -10, boxShadow: "0 12px 32px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="crisis-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProblemSection;
