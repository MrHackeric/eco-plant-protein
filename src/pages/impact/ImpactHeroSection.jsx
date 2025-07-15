import React from "react";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./ImpactHero.css";
import AfricaImage from "../../assets/images/african-mosaic-child.png";

const ImpactHero = () => {
  const ecoStats = [
    {
      value: 80,
      suffix: "%",
      description: "CO₂ emission reduction in our production process",
    },
    {
      value: 50,
      suffix: "%",
      description: "Water conservation compared to traditional methods",
    },
    {
      value: 1.7,
      suffix: "B+",
      rawValue: 1_700_000_000,
      description: "Tons of sustainable protein produced yearly",
    },
    {
      value: 30,
      suffix: "%",
      description: "Reduction in agricultural land use impact",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const formatLargeNumber = (val, suffix) => {
    if (suffix === "B+") {
      return `${(val / 1_000_000_000).toFixed(1)}B+`;
    } else if (suffix === "M+") {
      return `${(val / 1_000_000).toFixed(1)}M+`;
    } else {
      return `${Math.floor(val)}${suffix}`;
    }
  };

  return (
    <motion.div
      className="eco-hero-container"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } },
      }}
    >
      <div className="eco-hero-background">
        <div className="eco-hero-content">
          <div className="eco-hero-layout">
            <motion.div
              className="eco-hero-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1
                className="eco-hero-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                EcoPlant Protein
              </motion.h1>
              <motion.p
                className="eco-hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Revolutionizing sustainable protein production for a healthier
                planet
              </motion.p>
              <motion.button
                className="eco-hero-button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Our Impact
                <ArrowForwardIcon className="eco-arrow-icon" />
              </motion.button>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            ref={ref}
            className="eco-stats-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {ecoStats.map((stat, index) => (
              <motion.div
                key={index}
                className="eco-stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1.2 + index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="eco-stat-value">
                  {inView ? (
                    <CountUp
                      start={stat.rawValue ? stat.rawValue * 0.7 : 0}
                      end={stat.rawValue || stat.value}
                      duration={stat.rawValue ? 5 : 3}
                      formattingFn={(val) =>
                        formatLargeNumber(val, stat.suffix)
                      }
                    />
                  ) : stat.suffix ? (
                    `0${stat.suffix}`
                  ) : (
                    "0"
                  )}
                </h3>
                <p className="eco-stat-label">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ImpactHero;
