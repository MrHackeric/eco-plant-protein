import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroProduct from "./hero/HeroProduct";
import FoodProduct from "./food/FoodProduct";
import PetFood from "./pet/PetFood";
import LivestockFeed from "./livestock/LivestockFeed";
import NonFood from "./nonfood/NonFood";
import ReactorSection from "./reactor/ReactorSection";
import CallToAction from "./cta/CallToAction";
import ContactCTA from "./contact/ContactCTA";

function ProductPage() {
  return (
    <div>
      <HeroProduct />
      <FoodProduct />
      <PetFood />
      <LivestockFeed />
      <NonFood />
      <ReactorSection />
      <CallToAction />
      <ContactCTA />
    </div>
  );
}

export default ProductPage;