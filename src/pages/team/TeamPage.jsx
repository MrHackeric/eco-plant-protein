import FounderCard from "./FounderCard";
import AdvisorCard from "./AdvisorCard";
import TeamHeroSection from "./TeamHeroSection";
import TeamMemberCard from "./TeamMemberCard";
import CallToActionSection from "./CallToActionSection";
import JoinTeamSection from "./JoinTeamSection";
import { foundersData, advisorsData, teamMembersData } from "./data/teamData";
import GetInTouchButton from "../../components/common/getInTouch/GetInTouchSection";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Helmet } from "react-helmet";
import "./team.css";

const TeamPage = () => {
  useScrollAnimation();

  return (
    <div className="team-container">
      <Helmet>
        <title>Team | EcoPlantProtein</title>
        <meta
          name="description"
          content="Meet the dedicated team behind EcoPlantProtein, committed to sustainable and innovative solutions."
        />
      </Helmet>
      {/* Team Hero Section */}
      <section className="team-section">
        <TeamHeroSection />
      </section>

      {/* Founders Section */}
      <section className="team-section">
        <h1 className="section-title">Our Founders</h1>
        <div className="founders-grid">
          {foundersData.map((founder) => (
            <FounderCard
              key={founder.id}
              name={founder.name}
              title={founder.title}
              image={founder.image}
              linkedinUrl={founder.linkedinUrl}
            />
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section className="team-section">
        <h1 className="section-title">Our Team Members</h1>
        <div className="team-members-grid">
          {teamMembersData.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              title={member.title}
              image={member.image}
              hasLinkedIn={member.hasLinkedIn}
              linkedinUrl={member.linkedinUrl}
            />
          ))}
        </div>
      </section>

      {/* Advisors Section */}
      <section className="team-section">
        <h1 className="section-title">Our Advisors</h1>
        <div className="advisors-grid">
          {advisorsData.map((advisor) => (
            <AdvisorCard
              key={advisor.id}
              name={advisor.name}
              title={advisor.title}
              image={advisor.image}
            />
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="team-section">
        <CallToActionSection />
      </section>

      {/* Join Team Section */}
      <section className="team-section">
        <JoinTeamSection />
      </section>
      {/* Get in Touch Button */}
      <GetInTouchButton />
    </div>
  );
};

export default TeamPage;
