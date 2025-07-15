import React, { useEffect, useRef } from 'react';
import './InvestorCTASection.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const InvestorCTASection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(buttonRefs.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="investor-cta-section" ref={sectionRef}>
      <h2 ref={titleRef}>
        🚀 Join us in scaling East Africa’s first{" "}
        <span className="highlight">AI-powered, zero-waste protein factory.</span>
      </h2>
      <div className="cta-buttons">
        <button
          ref={(el) => (buttonRefs.current[0] = el)}
          className="cta-btn"
        >
          📩 Schedule a Call
        </button>
        <button
          ref={(el) => (buttonRefs.current[1] = el)}
          className="cta-btn"
        >
          💸 Invest in the Future of Food
        </button>
        <button
          ref={(el) => (buttonRefs.current[2] = el)}
          className="cta-btn"
        >
          📊 Access Pitch Deck
        </button>
      </div>
    </section>
  );
};

export default InvestorCTASection;
