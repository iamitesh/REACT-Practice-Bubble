
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Counter from '../Counter';
import DigitalClock from '../DigitalClock';
import Stopwatch from '../Stopwatch';
import CounterState from '../counter/CounterState';
import CounterContext from '../counter/CounterContext';
import LiftingStateCounter from '../counter/LiftingStateCounter';
import "../../App.css"
import Users from '../Users';
export const UserContext = React.createContext();

const Tabs = () => {

  const [count, setCount] = useState(0);
  // const countContext=UserContext()
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  return (

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/digital-clock">Digital Clock</Link>
            </li>
            <li>
              <Link to="/stopwatch">Stopwatch</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </nav>
        <>
          <Routes>
            <Route path="/counter" element={<Counter />} >
              {/* <Routes> */}
                <Route path="/counter/state-counter" element={<CounterState countername={"State Counter"} />} />
                <Route path="/counter/context-counter" element={
                  <UserContext.Provider value={0}>
                    <CounterContext countername={"Context Counter"} />
                  </UserContext.Provider>
                } />
                <Route path="/counter/liftState-counter" element={<LiftingStateCounter countername={"Lifting Counter"} count={count} increment={increment} decrement={decrement} />} />
              {/* </Routes> */}
            </Route>
            <Route path="/digital-clock" element={<DigitalClock />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/user" element={<Users />} />

          </Routes>
        </>

      </div>
    </Router>
  );
};

export default Tabs 