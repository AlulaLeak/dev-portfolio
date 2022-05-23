import Nav from "./components/Nav";
import StarrySky from "./components/StaryNight";
import SayBet from "./components/SayBet";
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
        <section className="two">
          <SayBet />
        </section>
        <section className="three">
          <SayBet />
        </section>
        <section className="four">
          <SayBet />
        </section>
        {window.innerWidth < 500 && <div className="test"></div>}
      </div>
    </div>
  );
}

export default App;
