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
      value: 10,
      suffix: " tons",
      description:
        "• Over 10 tons of corn cobs recycled from landfills\
                    • Creating a zero-waste circular model that supports regenerative agriculture",
    },
    {
      value: 30000,
      suffix: "+",
      description:
        "•	Over 30000 protein rich meals distributed to vulnerable children and families\
•	Combating protein malnutrition in arid and semi-arid Kenyan regions\
•	Proven 40% increase in child nutritional markers in early pilots",
    },

    {
      value: 200,
      suffix: "+",
      description:
        "•	Trained 200+ youth and women in green jobs: fermentation, waste aggregation, and product distribution\
•	Established community micro-hubs for decentralized production",
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

  // Function to render description with bullet points or plain text
  const renderDescription = (description) => {
    if (!description) {
      return <p className="eco-stat-label">No description available</p>;
    }

    // If description is an array (for future-proofing)
    if (Array.isArray(description)) {
      return (
        <ul className="eco-stat-bullet-list">
          {description.map((point, index) => (
            <li key={index} className="eco-stat-label">
              {point}
            </li>
          ))}
        </ul>
      );
    }

    // Split string by common bullet point delimiters
    const points = description
      .split(/[\n•*]/) // Split by newline, •, *, or -
      .map((point) => point.trim())
      .filter((point) => point.length > 0);

    // Render single-line description as <p>
    if (points.length <= 1) {
      return <p className="eco-stat-label">{description}</p>;
    }

    // Render multi-point description as <ul>
    return (
      <ul className="eco-stat-bullet-list">
        {points.map((point, index) => (
          <li key={index} className="eco-stat-label">
            {point}
          </li>
        ))}
      </ul>
    );
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
                From Waste to Wellness.
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
                      duration={2}
                      formattingFn={(val) =>
                        formatLargeNumber(val, stat.suffix)
                      }
                      decimals={stat.suffix === "%" ? 1 : 0}
                    />
                  ) : stat.suffix ? (
                    `0${stat.suffix}`
                  ) : (
                    "0"
                  )}
                </h3>
                {renderDescription(stat.description)}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ImpactHero;
