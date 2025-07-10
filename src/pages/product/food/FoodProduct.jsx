import React from 'react';
import './FoodProduct.css';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import foodImage from "../../../assets/images/food-plate.jpg";

const FoodProduct = () => {
  return (
    <section className="food-section">
      <div className="food-container">
        <div className="food-text fade-in-left">
          <div className="food-header">
            <h2>Food products</h2>
            <RestaurantIcon className="food-icon" />
          </div>
          <p>
            Our product can be incorporated into various human food products as a sustainable and nutritious alternative to traditional animal-based as well as plant-based proteins. The protein has a high nutritional value and can be used in a variety of food applications such as plant-based/vegan meats, dairy alternatives, protein bars, protein shakes or as an addition in any other food product. Additionally, the use of our product reduces the environmental impact of food production by utilizing CO₂ as a resource and reducing the reliance on traditional animal agriculture.
          </p>
        </div>

        <div className="food-image fade-in-right">
          <img src={foodImage} alt="Food Plate" />
        </div>
      </div>
    </section>
  );
};

export default FoodProduct;
