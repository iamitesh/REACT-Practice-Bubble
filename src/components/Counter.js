import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes, Link,Outlet } from 'react-router-dom';

export const UserContext = React.createContext();

const Counter = () => {
  const [count, setCount] = useState(0);
  // const countContext=UserContext()
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <h2>Counter</h2>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/counter/state-counter"> State Counter</Link>
            </li>
            <li>
              <Link to="/counter/context-counter">Context Counter</Link>
            </li>
            <li>
              <Link to="/counter/liftState-counter">Lift Counter</Link>
            </li>
          </ul>
        </nav>
        <>
          <h4>Counter Apps</h4>
          <Outlet />
        </>

      </div>
    </div>
  );
};

export default Counter;
