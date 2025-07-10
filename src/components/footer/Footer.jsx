import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  ArrowForward,
} from "@mui/icons-material";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Address Section */}
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

          {/* Follow Us Section */}
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

          {/* Contact Button */}
          <div className="footer-section">
            <Link to="/contact" className="footer-cta">
              Contact Us <ArrowForward className="arrow-icon" />
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
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
