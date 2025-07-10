import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroProcess from './hero/HeroProcess';
import HydrogenCards from "./hydrogen/HydrogenCards";
import ProteinProcess from "./protein/ProteinProcess";
import ProcessSample from "./sample/ProcessSample";
import ProcessReactor from "./reactor/ProcessReactor";
import FermentationProcess from "./fermentation/FermentationProcess";
import ContactCTA from "./contact/ContactCTA";

function ProductPage() {
  return (
    <div>
        <HeroProcess />
        <HydrogenCards />
        <ProteinProcess />
        <ProcessSample />
        <ProcessReactor />
        <FermentationProcess />
        <ContactCTA />
    </div>
  );
}

export default ProductPage;