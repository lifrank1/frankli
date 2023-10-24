import React from "react";
import "../src/App.css";

function ProjectBlock({
  name,
  link,
  techstack,
  desc,
}: {
  name: string;
  link: string;
  techstack: string;
  desc: string;
}) {
  return [
    <div>
      <div className="experience-block">
        <div className="experience-block-title">{name}</div>
        <div className="experience-block-subinfo">{techstack} </div>
        <div className="experience-block-desc">{desc}</div>
      </div>
    </div>,
  ];
}

export default ProjectBlock;
