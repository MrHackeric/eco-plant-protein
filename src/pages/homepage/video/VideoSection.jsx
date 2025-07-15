import React from "react";
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/MRt8DxYhN90?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&playsinline=1"
          title="Sustainable Protein Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="video-overlay" />
      <div className="video-heading">Watch How We Grow Sustainable Protein 🌱</div>
    </section>
  );
};

export default VideoSection;
