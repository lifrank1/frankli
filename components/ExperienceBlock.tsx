import React from "react";
import '../src/App.css'


function ExperienceBlock({ company, link, role, time, achievements, location }: { company: string, link: string, role: string, time: string, achievements: string[], location: string }) {

      return [(
        <div>
            <div className = "experience-block">
                <div className="experience-block-title"><strong>{role}</strong> <a href = {link} className = "company-name">@ {company}</a></div>
                <div className="experience-block-subinfo">{time} | {location} </div>
                <div className="experience-block-desc">{achievements}</div>
            </div>           
        </div>)];
}

export default ExperienceBlock