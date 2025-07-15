import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import ContactPage from "./contact/ContactPage";
import PrivacyPolicy from "./privacyPolicy/PrivacyPolicy";
import TeamPage from "./team/TeamPage";
import ImpactPage from "./impact/ImpactPage";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductPage from "./product/ProductPage";
import ProcessPage from "./process/ProcessPage";
import ScrollToTop from "./ScrollToTop";
import DonationPage from "./donation/DonationPage";
function MainPage() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/donate" element={<DonationPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MainPage;
