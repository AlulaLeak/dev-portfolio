import React, { useState } from "react";
import { animated as a, useSpring } from "react-spring";
import animations from "../../assets/animations";
import { useInView } from "react-intersection-observer";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import "../../styles/PortfolioPiece.css";

export default function MinesweeperMobile() {
  const [imgAndSummary, toggle] = useState(true);
  const { showTitle, hideTitle } = animations();
  const [ref1, inView1] = useInView({
    threshold: window.innerWidth < 500 ? 0.4 : 0.6,
  });
  const [ref2, inView2] = useInView({
    threshold: window.innerWidth < 500 ? 0.4 : 0.6,
  });

  const secondProps = useSpring(inView1 ? showTitle : hideTitle);

  return (
    <div className="wrapper">
      <a.div style={{ ...secondProps }}>
        <div className="title" ref={ref1}>
          <h1 onClick={() => toggle(!imgAndSummary)}>
            Minesweeper
          </h1>
          <h4 onClick={() => toggle(!imgAndSummary)}>
            (Game App)
          </h4>
        </div>
      </a.div>
      <Flip left delay={250} duration={2000} when={inView2}>
        {imgAndSummary ? (
          <img
            ref={ref2}
            onClick={() => toggle(!imgAndSummary)}
            className="mine-pic"
            alt="Minesweeper-Game-app"
            src="/minesweeper.jpg"
          />
        ) : (
          <div className="summary-wrapper">
            <LightSpeed left delay={1000} duration={1500}>
              <h4 onClick={() => toggle(!imgAndSummary)}>
                Project Summary:
              </h4>
            </LightSpeed>
            <LightSpeed right delay={1200} duration={1500}>
              <p onClick={() => toggle(!imgAndSummary)}>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Maxime mollitia, molestiae quas
                vel sint commodi repudiandae consequuntur
                voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga
                praesentium optio, eaque rerum!
              </p>
            </LightSpeed>
            <LightSpeed left delay={1400} duration={1000}>
              <h4 onClick={() => toggle(!imgAndSummary)}>
                Tech Stack:
              </h4>
            </LightSpeed>
            <div className="row-wrapper">
              <LightSpeed right delay={1500} duration={750}>
                <p onClick={() => toggle(!imgAndSummary)}>
                  - Lorem
                </p>
              </LightSpeed>
              <LightSpeed left delay={1600} duration={1000}>
                <p onClick={() => toggle(!imgAndSummary)}>
                  - Lorem
                </p>
              </LightSpeed>
              <LightSpeed right delay={1700} duration={750}>
                <p onClick={() => toggle(!imgAndSummary)}>
                  - Lorem
                </p>
              </LightSpeed>
              <LightSpeed left delay={1800} duration={1000}>
                <p onClick={() => toggle(!imgAndSummary)}>
                  - Lorem
                </p>
              </LightSpeed>
            </div>
            <LightSpeed left delay={1400} duration={1000}>
              <h4 onClick={() => toggle(!imgAndSummary)}>
                Notes:
              </h4>
            </LightSpeed>
            <LightSpeed right delay={1200} duration={1500}>
              <p onClick={() => toggle(!imgAndSummary)}>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Maxime mollitia, molestiae quas
                vel sint commodi repudiandae!
              </p>
            </LightSpeed>
            <div className="github-link">
              <button
                onClick={() =>
                  window.open("https://www.google.com")
                }
              >
                GitHub Link
              </button>
            </div>
          </div>
        )}
        <Fade delay={1000} duration={3500} top forever>
          <p
            className="toggle"
            onClick={() => toggle(!imgAndSummary)}
          >
            - click on anything to toggle -
          </p>
        </Fade>
      </Flip>
    </div>
  );
}
