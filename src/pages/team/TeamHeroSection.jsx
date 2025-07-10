const TeamHeroSection = () => {
  return (
    <div className="team-hero">
      <img
        src="src/assets/images/team-hero-image.jpg"
        alt="Our Team"
        className="team-hero-image"
      />

      <div className="team-hero-content">
        <div className="team-text-left">
          <h1>Our Team</h1>
        </div>
        <div className="team-text-right">
          <p>
            Our multidisciplinary team is dedicated to meet the challenges of
            creating a process that can be both ecologically feasible as well as
            economically valuable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamHeroSection;
