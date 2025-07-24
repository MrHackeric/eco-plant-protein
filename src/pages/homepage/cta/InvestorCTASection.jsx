import React, { useEffect, useRef } from 'react';
import './InvestorCTASection.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import PitchDeck from "../../../assets/docs/Green and White Modern Agriculture Technology Pitch Deck Presentation.pdf";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const InvestorCTASection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        buttonRefs.current,
        { opacity: 0, y: 20, scale: 0.95 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'back.out(1.7)',
        }
      );

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

  const links = ['/contact', '/donate'];
  const labels = [
    'Schedule a Call',
    'Invest in the Future of Food',
    'Access Pitch Deck',
  ];

  return (
    <section className="investor-cta-section" ref={sectionRef}>
      <div className="cta-content">
        <h2 ref={titleRef}>
          Join us in scaling East Africa’s first{' '}
          <span className="highlight">AI-powered, zero-waste protein factory.</span>
        </h2>
        <div className="cta-buttons">
          {labels.map((label, index) => {
            if (index === 2) {
              return (
                <a
                  href={PitchDeck}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  ref={(el) => (buttonRefs.current[index] = el)}
                >
                  <button className="cta-btn outline">
                    <FileDownloadIcon style={{ marginRight: 8 }} />
                    DOWNLOAD DECK
                  </button>
                </a>
              );
            }

            return (
              <Link to={links[index]} key={index}>
                <button
                  className="cta-btn"
                  ref={(el) => (buttonRefs.current[index] = el)}
                >
                  {label}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InvestorCTASection;
