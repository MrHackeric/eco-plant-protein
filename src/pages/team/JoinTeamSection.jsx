import { ArrowForward, LinkedIn } from "@mui/icons-material";

const JoinTeamSection = () => {
  return (
    <div className="join-section">
      <div className="join-content">
        <h2>Join our team!</h2>
        <p>Become part of our team, start possible at any time.</p>
        <a href="#" className="join-button">
          Apply now
          <ArrowForward />
        </a>
      </div>

      <div className="join-avatars">
        <div className="avatar">👨</div>
        <div className="avatar">👩</div>
        <div className="linkedin-join">
          <LinkedIn />
        </div>
      </div>
    </div>
  );
};

export default JoinTeamSection;
