import "../style/connect.css";
import React from "react";
import INSTA from "../img/insta.png";
import GITHUB from "../img/github.png";
import LINKEDIN from "../img/linkedin.png";
import TWITTER from "../img/twitter.png";

function connect() {
  return (
    <div className="connect" id="connect">
      <div className="social">
        <h1 className="heading">CONNECT WITH ME :</h1>
        <div className="icons">
          <div className="icon-wrap">
            <a href="https://instagram.com/im_prakhar02">
              <img src={INSTA} alt="" />
            </a>
          <h4>Instagram</h4>
          </div>
          <div className="icon-wrap github">
            <a href="https://github.com/PrakharSahu02">
              <img src={GITHUB} alt="" />
            </a>
            <h4>GitHub</h4>
          </div>
          <div className="icon-wrap">
            <a href="https://twitter.com/PRAKHAR_2039">
              <img src={TWITTER} alt="" />
            </a>
            <h4>Twitter</h4>
          </div>
          <div className="icon-wrap link">
            <a href="https://www.linkedin.com/in/prakhar-sahu-4519b8206">
              <img src={LINKEDIN} alt="" />
            </a>
            <h4>Linkedin</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect;
