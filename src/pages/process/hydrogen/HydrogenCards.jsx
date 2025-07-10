import React, { useEffect } from 'react';
import './HydrogenCards.css';

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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            entry.target.style.transitionDelay = `${index * 0.2}s`;
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.stacked-card');
    cards.forEach((card) => {
      observer.observe(card);

      // Optional: Add interactive tilt on hover
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * 10;
        const rotateY = ((x / rect.width) - 0.5) * -10;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
      });
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
        card.onmousemove = null;
        card.onmouseleave = null;
      });
    };
  }, []);

  return (
    <div className="cards-section">
      <h2 className="section-title">Hydrogen-Powered Protein</h2>
      <div className="cards-container">
        {cards.map((card, i) => (
          <div
            key={card.id}
            className="stacked-card"
            data-index={i}
            style={{ transform: `translateY(${i * 20}px)` }}
          >
            <div className="image-wrapper">
              <img src={card.image} alt={`Card ${card.id}`} />
            </div>
            <div className="card-content">
              <p>{card.text}</p>
              <span className="card-number">{card.id < 10 ? `0${card.id}` : card.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
