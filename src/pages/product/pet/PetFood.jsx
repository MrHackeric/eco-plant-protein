import React from 'react';
import './PetFood.css';
import PetsIcon from '@mui/icons-material/Pets';
import foodImage from "../../../assets/images/food-plate.jpg";

const PetFood = () => {
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
            <h2>Pet Food</h2>
            <PetsIcon className="food-icon" />
          </div>
          <p>
            This vegan and resource-saving product is perfect for feeding beloved cats and dogs, especially those with special nutritional requirements. By choosing our alternative protein, pet owners can feel good about providing their furry friends with a high-quality, environmentally friendly food source.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PetFood;
