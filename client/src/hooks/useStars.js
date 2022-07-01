import { useState } from "react";
import anime from "animejs/lib/anime.es.js";

export default function useStars() {
  const [isMounted, setIsMounted] = useState(false);
  const [num, setNum] = useState(600);
  const [vw, setVw] = useState(
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  );
  const [vh, setVh] = useState(
    Math.max((document.documentElement.clientHeight, window.innerHeight || 0))
  );
  const starryNight = () => {
    anime({
      targets: ["#sky .star"],
      opacity: [
        {
          duration: 700,
          value: "0",
        },
        {
          duration: 700,
          value: "1",
        },
      ],
      easing: "linear",
      loop: true,
      delay: (el, i) => 50 * i,
    });
  };
  const shootingStars = () => {
    anime.remove("#shootingstars .wish");
    anime({
      targets: ["#shootingstars .wish"],
      easing: "linear",
      loop: true,
      delay: (el, i) => 1000 * i,
      opacity: [
        {
          duration: 700,
          value: "1",
        },
      ],
      width: [
        {
          value: "150px",
        },
        {
          value: "0px",
        },
      ],
      translateX: 350,
    });
  };
  const randomRadius = () => {
    return Math.random() * 0.7 + 0.6;
  };
  const getRandomX = () => {
    return Math.floor(Math.random() * Math.floor(vw)).toString();
  };
  const getRandomY = () => {
    return Math.floor(Math.random() * Math.floor(vh)).toString();
  };

  return {
    getRandomX,
    getRandomY,
    randomRadius,
    shootingStars,
    starryNight,
    vh,
    setVh,
    setVw,
    setNum,
    vw,
    num,
    isMounted,
    setIsMounted,
  };
}
