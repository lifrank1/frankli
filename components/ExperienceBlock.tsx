import React from "react";
import '../src/App.css'


function ExperienceBlock({ company, link, role, time, achievements, location }: { company: string, link: string, role: string, time: string, achievements: string, location: string }) {

      return [(
        <div>
            <h2>Professional Experience</h2>
            <div className = "experience-block">
                <h3><strong>{role}</strong> <a href = {link} className = "company-name">@ {company}</a></h3>
                <h5>{location} {time}</h5>
                <p>{achievements}</p>
            </div>
        </div>)];
}

export default ExperienceBlock