const PartnershipForm = () => {
  return (
    <section className="partnership-form">
      <div className="container">
        <h2>Are you interested in a partnership?</h2>

        <form>
          <div className="form-group">
            <label htmlFor="partner-email">Your E-Mail</label>
            <div className="input-with-icon">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                id="partner-email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="partner-company">Your Company Name</label>
            <div className="input-with-icon">
              <FaBuilding className="input-icon" />
              <input
                type="text"
                id="partner-company"
                placeholder="Enter your company name"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="partner-message">Your Message</label>
            <div className="input-with-icon">
              <FaComment className="input-icon" />
              <textarea
                id="partner-message"
                placeholder="Tell us about your partnership interest"
                required
              ></textarea>
            </div>
          </div>

          <div className="form-footer">
            <p>
              By clicking "Agree & Submit," you confirm your acceptance of our
              privacy policy.
            </p>
            <button type="submit" className="btn primary">
              Submit Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PartnershipForm;
