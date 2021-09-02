import "../style/edu.css";
import React from "react";

function edu() {
  return (
    <div id="education" className="education">
      <div className="edu">
          <h1 className="heading">EDUCATION</h1>
        <div className="inst">
          <h2>SHRI SHANKARACHARYA GROUP OF INSTITUTIONS, BHILAI, CHHATTISGARH</h2>
          <p>BTECH Computer Science and Engineering</p>
          <p>2020 - present</p>
        </div>
        <div className="inst">
          <h2>GYANDEEP HIGHER SECONDARY SCHOOL, JANJGIR-CHAMPA, CHHATTISGARH</h2>
          <p>Class X - XII</p>
          <p>2017 - 2020</p>
        </div>
        <div className="inst">
          <h2>DIVINE PUBLIC SCHOOL, JANJGIR-CHAMPA, CHHATTISGARH</h2>
          <p>Class II - IIV</p>
          <p>2009 - 2017</p>
        </div>
      </div>
    </div>
  );
}

export default edu;
