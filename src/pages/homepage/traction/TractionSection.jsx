import React, { useEffect, useRef, useState } from 'react';
import './TractionSection.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bioImage from "../../../assets/images/traction-img.jpg";
import { Link } from 'react-router-dom';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: 'Protein meals served', value: 12000, prefix: '', suffix: '+' },
  { label: 'Tons of waste upcycled', value: 30, prefix: '', suffix: '+' },
  { label: 'Schools & refugee camps piloted', value: 7, prefix: '', suffix: '+' },
  { label: 'AI model trained in real conditions', value: 1, prefix: '✔️', suffix: '' },
  { label: 'Youth farmers engaged', value: 200, prefix: '', suffix: '+' },
];

const TractionSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const statRefs = useRef([]);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        x: -80,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Content animation
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
      });

      // Stats counting animation
      statRefs.current.forEach((el, index) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          onEnter: () => {
            gsap.to({}, {
              duration: 2,
              ease: "power2.out",
              onUpdate: function() {
                const progress = this.progress();
                const target = stats[index].value;
                const formatted = Math.floor(progress * target);
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = formatted;
                  return newCounts;
                });
              }
            });
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="traction-section" ref={sectionRef}>
      <div className="traction-container">
        <div className="traction-image" ref={imageRef}>
          <div className="image-overlay"></div>
          <img src={bioImage} alt="Our progress and achievements" loading="lazy" />
        </div>

        <div className="traction-content" ref={contentRef}>
          <div className="section-header">
            <span className="section-tag">Progress</span>
            <h2>Demonstrated Impact</h2>
            <p className="section-description">
              Our measurable achievements showcase the tangible difference we're making in sustainable nutrition.
            </p>
          </div>

          <div className="traction-stats">
            {stats.map((item, index) => (
              <div
                key={index}
                className="traction-stat"
                ref={(el) => (statRefs.current[index] = el)}
              >
                <span className="count">
                  {item.prefix}{item.value === 1 && item.prefix === '✔️' ? '' : counts[index]}{item.suffix}
                </span>
                <span className="label">{item.label}</span>
              </div>
            ))}
          </div>

          <Link to="/impact">
            <button className="traction-button">
              <span>Explore our journey</span>
            <ArrowForwardIcon className="button-icon" />
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TractionSection;