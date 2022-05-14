import React from "react";
import ScrollDownIcon from "./ScrollDownIcon";
import Title from "./Title";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import animations from "../assets/animations";

export default function AboveFold() {
  const [ref1, inView1] = useInView();
  const { showTitle, hideTitle } = animations();
  const titleProps = useSpring(inView1 ? showTitle : hideTitle);

  return (
    <animated.div style={{ ...titleProps }}>
      <div ref={ref1}>
        <Title />
        <ScrollDownIcon />
      </div>
    </animated.div>
  );
}
