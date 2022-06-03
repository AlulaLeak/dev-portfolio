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
            <a
              className="font-fam"
              href="mailto:alula.leakemariam94@gmail.com"
            >
              Email Me
            </a>
            <a
              rel="noopener noreferrer"
              className="font-fam"
              href="https://www.github.com/AlulaLeak"
              target="_blank"
            >
              GitHub
            </a>
            <a
              rel="noopener noreferrer"
              className="font-fam"
              target="_blank"
              href="https://www.linkedin.com/in/alula-leakemariam-903059233/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
