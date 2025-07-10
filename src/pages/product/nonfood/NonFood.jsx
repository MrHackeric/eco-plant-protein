import React from 'react';
import './NonFood.css';
import SpaIcon from '@mui/icons-material/Spa'; // changed from PetsIcon
import foodImage from "../../../assets/images/food-plate.jpg";

const NonFood = () => {
  return (
    <section className="food-section">
      <div className="food-container">
        {/* Image first */}
        <div className="food-image fade-in-left">
          <img src={foodImage} alt="Food Plate" />
        </div>

        {/* Text second */}
        <div className="food-text fade-in-right">
          <div className="food-header">
            <h2>Non Food Products</h2>
            <SpaIcon className="food-icon" />
          </div>
          <p>
            The process can be tailored to produce proteins that are useful in diverse non-food applications such as cosmetic products. Hyaluronic acid, squalane, and collagen are all proteins commonly used in skincare products for their moisturizing and anti-aging properties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NonFood;
