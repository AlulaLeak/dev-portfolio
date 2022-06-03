import React, { useState } from "react";
import { animated as a, useSpring } from "react-spring";
import animations from "../../assets/animations";
import { useInView } from "react-intersection-observer";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import "../../styles/PortfolioPiece.scss";

export default function TodoMobile() {
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
          <h1 onClick={() => toggle(!imgAndSummary)}>Todai</h1>
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
            className="todo-pic"
            alt="todo-app"
            src="/todo.jpg"
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
                A machine learning reminder app. As the user
                submits a new to-do list reminder into the app,
                the NLP library classifies the reminder into 4
                catagories. This app comes pre-trained but can
                also get smarter with more usage.
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
                  Next.js
                </p>
              </LightSpeed>
              <LightSpeed left delay={1600} duration={1000}>
                <p onClick={() => toggle(!imgAndSummary)}>
                  ClassifyText(JS)
                </p>
              </LightSpeed>
              <LightSpeed right delay={1700} duration={750}>
                <p onClick={() => toggle(!imgAndSummary)}>
                  Redis
                </p>
              </LightSpeed>
              <LightSpeed left delay={1800} duration={1000}>
                <p onClick={() => toggle(!imgAndSummary)}>
                  Upstash
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
                Made with a very small data set as well as a very
                small number of categories. Great introduction to
                serverless apps as well as using Redis/Upstash
                for persistent storage. Made in less than a week.
              </p>
            </LightSpeed>
            <div className="github-link">
              <button
                onClick={() =>
                  window.open(
                    "https://todo-nextjs-redis.vercel.app"
                  )
                }
              >
                Project Link
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
