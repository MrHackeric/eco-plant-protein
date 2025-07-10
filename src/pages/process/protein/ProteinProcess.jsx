import React, { useRef } from 'react';
import './ProteinProcess.css';
import { motion, useInView, useAnimation } from 'framer-motion';
import image1 from '../../../assets/images/products-section-foods.webp';
import image2 from '../../../assets/images/products-section-foods.webp';
import image3 from '../../../assets/images/products-section-foods.webp';

const ProteinProcess = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.section
      className="protein-section"
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div className="image-grid" variants={containerVariants}>
        {[image1, image2, image3].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`Image ${i + 1}`}
            className="grid-image"
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
          />
        ))}
      </motion.div>

      <motion.div className="text-block" variants={itemVariants}>
        <p className="description">
          The protein can be transformed into livestock feed, pet food, food products or any other products based on protein.
        </p>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Explore our Products <span className="arrow">→</span>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default ProteinProcess;
