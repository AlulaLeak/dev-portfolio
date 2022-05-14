import React, { useState } from "react";
import { animated as a, useSpring } from "react-spring";
import animations from "../assets/animations";
import { useInView } from "react-intersection-observer";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import LightSpeed from "react-reveal/LightSpeed";
import "../styles/PortfolioPiece.css";

export default function SayBet() {
  const [imgAndSummary, toggle] = useState(true);
  const [mouseHoverPic, setMouseHoverPic] = useState(false);
  const [mouseHoverSummary, setMouseHoverSummary] = useState(false);

  const { showTitle, hideTitle } = animations();
  const [ref1, inView1] = useInView({
    threshold: window.innerWidth < 500 ? 0.4 : 0.6,
  });
  const [ref2, inView2] = useInView({
    threshold: window.innerWidth < 500 ? 0.4 : 0.6,
  });

  const secondProps = useSpring(inView1 ? showTitle : hideTitle);

  return window.innerWidth < 500 ? (
    <div className="wrapper">
      <a.div style={{ ...secondProps }}>
        <div className="title" ref={ref1}>
          <h1 onClick={() => toggle(!imgAndSummary)}>SayBet</h1>
          <h4 onClick={() => toggle(!imgAndSummary)}>(Sports-Betting App)</h4>
        </div>
      </a.div>
      <Flip left delay={250} duration={2000} when={inView2}>
        {imgAndSummary ? (
          <img
            ref={ref2}
            onClick={() => toggle(!imgAndSummary)}
            className="say-bet-pic"
            alt="saybet-sports-betting-app"
            src="/saybet-live-games-page.png"
          />
        ) : (
          <div className="summary-wrapper">
            <LightSpeed left delay={1000} duration={1500}>
              <h4 onClick={() => toggle(!imgAndSummary)}>Project Summary:</h4>
            </LightSpeed>
            <LightSpeed right delay={1200} duration={1500}>
              <p onClick={() => toggle(!imgAndSummary)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum!
              </p>
            </LightSpeed>
            <LightSpeed left delay={1400} duration={1000}>
              <h4 onClick={() => toggle(!imgAndSummary)}>Tech Stack:</h4>
            </LightSpeed>
            <LightSpeed right delay={1500} duration={750}>
              <p onClick={() => toggle(!imgAndSummary)}>- Lorem</p>
            </LightSpeed>
            <LightSpeed left delay={1600} duration={1000}>
              <p onClick={() => toggle(!imgAndSummary)}>- Lorem</p>
            </LightSpeed>
            <LightSpeed right delay={1700} duration={750}>
              <p onClick={() => toggle(!imgAndSummary)}>- Lorem</p>
            </LightSpeed>
            <LightSpeed left delay={1800} duration={1000}>
              <p onClick={() => toggle(!imgAndSummary)}>- Lorem</p>
            </LightSpeed>

            <div>
              <button onClick={() => window.open("https://www.google.com")}>
                GitHub Link
              </button>
            </div>
          </div>
        )}
        <Fade delay={1000} duration={3500} top forever>
          <p className="toggle" onClick={() => toggle(!imgAndSummary)}>
            - click on anything to toggle -
          </p>
        </Fade>
      </Flip>
    </div>
  ) : (
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
                className="full say-bet-pic"
                alt="saybet-sports-betting-app"
                src="/saybet-live-games-page.png"
              />
            </div>
          </Pulse>
        </div>
      </Flip>
      <Fade left when={inView1} duration={1000}>
        <div className="flex-column">
          <a.div style={{ ...secondProps }}>
            <div className="title" ref={ref1}>
              <h1 onClick={() => toggle(!imgAndSummary)}>SayBet</h1>
              <h4 onClick={() => toggle(!imgAndSummary)}>
                (Sports-Betting App)
              </h4>
            </div>
          </a.div>
          <Pulse when={mouseHoverSummary}>
            <div
              onMouseEnter={() => setMouseHoverSummary(true)}
              onMouseLeave={() => setMouseHoverSummary(false)}
              className="full summary-wrapper"
            >
              <LightSpeed when={inView1} left delay={1000} duration={1500}>
                <h4>Project Summary:</h4>
              </LightSpeed>
              <LightSpeed when={inView1} right delay={1200} duration={1500}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum!
                </p>
              </LightSpeed>
              <LightSpeed left when={inView1} delay={1400} duration={1000}>
                <h4>Tech Stack:</h4>
              </LightSpeed>
              <div>
                <LightSpeed right delay={1500} when={inView1} duration={750}>
                  <p>- Lorem</p>
                </LightSpeed>
                <LightSpeed left delay={1600} duration={1000} when={inView1}>
                  <p>- Lorem</p>
                </LightSpeed>
                <LightSpeed right delay={1700} duration={750} when={inView1}>
                  <p>- Lorem</p>
                </LightSpeed>
                <LightSpeed left delay={1800} duration={1000} when={inView1}>
                  <p>- Lorem</p>
                </LightSpeed>
              </div>
              <LightSpeed left when={inView1} delay={1400} duration={1000}>
                <h4>Notes:</h4>
              </LightSpeed>
              <LightSpeed when={inView1} right delay={1200} duration={1500}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae!
                </p>
              </LightSpeed>
              <div>
                <button onClick={() => window.open("https://www.google.com")}>
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
