import "../style/aboutme.css";
import React from "react";
import ABOUTME from "../img/about.png";
import CPP from "../img/cpp.png";
import JAVA from "../img/java.png";
import PYTHON from "../img/python.png";
import JAVASCRIPT from "../img/js.png";
import REACT from "../img/react.png";

function aboutme() {
  return (
    <div className="about-me" id="about">
      <div className="blockbox">
        <div className="flex3 about">
          <h1 className="heading">ABOUT ME</h1>
          <p className="p">
            My name is Pratham Sahu. I’m from India. I'm an open-source
            enthusiast, Front-end Web Developer. Learning new programming
            languages and also I am UI/UX and Graphic Designer. I am part of
            Coders Evoke Community.
          </p>
        </div>
        <div className="flex4">
          <img className="imagine" src={ABOUTME} alt="no img"></img>
        </div>
      </div>
      <div className="blockbox">
        <div className="flex3 about margin">
          <h1 className="heading">TECH STACK</h1>
          <div className="table">
            <div className="element">
              <div className="icon-box">
                <img src={PYTHON} className="logo"></img>
                <h3 className="tool">PYTHON</h3>
              </div>
            </div>
            <div className="element">
              <div className="icon-box">
                <img src={JAVA} className="logo"></img>
                <h3 className="tool">JAVA</h3>
              </div>
            </div>
            <div className="element">
              <div className="icon-box">
                <img src={CPP} className="logo"></img>
                <h3 className="tool">C++</h3>
              </div>
            </div>
            <div className="element">
              <div className="icon-box">
                <img src={JAVASCRIPT} className="logo"></img>
                <h3 className="tool">JAVASCRIPT</h3>
              </div>
            </div>
            <div className="element">
              <div className="icon-box">
                <img src={REACT} className="logo"></img>
                <h3 className="tool">REACT</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default aboutme;
