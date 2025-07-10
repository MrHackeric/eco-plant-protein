import React, { useEffect, useRef } from "react";
import "./ImpactSection.css";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { gsap } from "gsap";
import heroImage from "../../../assets/images/hero-bg.jpg";

const ImpactSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });

    tl.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        imageRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.6"
      )
      .fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.6"
      );
  }, []);

  return (
    <section className="impact-section" ref={sectionRef}>
      <div className="impact-container">
        {/* Left Text */}
        <div className="impact-left" ref={textRef}>
          <h2 className="impact-subtitle">Unlocking Versatile Protein Applications</h2>
          <p className="impact-paragraph">
            Our bio-process is paving the way for a more sustainable future in protein production—
            from pet food to high-nutrition human meals and even non-food applications.
          </p>
          <Button
            variant="contained"
            className="impact-button"
            endIcon={<ArrowForwardIcon />}
          >
            About our Impact
          </Button>
        </div>

        {/* Right Image */}
        <div className="impact-right" ref={imageRef}>
          <h1 className="impact-title">Our Impact</h1>
          <div className="image-cluster">
            <img
              src={heroImage}
              alt="Impact large"
              className="image-large"
            />
            <img
              src={heroImage}
              alt="Impact top"
              className="image-small image-top"
            />
            <img
              src={heroImage}
              alt="Impact bottom"
              className="image-small image-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
