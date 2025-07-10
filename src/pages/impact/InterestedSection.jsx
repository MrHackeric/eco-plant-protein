import { ArrowForward } from "@mui/icons-material";

const InterestedSection = () => {
  return (
    <div className="cta-section">
      <h2 className="cta-title">
        Revolutionize your products
        <br />
        with sustainable proteins!
      </h2>
      <p className="cta-subtitle">
        Request a sample now to experience the future of ethical and
        eco-conscious nutrition for your products.
      </p>

      <div className="cta-illustration">🥫🥩🐟</div>

      <div className="cta-buttons">
        <a href="#" className="cta-button-primary">
          Request a Sample
          <ArrowForward />
        </a>
        <a href="#" className="cta-button-secondary">
          Become our Partner
          <ArrowForward />
        </a>
      </div>
    </div>
  );
};

export default InterestedSection;
