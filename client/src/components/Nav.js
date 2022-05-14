import React from "react";
import "../styles/Nav.css";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="font-fam" href="https://www.google.com">
          A.L.
        </div>
        <div className="justify-content-end">
          <div className="links">
            <a className="font-fam" href="https://www.google.com">
              GitHub
            </a>
            <a className="font-fam" href="#login">
              StackOverFlow
            </a>
            <a className="font-fam" href="#login">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
