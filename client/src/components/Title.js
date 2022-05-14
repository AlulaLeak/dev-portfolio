import React from "react";
import "../styles/Title.css";

export default function Title() {
  return (
    <>
      <div className="floating">
        <div className="title-pos">
          <span className="name-first">Alula</span>
          <br />
          <span className="name-last">Leakemariam</span>
          <br />
          <span className="job-desc">Software Developer</span>
        </div>
        <div className="job-desc-mover"></div>
      </div>
    </>
  );
}
