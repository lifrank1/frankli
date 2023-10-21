// Import component before using it
import './App.css'
import {ExperienceData} from '../data/ExperienceData';
import ExperienceBlock from '../components/ExperienceBlock'
import React from 'react';

function App() {
  const testExp = ExperienceData[0]
  return [(<div>
      <ExperienceBlock
        company={testExp.company}
        link={testExp.link}
        role={testExp.role}
        location={testExp.location}
        time={testExp.time}
        achievements={testExp.achievements[0]}
      /></div>)]
}

export default App;