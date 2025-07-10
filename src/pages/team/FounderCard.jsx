"use client";

import { LinkedIn } from "@mui/icons-material";

const FounderCard = ({ name, title, image, linkedinUrl }) => {
  return (
    <div className="founder-card">
      <div style={{ position: "relative" }}>
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="founder-image"
        />
        <div
          className="linkedin-icon"
          onClick={() => window.open(linkedinUrl, "_blank")}
        >
          <LinkedIn />
        </div>
      </div>
      <div className="founder-info">
        <h3 className="founder-name">{name}</h3>
        <p className="founder-title">{title}</p>
      </div>
    </div>
  );
};

export default FounderCard;
