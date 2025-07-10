"use client";
import { CheckCircle, Send, LinkedIn } from "@mui/icons-material";

const ContactInfo = ({ onSampleClick, onPartnerClick }) => {
  return (
    <div className="card">
      <div className="contact-container">
        <div className="left-section">
          <div className="icon-container">
            <CheckCircle />
          </div>

          <div className="greeting">
            <div className="greeting-text">Hi there! 👋</div>
            <div className="greeting-subtext">
              Curious about our solution?
              <br />
              Let's Chat! 🌱
            </div>
          </div>

          <p className="subtitle">
            Whether you're a partner, potential collaborator, or simply curious
            about our sustainable protein solutions, we're eager to hear from
            you.
          </p>

          <div className="action-buttons">
            <div className="action-button" onClick={onSampleClick}>
              <Send className="action-button-icon" />
              <span className="action-button-text">Request a sample</span>
            </div>

            <div className="action-button" onClick={onPartnerClick}>
              <CheckCircle className="action-button-icon" />
              <span className="action-button-text">Become a partner</span>
            </div>
          </div>
        </div>

        <div className="right-section">
          <h1 className="title">
            Let's talk
            <br />
            sustainable proteins!
          </h1>

          <div className="contact-info">
            <div className="contact-item">
              <Send className="contact-icon" />
              <a href="#">info@ecoplantprotein.com</a>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+43 664 169 11 37</span>
            </div>

            <div className="contact-item">
              <LinkedIn className="contact-icon" />
              <a href="#" className="social-link">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
