import React, { useEffect, useRef } from 'react';
import './ProcessReactor.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import reactor1 from '../../../assets/images/bio-process.jpg';
import reactor2 from '../../../assets/images/bio-process.jpg';
import reactor3 from '../../../assets/images/bio-process.jpg';

const ProcessReactor = () => {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="reactor-section4" ref={sectionRef}>
      <div className="reactor-grid4 animate-on-scroll">
        <div className="reactor-text4">
          <h4 className="reactor-subtitle4">OUR REACTOR</h4>
          <h1 className="reactor-title4">
            At the heart of our innovative bio-process lies our specially designed high-tech reactor, tailored to ensure maximum productivity and high protein yields.
          </h1>
          <p className="reactor-description4">
            Our reactor utilizes advanced gas fermentation technology and is optimized to create the ideal conditions for our microorganisms to thrive and efficiently convert CO₂ and green hydrogen into high-quality proteins.
          </p>
          <p className="reactor-description4">
            With precise control over the reactor’s parameters and conditions, we’re able to guarantee consistent, reliable protein production that meets the highest standards of quality and sustainability.
          </p>
          <button className="reactor-button4">
            About our Process <ArrowForwardIcon className="button-icon4" />
          </button>
        </div>

        <div className="reactor-images-container4">
          <div className="reactor-image-card4"><img src={reactor1} alt="Reactor Panel 1" /></div>
          <div className="reactor-image-card4"><img src={reactor2} alt="Reactor Panel 2" /></div>
          <div className="reactor-image-card4"><img src={reactor3} alt="Reactor Panel 3" /></div>
        </div>
      </div>
    </section>
  );
};

export default ProcessReactor;
