import React from "react";
import '../src/App.css'


function ExperienceBlock({ company, link, role, time, achievements, location }: { company: string, link: string, role: string, time: string, achievements: string[], location: string }) {

      return [(
        <div>
            <div className = "experience-block">
                <div className="experience-block-title"><strong>{role}</strong> <a href = {link} className = "red-no-underline">@ {company}</a></div>
                <div className="experience-block-subinfo">{time} | {location} </div>
                <ul className="experience-block-achievements">
                {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                ))}
                </ul>
            </div>           
        </div>)];
}

export default ExperienceBlock