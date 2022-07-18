import ClassComponent from "../../components/ClassComp";
import FunctionalComp from "../../components/FunctionalComp";
import "./Home.css";
function Home() {
  return (
    <div className="Home">
      <h2>Functional and Class component counter</h2>
      <div className="Comps">
        <FunctionalComp initialValue={4} />
        <ClassComponent />
      </div>
    </div>
  );
}

export default Home;
