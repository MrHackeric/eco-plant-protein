import React, { useRef, useEffect, useState } from 'react';
import './NewsSection.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import newsImage1 from '../../../assets/images/news.jpg';
import newsImage2 from '../../../assets/images/news.jpg';
import newsImage3 from '../../../assets/images/news.jpg';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const newsData = [
  {
    image: newsImage1,
    title: 'Econutri at the Future Forward conference in Vienna! 🚀',
    date: 'May 15, 2024',
  },
  {
    image: newsImage2,
    title: 'We celebrate the culmination of a successful partnership with RKP InnoInvest',
    date: 'April 28, 2024',
  },
  {
    image: newsImage3,
    title: 'Future Food Tech 2024 in San Francisco',
    date: 'March 10, 2024',
  },
];

const NewsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  // Handle navigation
  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : newsData.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < newsData.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    // GSAP animations
    const ctx = gsap.context(() => {
      // Card animations
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'back.out(1.2)',
        });

        // Hover effect
        gsap.to(card, {
          scale: 1.02,
          duration: 0.3,
          paused: true,
          ease: 'power2.out',
        });

        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.02, duration: 0.3 });
          gsap.to(card.querySelector('.news-img'), { scale: 1.05, duration: 0.5 });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, duration: 0.3 });
          gsap.to(card.querySelector('.news-img'), { scale: 1, duration: 0.5 });
        });
      });

      // Header animation
      gsap.from('.news-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Button animations
      const buttons = [prevButtonRef.current, nextButtonRef.current];
      buttons.forEach(button => {
        if (button) {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
          
          button.addEventListener('mouseenter', () => {
            gsap.to(button, {
              scale: 1.1,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
          
          button.addEventListener('mouseleave', () => {
            gsap.to(button, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="news-section" ref={sectionRef}>
      <div className="news-container">
        <div className="news-header">
          <h2 className="section-title">Our News</h2>
          <div className="nav-buttons">
            <button
              ref={prevButtonRef}
              className="nav-btn"
              aria-label="Previous news"
              onClick={handlePrev}
            >
              <ArrowBackIosNewIcon className="nav-icon" />
            </button>
            <button
              ref={nextButtonRef}
              className="nav-btn"
              aria-label="Next news"
              onClick={handleNext}
            >
              <ArrowForwardIosIcon className="nav-icon" />
            </button>
          </div>
        </div>

        <div className="news-cards">
          {newsData.map((news, index) => (
            <div 
              className={`news-card ${index === activeIndex ? 'active' : ''}`} 
              key={index} 
              ref={addToCardsRef}
            >
              <div className="news-img-container">
                <img
                  src={news.image}
                  alt={`News ${index + 1}`}
                  className="news-img"
                  loading="lazy"
                />
                <div className="news-date">{news.date}</div>
                <div className="image-overlay"></div>
              </div>
              <div className="news-content">
                <h3 className="news-title">{news.title}</h3>
                <button className="read-more-btn">
                  <span className="btn-text">Read more</span>
                  <ArrowForwardIcon className="arrow-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="more-news-wrapper">
          <button className="more-news-btn">
            <span className="btn-text">Explore more News</span>
            <ArrowForwardIcon className="arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;