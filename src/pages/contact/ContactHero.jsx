import React from "react";
import { Mail, Phone, Chat } from "@mui/icons-material";
import ContactImage from "../../assets/images/african-mosaic-child.png"; // Replace with your image
import "./ContactHero.css";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero-content">
        <div className="contact-hero-text">
          <h1>Let's Grow Together</h1>
          <p className="subtitle">
            Have questions or want to collaborate? Our team is ready to help you
            cultivate sustainable solutions for a greener future.
          </p>
          <div className="contact-methods">
            <div className="contact-method">
              <Mail className="contact-icon" />
              <span>hello@ecoplantprotein.com</span>
            </div>
            <div className="contact-method">
              <Phone className="contact-icon" />
              <span>(123) 456-7890</span>
            </div>
            <div className="contact-method">
              <Chat className="contact-icon" />
              <span>Live Chat Available</span>
            </div>
          </div>
        </div>
        <div className="contact-hero-image">
          <div className="image-overlay"></div>
          <img
            src={ContactImage}
            alt="Team discussing sustainable solutions"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
