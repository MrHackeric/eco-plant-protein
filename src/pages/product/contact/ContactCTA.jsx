import React from 'react';
import './ContactCTA.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ContactCTA = () => {
  return (
    <section className="contact-cta">
      <h2 className="contact-text">
        Get in touch with us <br />
        to find out more!
      </h2>
      <button className="contact-button">
        Contact us now <ArrowForwardIcon />
      </button>
    </section>
  );
};

export default ContactCTA;
