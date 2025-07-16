import React from 'react';
import './ContactCTA.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="contact-cta">
      <h2 className="contact-text">
        Get in touch with us <br />
        to find out more!
      </h2>
      <Link to="/contact" className="contact-button">
        Contact us now <ArrowForwardIcon />
      </Link>
    </section>
  );
};

export default ContactCTA;
