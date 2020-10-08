import React from "react";

import CutePic from "../../assets/bighappy.png";
import Dropdown from "./Dropdown.jsx";
import "./Dropdown.css";
import "./About.css";

const items = [
  {
    id: 1,
    value: "Middle-aged White Man"
  },
  {
    id:2,
    value: "Wears UGGS indoors"
  },
  { id:3,
    value: 'Apple Bottom Jeans'},
  { id:4,
  value: "Trying to level up his pikachu"},
];

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src = {CutePic} className="intro-picture"></img>
        </div>
        <div className="intro-item">
          <Dropdown title = "More about me" items ={items}/>
          Woah is it "your name"??? OMG. insane.
        </div>
        <div className="intro-item">

        </div>
      </div>
    </div>
  );
}
