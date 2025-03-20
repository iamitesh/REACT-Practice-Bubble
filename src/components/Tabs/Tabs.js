import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Counter from '../Counter';
import DigitalClock from '../DigitalClock';
import Stopwatch from '../Stopwatch';
import CounterState from '../counter/CounterState';
import CounterContext from '../counter/CounterContext';
import LiftingStateCounter from '../counter/LiftingStateCounter';
import "../../App.css"; // Assuming you have some global styles here
import Users from '../Users';
import MachineCoding from '../MachineCoding';
import Accordion from '../Accordion';
import NestedCheckbox from '../NestedCheckbox';
import ProgressBar from '../ProgressBar';
export const UserContext = React.createContext();

const Tabs = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Router>
      <div className="tabs-container">
        <nav className="tabs-nav">
          <ul className="tabs-nav-list">
            <li className="tabs-nav-item">
              <Link to="/machine-coding" className="tabs-nav-link">
                Machine Coding
              </Link>
            </li>
            <li className="tabs-nav-item">
              <Link to="/counter" className="tabs-nav-link">
                Counter
              </Link>
            </li>
            <li className="tabs-nav-item">
              <Link to="/digital-clock" className="tabs-nav-link">
                Digital Clock
              </Link>
            </li>
            <li className="tabs-nav-item">
              <Link to="/stopwatch" className="tabs-nav-link">
                Stopwatch
              </Link>
            </li>
            <li className="tabs-nav-item">
              <Link to="/user" className="tabs-nav-link">
                User
              </Link>
            </li>
          </ul>
        </nav>
        <div className="tabs-content">
          <Routes>
            <Route path="/machine-coding" element={<MachineCoding />} >
              <Route path="/machine-coding/t1" element={<div><Accordion /></div>} />
              <Route path="/machine-coding/t2" element={<div><NestedCheckbox/></div>} />
              <Route path="/machine-coding/t3" element={<div><ProgressBar/></div>} />
            </Route>
            <Route path="/counter" element={<Counter />} >
              <Route path="/counter/state-counter" element={<CounterState countername={"State Counter"} />} />
              <Route path="/counter/context-counter" element={
                <UserContext.Provider value={0}>
                  <CounterContext countername={"Context Counter"} />
                </UserContext.Provider>
              } />
              <Route path="/counter/liftState-counter" element={<LiftingStateCounter countername={"Lifting Counter"} count={count} increment={increment} decrement={decrement} />} />
            </Route>
            <Route path="/digital-clock" element={<DigitalClock />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/user" element={<Users />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Tabs;