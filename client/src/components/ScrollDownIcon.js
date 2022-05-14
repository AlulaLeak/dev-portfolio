import React from "react";
import Fade from "react-reveal/Fade";
import "../styles/ScrollDownIcon.css";

export default function ScrollDownIcon() {
  return (
    <div className="placement">
      <div id="wrapper">
        <div id="wrapper-inner">
          <div id="scroll-down">
            <Fade delay={1750} duration={4000} top forever>
              <span id="scroll-title">Scroll Down</span>
              <br />
              <span className="arrow-down"></span>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
