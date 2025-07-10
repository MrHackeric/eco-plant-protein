import React from 'react';
import './LivestockFeed.css';
import SetMealIcon from '@mui/icons-material/SetMeal';
import foodImage from "../../../assets/images/food-plate.jpg";

const LivestockFeed = () => {
  return (
    <section className="food-section">
      <div className="food-container">
        <div className="food-text fade-in-left">
          <div className="food-header">
            <h2>Livestock Feed</h2>
            <SetMealIcon className="food-icon" />
          </div>
          <p>
            Our first step in production is to create high-quality proteins for animal feed, a critical component of the agriculture industry. Traditionally, soy and fish protein have been the most commonly used sources, but we’re proud to offer an ecologically sustainable alternative.
          </p>
        </div>

        <div className="food-image fade-in-right">
          <img src={foodImage} alt="Food Plate" />
        </div>
      </div>
    </section>
  );
};

export default LivestockFeed;
