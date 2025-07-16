import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  ArrowForward,
  Favorite,
} from "@mui/icons-material";
import "./Footer.css";

import partner1 from "../../assets/partners/partner-1.png";
import partner2 from "../../assets/partners/partner-2.png";
import partner3 from "../../assets/partners/partner-3.png";
import partner4 from "../../assets/partners/partner-4.png";
import partner5 from "../../assets/partners/partner-5.png";
import partner6 from "../../assets/partners/partner-6.png";
import partner7 from "../../assets/partners/partner-7.png";
import partner8 from "../../assets/partners/partner-8.png";
import partner9 from "../../assets/partners/partner-9.png";
import partner10 from "../../assets/partners/partner-10.png";
import partner11 from "../../assets/partners/partner-11.png";

const partnerLogos = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-heading">Address</h3>
            <address className="footer-address">
              123 Greenway Boulevard
              <br />
              Eco Valley, CA 90210
              <br />
              United States
            </address>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook">
                <Facebook className="social-icon" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <Twitter className="social-icon" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <Instagram className="social-icon" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <LinkedIn className="social-icon" />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <Link to="/contact" className="footer-cta">
              Contact Us <ArrowForward className="arrow-icon" />
            </Link>
            <Link to="/donate" className="footer-donate">
              Donate <Favorite className="favourite-icon" />
            </Link>
          </div>
        </div>

        <div className="footer-partners">
          <h3 className="partners-heading">OUR PARTNERS</h3>
          <div className="partners-slider-wrapper">
            <div className="partners-slider-track">
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="partner-logo"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="legal-links">
            <Link
              to="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="legal-link"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="credits">
            <span>Designed by </span>
            <a
              href="https://github.com/MrHackeric"
              target="_blank"
              rel="noopener noreferrer"
              className="credit-link"
            >
              MrHackeric
            </a>
            <span> and </span>
            <a
              href="https://github.com/dsyengo"
              target="_blank"
              rel="noopener noreferrer"
              className="credit-link"
            >
              Master
            </a>
            <span> © {new Date().getFullYear()} All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
