
const ExperienceSection = ({companyName,position,period,summary}) => {
  return (
    <div className="about-xp col-12 col-md-6">
      <h3>{position}</h3>
      <h5>{companyName}</h5>
      <p className="mb-0">{period}</p>
      {/* <p>{summary}</p> */}
    </div>
  );
}

export default ExperienceSection