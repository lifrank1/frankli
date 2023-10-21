import React from "react";

function ExperienceBlock({ company, link, role, time, achievements, location }: { company: string, link: string, role: string, time: string, achievements: string, location: string }) {
    
      return [(
        <html>
            <h1>Professional Experience</h1>
            <div className = "experienceContainer">
                <h1><strong>{role}</strong> <a href = {link}>@ {company}</a></h1>
                <h2>{location} {time}</h2>
                <p>{achievements}</p>
            </div>
        </html>)];
}

export default ExperienceBlock