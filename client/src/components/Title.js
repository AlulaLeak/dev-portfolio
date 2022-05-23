import React from "react";
import "../styles/Title.css";

export default function Title() {
  return (
    <>
      <div className="floating">
        <div className="title-pos">
          <div className="name-wrapper">
            <span className="name-first">Alula</span>
            <span className="name-last">Leakemariam</span>
          </div>
          <span className="job-desc">Software Developer</span>
        </div>
        <div className="job-desc-mover"></div>
      </div>
    </>
  );
}
