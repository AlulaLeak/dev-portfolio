import React, { useState } from "react";
import { animated as a, useSpring } from "react-spring";
import animations from "../../assets/animations";
import { useInView } from "react-intersection-observer";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import LightSpeed from "react-reveal/LightSpeed";
import "../../styles/PortfolioPiece.scss";

export default function InterviewSchedulerDesktop() {
  const [imgAndSummary, toggle] = useState(true);
  const [mouseHoverPic, setMouseHoverPic] = useState(false);
  const [mouseHoverSummary, setMouseHoverSummary] =
    useState(false);
  const [mouseHoverTitle, setMouseHoverTitle] = useState(false);
  const { showTitle, hideTitle } = animations();
  const [ref1, inView1] = useInView({
    threshold: 0.2,
  });

  const secondProps = useSpring(inView1 ? showTitle : hideTitle);

  return (
    <div className="wrapper">
      <Flip left when={inView1} delay={500} duration={2000}>
        <div
          onMouseEnter={() => setMouseHoverPic(true)}
          onMouseLeave={() => setMouseHoverPic(false)}
        >
          <Pulse when={mouseHoverPic}>
            <div>
              <img
                ref={ref1}
                className="full-img say-bet-pic"
                alt="Interview-scheduler-app"
                src="/interview-scheduler.jpg"
              />
            </div>
          </Pulse>
        </div>
      </Flip>
      <Fade left when={inView1} duration={1000}>
        <div className="flex-column">
          <a.div style={{ ...secondProps }}>
            <div
              onMouseEnter={() => setMouseHoverTitle(true)}
              onMouseLeave={() => setMouseHoverTitle(false)}
              className="title"
              ref={ref1}
            >
              <Pulse when={mouseHoverTitle}>
                <h1
                  style={{ marginTop: "22vh" }}
                  onClick={() => toggle(!imgAndSummary)}
                >
                  Interview <br /> Scheduler
                </h1>
              </Pulse>
              <Pulse when={mouseHoverTitle}>
                <h4 onClick={() => toggle(!imgAndSummary)}>
                  (Scheduling App)
                </h4>
              </Pulse>
            </div>
          </a.div>
          <Pulse when={mouseHoverSummary}>
            <div
              onMouseEnter={() => setMouseHoverSummary(true)}
              onMouseLeave={() => setMouseHoverSummary(false)}
              className="full summary-wrapper"
            >
              <LightSpeed
                when={inView1}
                left
                delay={1000}
                duration={1500}
              >
                <h4>Project Summary:</h4>
              </LightSpeed>
              <LightSpeed
                when={inView1}
                right
                delay={1200}
                duration={1500}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Maxime mollitia, molestiae
                  quas vel sint commodi repudiandae consequuntur
                  voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga
                  praesentium optio, eaque rerum!
                </p>
              </LightSpeed>
              <LightSpeed
                left
                when={inView1}
                delay={1400}
                duration={1000}
              >
                <h4>Tech Stack:</h4>
              </LightSpeed>
              <div>
                <LightSpeed
                  right
                  delay={1500}
                  when={inView1}
                  duration={750}
                >
                  <p>- Lorem</p>
                </LightSpeed>
                <LightSpeed
                  left
                  delay={1600}
                  duration={1000}
                  when={inView1}
                >
                  <p>- Lorem</p>
                </LightSpeed>
                <LightSpeed
                  right
                  delay={1700}
                  duration={750}
                  when={inView1}
                >
                  <p>- Lorem</p>
                </LightSpeed>
                <LightSpeed
                  left
                  delay={1800}
                  duration={1000}
                  when={inView1}
                >
                  <p>- Lorem</p>
                </LightSpeed>
              </div>
              <LightSpeed
                left
                when={inView1}
                delay={1400}
                duration={1000}
              >
                <h4>Notes:</h4>
              </LightSpeed>
              <LightSpeed
                when={inView1}
                right
                delay={1200}
                duration={1500}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Maxime mollitia, molestiae
                  quas vel sint commodi repudiandae!
                </p>
              </LightSpeed>
              <div id="button-wrapper">
                <button
                  onClick={() =>
                    window.open(
                      "https://bespoke-mermaid-ffb3a9.netlify.app"
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
          </Pulse>
        </div>
      </Fade>
    </div>
  );
}
