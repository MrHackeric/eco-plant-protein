import React, { useRef } from 'react';
import './HydrogenCards.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import card1 from '../../../assets/images/hero-bg.jpg';
import card2 from '../../../assets/images/hero-bg.jpg';
import card3 from '../../../assets/images/hero-bg.jpg';

const cards = [
  {
    id: 1,
    image: card1,
    text: 'Hydrogen produced from green energy is the key compound for microbial transformation of CO₂ into protein.',
  },
  {
    id: 2,
    image: card2,
    text: 'Microbes feed on CO₂ and hydrogen, producing protein as a natural metabolic byproduct.',
  },
  {
    id: 3,
    image: card3,
    text: 'The result is a sustainable protein source with minimal environmental footprint.',
  },
];

export default function HydrogenCards() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  return (
    <div className="stacked-cards-wrapper" ref={ref}>
{cards.map((card, i) => {
  const totalCards = cards.length;
  const start = i / totalCards;
  const end = start + 0.2; // faster transition

  const y = useTransform(scrollYProgress, [start, end], [0, -300]);
  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.85]);

  return (
    <motion.div
      key={i}
      className="stacked-card"
      style={{
        zIndex: totalCards - i,
        y,
        opacity,
        scale,
      }}
    >
      <div className="image-text">
        <img src={card.image} alt="" />
        <p>{card.text}</p>
      </div>
      <span className="card-number">
        {card.id < 10 ? `0${card.id}` : card.id}
      </span>
    </motion.div>
  );
})}

    </div>
  );
}
