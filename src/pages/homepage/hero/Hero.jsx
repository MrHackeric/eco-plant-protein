import React from "react";
import "./Hero.css";
import ForestIcon from "@mui/icons-material/Forest";
import ScienceIcon from "@mui/icons-material/Science";
import SpaIcon from '@mui/icons-material/Spa'; // Replaces EcoIcon
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Hero = () => {
  return (
    <div className="sustainable-container">
      <div className="sustainable-hero">
        <div className="sustainable-overlay">
          <h1 className="title">
            We recycle CO<sub>2</sub> <br /> for sustainable <br /> protein production
          </h1>
          <button className="sample-btn">
            Request a Sample <ArrowForwardIcon fontSize="small" />
          </button>
        </div>
      </div>

      <div className="sustainable-cards">
        <div className="card">
          <ForestIcon className="card-icon" />
          <h3>We offer sustainably produced proteins...</h3>
          <p>
            We offer sustainably produced proteins that are processed into
            specific end products through various downstream processes.
          </p>
          <button className="card-btn">Our Products <ArrowForwardIcon fontSize="small" /></button>
        </div>

        <div className="card">
          <ScienceIcon className="card-icon" />
          <h3>Our high-tech bio-process...</h3>
          <p>
            Our high tech bio-process uses carbon dioxide as a source to
            produce high quality proteins to secure the world’s protein demand.
          </p>
          <button className="card-btn">Our Process <ArrowForwardIcon fontSize="small" /></button>
        </div>

        <div className="card">
          <SpaIcon className="card-icon" />
          <h3>Our impact on sustainability...</h3>
          <p>
            Our bio-process is paving the way for a more sustainable future in
            protein production and making a positive impact on the environment.
          </p>
          <button className="card-btn">Our Impact <ArrowForwardIcon fontSize="small" /></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
