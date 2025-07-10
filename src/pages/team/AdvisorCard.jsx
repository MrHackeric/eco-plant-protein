const AdvisorCard = ({ name, title, image }) => {
  return (
    <div className="advisor-card">
      <img
        src={image || "/placeholder.svg"}
        alt={name}
        className="advisor-image"
      />
      <div className="advisor-info">
        <h3 className="advisor-name">{name}</h3>
        <p className="advisor-title">{title}</p>
      </div>
    </div>
  );
};

export default AdvisorCard;
