import React, { useState } from "react";
import { animated as a, useSpring } from "react-spring";
import animations from "../../assets/animations";
import { useInView } from "react-intersection-observer";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import "../../styles/PortfolioPiece.scss";

export default function InterviewSchedulerMobile() {
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
            Interview Scheduler
          </h1>
          <h4 onClick={() => toggle(!imgAndSummary)}>
            (Click on the image to read more)
          </h4>
        </div>
      </a.div>
      <Flip left delay={250} duration={2000} when={inView2}>
        {imgAndSummary ? (
          <img
            ref={ref2}
            onClick={() => toggle(!imgAndSummary)}
            className="mine-pic"
            alt="Interview-Scheduler-Game-app"
            src="/interview-scheduler.jpg"
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
                A user can book, delete and edit interviews
                throughout the weekday by picking an available
                day and time slot, typing the name of the
                interviewee and selecting from a given list of
                potential interviewers.
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
                  PostgreSQL
                </p>
              </LightSpeed>
              <LightSpeed left delay={1600} duration={1000}>
                <p onClick={() => toggle(!imgAndSummary)}>
                  Express
                </p>
              </LightSpeed>
              <LightSpeed right delay={1700} duration={750}>
                <p onClick={() => toggle(!imgAndSummary)}>
                  React.js
                </p>
              </LightSpeed>
              <LightSpeed left delay={1800} duration={1000}>
                <p onClick={() => toggle(!imgAndSummary)}>
                  Node.js
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
                Took a test-driven development approach and
                worked with testing libraries like storybook and
                cypress for unit and end-to-end testing.
              </p>
            </LightSpeed>
            <div id="button-wrapper" className="github-link">
              <button
                onClick={() =>
                  window.open(
                    "https://interview-scheduler-blue.vercel.app/"
                  )
                }
              >
                Project Link
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AlulaLeak/scheduler-assignment"
                  )
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
