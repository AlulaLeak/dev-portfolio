import React, { useState } from "react";
import { animated as a, useSpring } from "react-spring";
import animations from "../../assets/animations";
import { useInView } from "react-intersection-observer";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import "../../styles/PortfolioPiece.scss";

export default function SayBetMobile() {
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
          <h1 onClick={() => toggle(!imgAndSummary)}>SayBet</h1>
          <h4 onClick={() => toggle(!imgAndSummary)}>
            (Sports-Betting App)
          </h4>
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
              <h4 onClick={() => toggle(!imgAndSummary)}>
                Project Summary:
              </h4>
            </LightSpeed>
            <LightSpeed right delay={1200} duration={1500}>
              <p onClick={() => toggle(!imgAndSummary)}>
                A live sports betting app where users can bet on
                their favorite NBA, NHL, NFL and MLB games.
                Moneylines, spreads, and totals available.
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
                Encapsulating the business logic behind
                sports-betting made this my most proud coding
                accomplishment thus far! Me and my (amazing)
                group got a chance to present it on recorded
                video before ending our monthly odds api
                subscription. Made in two weeks.
              </p>
            </LightSpeed>
            <div id="button-wrapper" className="github-link">
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
