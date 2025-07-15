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
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'bounce.out',
        }
      );

      // Button stagger animation
      gsap.fromTo(
        buttonRefs.current,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.25,
          ease: 'elastic.out(1, 0.4)',
        }
      );

      // Floating parallax section animation
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        backgroundPosition: '50% 100%',
        ease: 'none',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="investor-cta-section" ref={sectionRef}>
      <h2 ref={titleRef}>
        🚀 Join us in scaling East Africa’s first{' '}
        <span className="highlight">AI-powered, zero-waste protein factory.</span>
      </h2>
      <div className="cta-buttons">
        {['📩 Schedule a Call', '💸 Invest in the Future of Food', '📊 Access Pitch Deck'].map(
          (label, index) => (
            <button
              key={index}
              className="cta-btn"
              ref={(el) => (buttonRefs.current[index] = el)}
            >
              <span className="sparkle">{label}</span>
            </button>
          )
        )}
      </div>
    </section>
  );
};

export default InvestorCTASection;
