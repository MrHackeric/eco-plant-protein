import React from "react";
import {
  FaEnvelope,
  FaBuilding,
  FaComment,
  FaGlobe,
  } from "react-icons/fa";
import { MdPets } from "react-icons/md";

const SampleRequestForm = () => {
  return (
    <section className="sample-form">
      <div className="container">
        <h2>Please answer a few questions to get a sample of our protein.</h2>

        <form>
          <div className="form-group">
            <label htmlFor="email">Your E-Mail</label>
            <div className="input-with-icon">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="company">Your Company Name</label>
            <div className="input-with-icon">
              <FaBuilding className="input-icon" />
              <input
                type="text"
                id="company"
                placeholder="Enter your company name"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="country">Select Country</label>
            <div className="input-with-icon">
              <FaGlobe className="input-icon" />
              <select id="country" required>
                <option value="">Select your country</option>
                <option value="AT">Austria</option>
                <option value="DE">Germany</option>
                <option value="CH">Switzerland</option>
                {/* Add more countries as needed */}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Sample Size</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="sample-size"
                  value="50gr"
                  defaultChecked
                />
                50gr
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Product Type</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="product-type"
                  value="Livestock Food"
                  defaultChecked
                />
                <MdPets className="icon" />
                Livestock Food
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="note">Your Note</label>
            <div className="input-with-icon">
              <FaComment className="input-icon" />
              <textarea
                id="note"
                placeholder="Any additional information"
              ></textarea>
            </div>
          </div>

          <div className="form-footer">
            <p>
              By clicking "Agree & Submit," you confirm your acceptance of our
              primary policy.
            </p>
            <button type="submit" className="btn primary">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SampleRequestForm;
