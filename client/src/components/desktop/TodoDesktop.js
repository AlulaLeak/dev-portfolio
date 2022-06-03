import React, { useState } from "react";
import { animated as a, useSpring } from "react-spring";
import animations from "../../assets/animations";
import { useInView } from "react-intersection-observer";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import LightSpeed from "react-reveal/LightSpeed";
import "../../styles/PortfolioPiece.scss";

export default function TodoDesktop() {
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
                alt="todo-app"
                src="/todo.jpg"
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
                  Todai
                </h1>
              </Pulse>
              <Pulse when={mouseHoverTitle}>
                <h4 onClick={() => toggle(!imgAndSummary)}>
                  (Machine Learning Reminder App)
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
                  As the user submits a new to-do list reminder
                  into the app, the NLP library classifies the
                  reminder into 4 catagories. This app comes
                  pre-trained but can also get smarter with more
                  usage.
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
                  <p>Next.js</p>
                </LightSpeed>
                <LightSpeed
                  left
                  delay={1600}
                  duration={1000}
                  when={inView1}
                >
                  <p>ClassifyText(JS)</p>
                </LightSpeed>
                <LightSpeed
                  right
                  delay={1700}
                  duration={750}
                  when={inView1}
                >
                  <p>Redis</p>
                </LightSpeed>
                <LightSpeed
                  left
                  delay={1800}
                  duration={1000}
                  when={inView1}
                >
                  <p>Upstash</p>
                </LightSpeed>
              </div>
              <LightSpeed
                left
                when={inView1}
                delay={1400}
                duration={1000}
              >
                <h4 style={{ marginTop: "1vw" }}>Notes:</h4>
              </LightSpeed>
              <LightSpeed
                when={inView1}
                right
                delay={1200}
                duration={1500}
              >
                <p>
                  This app was made with a very small data set as
                  well as a very small number of categories. This
                  was a great introduction to serverless apps as
                  well as using Upstash to be able to use Redis
                  for persistent storage. Made in less than a
                  week.
                </p>
              </LightSpeed>
              <div>
                <button
                  onClick={() =>
                    window.open(
                      "https://todo-nextjs-redis.vercel.app/"
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
