"use client";

import { ArrowForward } from "@mui/icons-material";
import "./GetInTouchButton.css";

const ContactButton = ({ children = "Contact us now", onClick, href }) => {
  if (href) {
    return (
      <a href={href} className="contact-button">
        {children}
        <ArrowForward />
      </a>
    );
  }

  return (
    <button className="contact-button" onClick={onClick}>
      {children}
      <ArrowForward />
    </button>
  );
};

export default ContactButton;
