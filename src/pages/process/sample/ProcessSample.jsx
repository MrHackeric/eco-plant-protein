import React, { useEffect, useRef } from 'react';
import './ProcessSample.css';
import bagsImage from '../../../assets/images/products-section-foods.webp';

const ProcessSample = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="request-sample-section" ref={sectionRef}>
      <div className="content-wrapper animate-on-scroll">
        <h2 className="heading">Interested in our product?</h2>
        <h3 className="subheading">Request a sample now!</h3>
        <p className="description">
          Request a sample now to experience the future of ethical<br />
          and eco-conscious nutrition for your products.
        </p>

        <img src={bagsImage} alt="EcoNutri Sample Bags" className="sample-image animate-on-scroll" />

        <div className="buttons-container animate-on-scroll">
          <button className="primary-button">
            Request a Sample <span className="arrow">→</span>
          </button>
          <button className="secondary-button">
            Become our Partner <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSample;
