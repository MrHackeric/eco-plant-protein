import React from 'react';
import './ReactorSection.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import bioImage from '../../../assets/images/bio-process.jpg';

const ReactorSection = () => {
  return (
    <section className="reactor-section">
      <div className="reactor-content">
        <div className="reactor-left">
          <h4 className="reactor-subtitle">OUR REACTOR</h4>
          <h1 className="reactor-title">
            At the heart of our innovative bio-process lies our specially designed high-tech reactor, tailored to ensure maximum productivity and high protein yields.
          </h1>
          <button className="reactor-button">
            About our Process <ArrowForwardIcon />
          </button>
        </div>
        <div className="reactor-right">
          <p>
            Our reactor utilizes advanced gas fermentation technology and is optimized to create the ideal conditions for our microorganisms to thrive and efficiently convert CO₂ and green hydrogen into high-quality proteins.
          </p>
          <p>
            With precise control over the reactor’s parameters and conditions, we’re able to guarantee consistent, reliable protein production that meets the highest standards of quality and sustainability.
          </p>
        </div>
      </div>

      <div className="reactor-images">
        <img src={bioImage} alt="Reactor image 1" />
        <img src={bioImage} alt="Reactor image 2" />
        <img src={bioImage} alt="Reactor image 3" />
      </div>
    </section>
  );
};

export default ReactorSection;
