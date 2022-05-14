import Nav from "./components/Nav";
import StarrySky from "./components/StaryNight";
import SayBet from "./components/SayBet";
import AboveFold from "./components/AboveFold";
import "./App.css";

function App() {
  return (
    <div>
      <StarrySky />
      <div className="parent">
        <Nav />
        <section className="one">
          <AboveFold />
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
      </div>
    </div>
  );
}

export default App;
