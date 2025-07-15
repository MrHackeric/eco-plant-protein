import React, { useEffect, useRef } from 'react';
import './ProcessSection.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bioImage from "../../../assets/images/bio-process.jpg";

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const img = imageRef.current;
    if (!img) return;

    const loadHandler = () => {
      gsap.from(img, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'back.out(1.4)'
      });
    };

    if (img.complete) {
      loadHandler();
    } else {
      img.addEventListener('load', loadHandler);
    }

    return () => img.removeEventListener('load', loadHandler);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          end: 'bottom 10%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out',
      });

      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out',
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.95,
        duration: 1.1,
        delay: 0.4,
        ease: 'power4.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="process-section" ref={sectionRef}>
      <div className="process-card" ref={cardRef}>
        <div className="process-text" ref={textRef}>
          <h2>
            🌿 Our innovative bio-process is the sustainable solution to the growing demand for alternative proteins.
          </h2>
          <button className="process-button" ref={buttonRef}>
            <span className="button-text">About our Process</span>
            <span className="button-icon">
              <ArrowForwardIcon className="arrow-icon" />
            </span>
          </button>
        </div>

        <div className="process-image">
          <div className="image-container">
            <img
              ref={imageRef}
              src={bioImage}
              alt="Bio Process"
              loading="lazy"
            />
            <div className="image-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
