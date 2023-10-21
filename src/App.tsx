// Import component before using it
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Experience from '../pages/experience';
import Landing from '../pages/Landing';
import Projects from '../pages/Project';
import React from 'react';

function App() {

  return (
    <div>
      <p>Hello World</p>
      <h3>Hi, I'm Frank!</h3>
      <p><Link to='../pages/experience'>Experience</Link></p>
      {/* <Router>
        <Route path="/experience" element={<Experience/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/" element={<Landing/>} />
      </Router> */}
    </div>
    
  );
}

export default App;