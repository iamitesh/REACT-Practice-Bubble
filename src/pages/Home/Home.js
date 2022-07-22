import ComponentComposition from "../../components/ComponentComposition";
import CompType from "../../components/CompType";
import StateLess from "../../components/StateLess";

import "./Home.css";
function Home() {
  return (
    <div className="Home">
      <StateLess />
      <CompType />
      <ComponentComposition>
        <h2>Lifting Up State</h2>
      </ComponentComposition>
    </div>
  );
}

export default Home;
