import React from "react";
import HomePage from "./homepage/HomePage";
import ContactPage from "./contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function MainPage() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default MainPage;
