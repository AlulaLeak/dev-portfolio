import Nav from "./components/Nav";
import StarrySky from "./components/StaryNight";
import SayBet from "./components/projects/SayBet";
import Minesweeper from "./components/projects/Minesweeper";
import AboveFold from "./components/AboveFold";
import Droid from "./components/Droid";
import "./App.css";

function App() {
  return (
    <div id="container">
      <StarrySky />
      <div className="parent">
        <Nav />
        <section className="one">
          <AboveFold />
          <Droid />
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
          <SayBet />
        </section>
        {window.innerWidth < 500 && <div className="test"></div>}
      </div>
    </div>
  );
}

export default App;
