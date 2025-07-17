"use client";

import { href } from "react-router-dom";
import ContactButton from "./GetInTouchButton";

const ContactSection = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px 20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "600",
          color: "#333",
          marginBottom: "20px",
          fontFamily: "Red Hat Display, sans-serif",
        }}
      >
        Get in touch with us
        <br />
        to find out more!
      </h2>

      <ContactButton href="/contact" />
    </div>
  );
};

export default ContactSection;
