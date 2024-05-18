
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Counter from '../Counter';
import DigitalClock from '../DigitalClock';
import Stopwatch from '../Stopwatch';

const Tabs = () => {
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
          </ul>
        </nav>
<>
<h4>HIII</h4>
<Routes>
          <Route path="/counter" element={<Counter/>} />
          <Route path="/digital-clock" element={<DigitalClock/>} />
          <Route path="/stopwatch" element={<Stopwatch/>} />
        </Routes>
</>

      </div>
    </Router>
  );
};

export default Tabs 