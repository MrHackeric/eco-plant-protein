import React from "react";
import { motion } from "framer-motion";
import {
  FaUtensils,
  FaLeaf,
  FaCloud,
  FaBalanceScale,
} from "react-icons/fa";
import "./ProblemSection.css";

// Import photos from /src/assets (replace with actual paths)
import malnutritionImg from "../../../assets/images/malnutritionImg.png";
import wasteImg from "../../../assets/images/wasteImg.png";
import climateImg from "../../../assets/images/climateImg.png";
import equityImg from "../../../assets/images/equityImg.png";

const crisisItems = [
  {
    icon: <FaUtensils />,
    title: "Widespread Malnutrition & Food Insecurity",
    description:
      "Over 828 million people face hunger, with 45 million children suffering from wasting. We deliver affordable, protein-rich nutrition derived from agricultural waste to close this gap.",
    image: malnutritionImg,
  },
  {
    icon: <FaLeaf />,
    title: "Agricultural Waste & Environmental Pollution",
    description:
      "Corn cobs and other byproducts are discarded or burned, releasing harmful emissions. We upcycle this waste into sustainable food, cutting pollution and regenerating ecosystems.",
    image: wasteImg,
  },
  {
    icon: <FaCloud />,
    title: "Livestock Emissions Driving Climate Change",
    description:
      "Animal agriculture fuels greenhouse gases, deforestation, and land degradation. Our plant-based proteins reduce emissions and support climate-resilient food systems.",
    image: climateImg,
  },
  {
    icon: <FaBalanceScale />,
    title: "Inequitable Access to High-Quality Nutrition",
    description:
      "In underserved regions, protein is often inaccessible. Our solution ensures clean, affordable, digestible protein reaches children, women, and marginalized groups.",
    image: equityImg,
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
          <h2>Four urgent global challenges we’re solving</h2>
          <p>
            From hunger to climate change — these interconnected crises demand
            bold solutions.
          </p>
        </div>

        <div className="crisis-grid">
          {crisisItems.map((item, index) => (
            <motion.div
              key={index}
              className="crisis-card"
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="crisis-image">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="crisis-content">
                <div className="crisis-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProblemSection;
