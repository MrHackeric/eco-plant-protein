import React, { useEffect, useRef, useState } from 'react';
import './TractionSection.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bioImage from "../../../assets/images/bio-process.jpg";

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: 'protein meals served', value: 12000 },
  { label: 'tons of waste upcycled', value: 30 },
  { label: 'schools & refugee camps piloted', value: 7 },
  { label: 'AI model trained in real conditions', value: 1 },
  { label: 'youth farmers engaged', value: 200 },
];

const TractionSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const statRefs = useRef([]);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        x: -60,
        duration: 1,
        ease: 'power3.out',
      });

      statRefs.current.forEach((el, index) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 80%',
          onEnter: () => {
            gsap.to({}, {
              duration: 2,
              ease: "power2.out",
              onUpdate: function () {
                const progress = this.progress();
                const target = stats[index].value;
                const formatted = Math.floor(progress * target);
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = formatted;
                  return newCounts;
                });
              },
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="traction-section" ref={sectionRef}>
      <div className="traction-container">
        <div className="traction-image" ref={imageRef}>
          <img src={bioImage} alt="Traction" />
        </div>

        <div className="traction-content">
          <h2>🚀 Traction & Progress</h2>
          <div className="traction-stats">
            {stats.map((item, index) => (
              <div
                key={index}
                className="traction-stat"
                ref={(el) => (statRefs.current[index] = el)}
              >
                <span className="count">
                  {item.value >= 1000 && index === 0
                    ? `${counts[index].toLocaleString()}+`
                    : item.value === 1
                    ? item.label.includes("AI")
                      ? `✔️`
                      : `${counts[index]}`
                    : `${counts[index]}+`}
                </span>
                <span className="label">{item.label}</span>
              </div>
            ))}
          </div>

          <button className="traction-button">
            <span>Explore our Journey</span>
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TractionSection;
