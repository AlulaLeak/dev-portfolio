import React, { useState } from "react";
import { animated as a, useSpring } from "react-spring";
import animations from "../../assets/animations";
import { useInView } from "react-intersection-observer";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import LightSpeed from "react-reveal/LightSpeed";
import "../../styles/PortfolioPiece.scss";

export default function SayBetDesktop() {
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
            <div
              onMouseEnter={() => setMouseHoverTitle(true)}
              onMouseLeave={() => setMouseHoverTitle(false)}
              className="title"
              ref={ref1}
            >
              <Pulse when={mouseHoverTitle}>
                <h1 onClick={() => toggle(!imgAndSummary)}>
                  SayBet
                </h1>
              </Pulse>
              <Pulse when={mouseHoverTitle}>
                <h4 onClick={() => toggle(!imgAndSummary)}>
                  (Sports-Betting App)
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
                  A live sports betting app where users can bet
                  on their favorite sports games. Leagues include
                  the NBA, NHL, NFL and MLB. Types of bets that
                  are available to be made are moneylines (head
                  to head), spreads, and totals.
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
                  <p>PostgreSQL</p>
                </LightSpeed>
                <LightSpeed
                  left
                  delay={1600}
                  duration={1000}
                  when={inView1}
                >
                  <p>Express</p>
                </LightSpeed>
                <LightSpeed
                  right
                  delay={1700}
                  duration={750}
                  when={inView1}
                >
                  <p>React.js</p>
                </LightSpeed>
                <LightSpeed
                  left
                  delay={1800}
                  duration={1000}
                  when={inView1}
                >
                  <p>Node.js</p>
                </LightSpeed>
              </div>
              <LightSpeed
                left
                when={inView1}
                delay={1400}
                duration={1000}
              >
                <h4 style={{ marginTop: "0vh" }}>Notes:</h4>
              </LightSpeed>
              <LightSpeed
                when={inView1}
                right
                delay={1200}
                duration={1500}
              >
                <p>
                  Encapsulating the business logic behind
                  sports-betting made this my most proud coding
                  accomplishment thus far! My (amazing) group and
                  I got a chance to present it on recorded video
                  before ending our monthly odds api
                  subscription. Made in two weeks.
                </p>
              </LightSpeed>
              <div id="button-wrapper">
                <button
                  onClick={() =>
                    window.open(
                      "https://share.vidyard.com/watch/vbHZBNsPzgnBwnEg9Gu4UV?"
                    )
                  }
                >
                  Video Demo
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://github.com/AlulaLeak/sports-betting-app"
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
