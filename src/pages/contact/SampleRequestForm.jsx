"use client";

import { useState } from "react";
import { Science, Check } from "@mui/icons-material";

const SampleRequestForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    country: "",
    weight: "50gr",
    productType: "Livestock Feed",
    notes: "",
    agreeToPrivacy: false,
  });

  const countries = [
    "Select Country",
    "Austria",
    "Germany",
    "Switzerland",
    "Netherlands",
    "Belgium",
    "France",
    "Italy",
    "Spain",
    "United Kingdom",
    "Other",
  ];

  const weights = ["50gr", "100gr", "250gr", "500gr", "1kg"];
  const productTypes = ["Livestock Feed", "Pet Food", "Aquaculture", "Other"];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sample request submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="card">
      <div className="form-container">
        <div className="left-section">
          <div className="icon-container">
            <Science />
          </div>
          <h1 className="title">
            Please answer a few question to get a sample of our protein.
          </h1>
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
              <select
                name="country"
                className="form-select"
                value={formData.country}
                onChange={handleInputChange}
                required
              >
                {countries.map((country) => (
                  <option
                    key={country}
                    value={country === "Select Country" ? "" : country}
                  >
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <select
                name="weight"
                className="form-select"
                value={formData.weight}
                onChange={handleInputChange}
                required
              >
                {weights.map((weight) => (
                  <option key={weight} value={weight}>
                    {weight}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <select
                name="productType"
                className="form-select"
                value={formData.productType}
                onChange={handleInputChange}
                required
              >
                {productTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="notes"
                placeholder="Your Note"
                className="form-textarea"
                value={formData.notes}
                onChange={handleInputChange}
              />
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="privacy-sample"
                name="agreeToPrivacy"
                className="checkbox"
                checked={formData.agreeToPrivacy}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="privacy-sample" className="checkbox-label">
                By clicking "Agree & Submit," you confirm your acceptance of our{" "}
                <a href="#" className="privacy-link">
                  privacy policy
                </a>
                .
              </label>
            </div>

            <button type="submit" className="submit-button">
              Submit Request
              <Check />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SampleRequestForm;
