import React from "react";
import Hero from "../homepage/hero/Hero";
import ProductsSection from "./products/Products";
import ImpactSection from "./impact/ImpactSection";
import ProcessSection from "./process/ProcessSection";
import NewsSection from "./news/NewsSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ProductsSection />
      <ImpactSection />
      <ProcessSection />
      <NewsSection />
    </div>
  );
};

export default HomePage;
