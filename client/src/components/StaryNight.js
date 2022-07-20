import React, { useEffect } from "react";
import useStars from "../hooks/useStars";
import "../styles/StaryNight.css";

export default function StarrySky() {
  const {
    getRandomX,
    getRandomY,
    randomRadius,
    // shootingStars,
    starryNight,
    num,
    isMounted,
  } = useStars();

  useEffect(() => {
    starryNight();
    // shootingStars();
  }, [starryNight]);

  return (
    <div id="App">
      <svg id="sky">
        {[...Array(num)].map((x, y) => (
          <circle
            cx={getRandomX()}
            cy={getRandomY()}
            r={randomRadius()}
            stroke="none"
            strokeWidth="0"
            fill="white"
            key={y}
            className="star"
          />
        ))}
      </svg>
      {isMounted === true && <div style={{ color: "white" }}>hi</div>}
      <div id="shootingstars">
        {[...Array(60)].map((x, y) => (
          <div
            key={y}
            className="wish"
            style={{
              left: `${getRandomY()}px`,
              top: `${getRandomX()}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
