// Import component before using it
import "../src/App.css";
import { ExperienceData } from "../data/ExperienceData";
import { LeadershipData } from "../data/LeadershipData";
import ExperienceBlock from "../components/ExperienceBlock";
import React from "react";

function Experience() {
  const experienceData = ExperienceData;
  const leadershipData = LeadershipData;

  return (
    <div className="experience-container">
      <h1>
        <u>Professional Experience</u>
      </h1>
      {experienceData.map((exp, index) => (
        <ExperienceBlock
          key={index} // Provide a unique key for each item in the map
          company={exp.company}
          link={exp.link}
          role={exp.role}
          location={exp.location}
          time={exp.time}
          achievements={exp.achievements}
        />
      ))}
      <h1>
        <u>Leadership Experience</u>
      </h1>
      {leadershipData.map((exp, index) => (
        <ExperienceBlock
          key={index} // Provide a unique key for each item in the map
          company={exp.company}
          link={exp.link}
          role={exp.role}
          location={exp.location}
          time={exp.time}
          achievements={exp.achievements}
        />
      ))}
    </div>
  );
}

export default Experience;
