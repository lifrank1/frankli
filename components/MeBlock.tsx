import React from "react";
import "../src/App.css";
import portrait from "../data/headshot.jpeg";

function MeBlock() {
  return (
    <div className="pic-and-name">
      <img src={portrait} className="picture" />
      <h1 className="name">Frank Li</h1>
    </div>
  );
}

export default MeBlock;
