import React, { useState } from "react";
import { animated as a, useSpring } from "react-spring";
import animations from "../../assets/animations";
import { useInView } from "react-intersection-observer";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import LightSpeed from "react-reveal/LightSpeed";
import "../../styles/PortfolioPiece.scss";

export default function MinesweeperDesktop() {
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
                alt="Minesweeper-game-app"
                src="/minesweeper.jpg"
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
                  Minesweeper
                </h1>
              </Pulse>
              <Pulse when={mouseHoverTitle}>
                <h4 onClick={() => toggle(!imgAndSummary)}>
                  (Mini-Game App)
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
                  A simple game of minesweeper. Players can
                  choose between three levels and the mines on
                  the minefield are randomly generated every
                  game.
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
                  <p>React.js</p>
                </LightSpeed>
                <LightSpeed
                  left
                  delay={1600}
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
                <h4>Notes:</h4>
              </LightSpeed>
              <LightSpeed
                when={inView1}
                right
                delay={1200}
                duration={1500}
              >
                <p>
                  I (honestly) made this app on a whim, after
                  completing the core logic of the game, in an
                  interview practice question. I was able to
                  create the function that exposes adjacent
                  zeros, using a recursion technique. Who knew
                  recursion would come in handy!!
                </p>
              </LightSpeed>
              <div id="push-up">
                <button
                  onClick={() =>
                    window.open(
                      "https://minesweeper-client-five.vercel.app/"
                    )
                  }
                >
                  Project Link
                </button>
              </div>
            </div>
          </Pulse>
        </div>
      </Fade>
    </div>
  );
}
