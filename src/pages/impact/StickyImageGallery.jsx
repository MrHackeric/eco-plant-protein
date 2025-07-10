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
  const [transitionProgress, setTransitionProgress] = useState(0);
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
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the gallery
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          -galleryRect.top / (galleryRect.height - windowHeight * 0.7)
        )
      );

      // Calculate current image and transition progress
      const totalProgress = scrollProgress * (images.length - 1);
      const imageIndex = Math.floor(totalProgress);
      const progress = totalProgress - imageIndex;

      const clampedIndex = Math.max(0, Math.min(images.length - 1, imageIndex));

      setCurrentImageIndex(clampedIndex);
      setTransitionProgress(progress);
    };

    // Use requestAnimationFrame for smoother scrolling
    let ticking = false;
    const optimizedScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizedScrollHandler, {
      passive: true,
    });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", optimizedScrollHandler);
  }, [images.length]);

  const getImageTransform = (index) => {
    if (index === currentImageIndex) {
      // Current image slides up as next image comes in
      const translateY = transitionProgress * -100;
      return `translateY(${translateY}%)`;
    } else if (index === currentImageIndex + 1) {
      // Next image slides up from bottom
      const translateY = 100 - transitionProgress * 100;
      return `translateY(${translateY}%)`;
    } else if (index < currentImageIndex) {
      // Previous images stay above
      return `translateY(-100%)`;
    } else {
      // Future images stay below
      return `translateY(100%)`;
    }
  };

  const getImageOpacity = (index) => {
    if (index === currentImageIndex) {
      return 1 - transitionProgress * 0.3; // Slight fade for current image
    } else if (index === currentImageIndex + 1) {
      return 0.7 + transitionProgress * 0.3; // Fade in for next image
    }
    return 0.7;
  };

  return (
    <div className="sticky-gallery-container">
      <div className="sticky-gallery" ref={galleryRef}>
        <div className="sticky-wrapper" ref={stickyRef}>
          <div className="images-list">
            {images.map((image, index) => (
              <div
                key={index}
                className="individual-image-container"
                style={{
                  transform: getImageTransform(index),
                  opacity: getImageOpacity(index),
                  zIndex: images.length - Math.abs(index - currentImageIndex),
                }}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="gallery-image"
                />
                <div
                  className={`image-overlay1 ${
                    index === currentImageIndex ||
                    index === currentImageIndex + 1
                      ? "visible"
                      : ""
                  }`}
                  style={{
                    opacity:
                      index === currentImageIndex
                        ? 1 - transitionProgress
                        : transitionProgress,
                  }}
                >
                  <span className="overlay-icon">{image.icon}</span>
                  <span className="overlay-text">{image.label}</span>
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
            style={{
              opacity: index <= currentImageIndex ? 1 : 0.3,
            }}
          />
        ))}
        <div className="progress-line">
          <div
            className="progress-fill"
            style={{
              height: `${
                ((currentImageIndex + transitionProgress) /
                  (images.length - 1)) *
                100
              }%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StickyImageGallery;
