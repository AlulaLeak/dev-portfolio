import Nav from "./components/Nav";
import StarrySky from "./components/StaryNight";
import SayBet from "./components/projects/SayBet";
import Minesweeper from "./components/projects/Minesweeper";
import InterviewScheduler from "./components/projects/InterviewScheduler";
import AboveFold from "./components/AboveFold";
import Droid from "./components/Droid";
import Todo from "./components/projects/Todo";
import "./App.css";
import { useEffect } from "react";
const { detect } = require("detect-browser");
const browser = detect();

function App() {
  window.onload = function () {
    if (!window.location.hash) {
      window.location = window.location + "#loaded";
      window.location.reload();
    }
  };
  useEffect(() => {
    window.onload();
  }, []);
  function isSafari() {
    if (navigator.vendor.match(/[Aa]+pple/g).length > 0) return true;
    return false;
  }
  return (
    <div id="container">
      <StarrySky />
      <div className="parent">
        <Nav />
        <section className="one">
          <AboveFold />
          {(browser.name !== "safari" || !isSafari()) &&
            window.innerWidth > 500 && <Droid />}
          {window.innerWidth < 500 && <Droid />}
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <section className="two">
          <SayBet />
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <section className="three">
          <Minesweeper />
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <section className="four">
          <InterviewScheduler />
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <section className="five">
          <Todo />
        </section>
        {window.innerWidth < 500 && <div className="test"></div>}
      </div>
    </div>
  );
}

export default App;
