// Import component before using it
import '../src/App.css'
import {ExperienceData} from '../data/ExperienceData';
import ExperienceBlock from '../components/ExperienceBlock'
import React from 'react';

function Experience() {
  const testExp = ExperienceData[0]
  
  return [(<div className="experience-container">
      <h2>Professional Experience</h2>
      <ExperienceBlock
        company={testExp.company}
        link={testExp.link}
        role={testExp.role}
        location={testExp.location}
        time={testExp.time}
        achievements={testExp.achievements[0]}
      />
      <ExperienceBlock
        company={testExp.company}
        link={testExp.link}
        role={testExp.role}
        location={testExp.location}
        time={testExp.time}
        achievements={testExp.achievements[0]}
      /></div>)]
}

export default Experience;