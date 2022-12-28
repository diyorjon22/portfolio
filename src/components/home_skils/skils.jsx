import React from "react";
import "./skils.css";
import { Link } from "react-router-dom";

const Skils = () => {
  return (
    <section className="skills">
      <div className="container">
        <p className="ppp">My Skills</p>
        <div className="skills-content">
          <div className="titles">
            <h2 class="content-title">My Skills and Experiences</h2>
            <p className="pop">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link className="skills-btn">See More</Link>
          </div>
            <center>
              <div className="skils-web">
              <div class=" col-right reveal">
            <div class="bar">
              <div class="info">
                <span>HTML</span>
                <span>95%</span>
              </div>
              <div class="line html"></div>
            </div>
            <div class="bar">
              <div class="info">
                <span>CSS</span>
                <span>85%</span>
              </div>
              <div class="line css"></div>
            </div>
            <div class="bar">
              <div class="info">
                <span>JavaScript</span>
                <span>80%</span>
              </div>
              <div class="line javascript"></div>
            </div>
            <div class="bar">
              <div class="info">
                <span>REACT</span>
                <span>80%</span>
              </div>
              <div class="linee REACT"></div>
            </div>
          </div>
              </div>
            </center>
        </div>
      </div>
    </section>
  );
};

export default Skils;
