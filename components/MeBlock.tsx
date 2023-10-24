import React from "react";
import "../src/App.css";

function MeBlock() {
  return [
    <div className="pic-and-name">
      <img src="../data/headshot.jpeg" className="picture" />
      <h1 className="name">Frank Li</h1>
    </div>,
  ];
}

export default MeBlock;
