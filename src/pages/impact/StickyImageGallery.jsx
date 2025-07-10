"use client";

import { useState, useEffect, useRef } from "react";
import {
  Check,
  Water,
  EnergySavingsLeaf,
  Agriculture,
  Recycling,
  Public,
} from "@mui/icons-material";
import "./StickyImageGallery.css";

const StickyImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryRef = useRef(null);
  const stickyRef = useRef(null);

  const images = [
    {
      src: "/src/assets/images/nature-image.jpg",
      alt: "Reduces Overfishing",
      label: "Reduces Overfishing",
      icon: <Check />,
    },
    {
      src: "/src/assets/images/nature-image.jpg",
      alt: "Sustainable Energy",
      label: "Uses Renewable Energy",
      icon: <EnergySavingsLeaf />,
    },
    {
      src: "/src/assets/images/nature-image.jpg",
      alt: "Water Conservation",
      label: "Conserves Water Resources",
      icon: <Water />,
    },
    {
      src: "/src/assets/images/nature-image.jpg",
      alt: "Reduces Land Use",
      label: "Minimizes Agricultural Land Use",
      icon: <Agriculture />,
    },
    {
      src: "/src/assets/images/nature-image.jpg",
      alt: "Carbon Recycling",
      label: "Recycles CO2 Emissions",
      icon: <Recycling />,
    },
    {
      src: "/src/assets/images/nature-image.jpg",
      alt: "Global Impact",
      label: "Creates Global Environmental Impact",
      icon: <Public />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!galleryRef.current || !stickyRef.current) return;

      const galleryRect = galleryRef.current.getBoundingClientRect();
      const stickyRect = stickyRef.current.getBoundingClientRect();

      // Calculate scroll progress within the gallery
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          -galleryRect.top / (galleryRect.height - window.innerHeight)
        )
      );

      // Calculate which image should be shown
      const imageIndex = Math.floor(scrollProgress * images.length);
      const clampedIndex = Math.max(0, Math.min(images.length - 1, imageIndex));

      setCurrentImageIndex(clampedIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [images.length]);

  const getImageClass = (index) => {
    if (index === currentImageIndex) return "current";
    if (index === currentImageIndex + 1) return "next";
    if (index === currentImageIndex - 1) return "prev";
    return index > currentImageIndex ? "next" : "prev";
  };

  return (
    <div className="sticky-gallery-container">
      <div className="sticky-gallery" ref={galleryRef}>
        <div className="sticky-wrapper" ref={stickyRef}>
          <div className="image-stack">
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className={`gallery-image ${getImageClass(index)}`}
                  style={{
                    transitionDelay:
                      index === currentImageIndex ? "0ms" : "100ms",
                  }}
                />
                <div
                  className={`image-overlay ${
                    index === currentImageIndex ? "visible" : ""
                  }`}
                >
                  <span className="overlay-icon">{image.icon}</span>
                  {image.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="progress-indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`progress-dot ${
              index === currentImageIndex ? "active" : ""
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="gallery-counter">
        {currentImageIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default StickyImageGallery;
