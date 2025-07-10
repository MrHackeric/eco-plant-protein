"use client";

import { LinkedIn } from "@mui/icons-material";

const TeamMemberCard = ({ name, title, image, hasLinkedIn, linkedinUrl }) => {
  return (
    <div className="team-member-card">
      <div style={{ position: "relative" }}>
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="team-member-image"
        />
        <div className="acib-logo">acib</div>
        {hasLinkedIn && (
          <div
            className="team-member-linkedin"
            onClick={() => window.open(linkedinUrl, "_blank")}
          >
            <LinkedIn />
          </div>
        )}
      </div>
      <div className="team-member-info">
        <h3 className="team-member-name">{name}</h3>
        <p className="team-member-title">{title}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
