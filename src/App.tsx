// Import component before using it
import './App.css'
import { Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Experience from '../pages/experience';
import Home from '../pages/Home';
import Projects from '../pages/Project';
import React from 'react';
import MeBlock from '../components/MeBlock';

function App() {

  return (
    <div>
      <MeBlock/>
      <Router>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/experience" Component={Experience} />
          <Route path="/projects" Component={Projects} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;