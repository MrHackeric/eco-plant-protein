"use client";

import { useState } from "react";
import { Handshake, Check } from "@mui/icons-material";

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    message: "",
    agreeToPrivacy: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      "Partnership Inquiry from " + formData.companyName
    );
    const body = encodeURIComponent(
      `Company Name: ${formData.companyName}\nEmail: ${formData.email}\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@ecoplantprotein.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="card">
      <div className="form-container">
        <div className="left-section">
          <div className="icon-container">
            <Handshake />
          </div>
          <h1 className="title">Are you interested in a partnership?</h1>
        </div>

        <div className="right-section">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your E-Mail"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="companyName"
                placeholder="Your Company Name"
                className="form-input"
                value={formData.companyName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                className="form-textarea"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="privacy"
                name="agreeToPrivacy"
                className="checkbox"
                checked={formData.agreeToPrivacy}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="privacy" className="checkbox-label">
                By clicking "Agree & Submit," you confirm your acceptance of our{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-link"
                >
                  privacy policy
                </a>
                .
              </label>
            </div>

            <button type="submit" className="submit-button">
              Submit Message
              <Check />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnershipForm;
