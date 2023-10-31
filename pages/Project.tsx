import React from "react";
import ProjectBlock from "../components/ProjectBlock";
import { ProjectData } from "../data/ProjectData";

function Projects() {
  const projectData = ProjectData; // Assuming ExperienceData is an array of experiences
  return (
    <div className="experience-container">
      <h1>
        <u>Projects</u>
      </h1>
      {projectData.map((exp, index) => (
        <ProjectBlock
          name={exp.name}
          link={exp.link}
          techstack={exp.techstack}
          desc={exp.desc}
        />
      ))}
    </div>
  );
}

export default Projects;
