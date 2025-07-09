
import React from "react";
import {
   FaLinkedin,
} from "react-icons/fa";
import { MdPets, MdAttachEmail, MdPhone } from "react-icons/md";
const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="container">
        <h2>Hi there!</h2>
        <h3>
          Curious about our solution?
          <br />
          Let's Chat! 😊
        </h3>

        <p>
          Whether you're a partner, potential collaborator, or simply curious
          about our sustainable protein solutions, we're eager to hear from you.
        </p>

        <div className="action-buttons">
          <button className="btn primary">Request a sample</button>
          <button className="btn secondary">Become a partner</button>
        </div>

        <p className="tagline">Let's talk sustainable proteins!</p>

        <div className="contact-info">
          <div className="contact-item">
            <MdAttachEmail className="icon" />
            <span>info@econutri.com</span>
          </div>
          <div className="contact-item">
            <MdPhone className="icon" />
            <span>+43 664 169 1137</span>
          </div>
          <div className="contact-item">
            <FaLinkedin className="icon" />
            <span>Linkedin</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
