import React from "react";
import "../style/intro.css";
import PRATHAM from "../img/PRATHAM.jpg";

function intro() {
  return (
    <div className="box" id="intro">
      <div className="context flex1">
        <img className="imglogo" src={PRATHAM}></img>
        
      </div>
      <div className="context flex2">
        <h2>PRATHAM SAHU</h2>
        <p className="para"><b>F</b>ront-end <b>W</b>eb <b>D</b>eveloper | <b>O</b>pen <b>S</b>ource <b>E</b>nthusiast | <b>G</b>raphic <b>D</b>esigner</p>
      </div>
    </div>
  );
}

export default intro;
