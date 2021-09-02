import React from "react";
import "../style/header.css";
import  "./intro.js";
import "./aboutme.js";

function header() {
  return (
    <section class="nav-section">
      <nav class="con">
        <ul>
          <li>
            <a href="#intro" >Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#connect">Connect</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default header;
