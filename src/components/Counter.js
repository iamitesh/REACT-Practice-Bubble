import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import '../App.css'
export const UserContext = React.createContext();

const Counter = () => {
  return (
    <div className="counter-container">
      <nav className="counter-nav">
        <ul className="counter-nav-list">
          <li className="counter-nav-item">
            <Link to="/counter/state-counter" className="counter-nav-link">
              State Counter
            </Link>
          </li>
          <li className="counter-nav-item">
            <Link to="/counter/context-counter" className="counter-nav-link">
              Context Counter
            </Link>
          </li>
          <li className="counter-nav-item">
            <Link to="/counter/liftState-counter" className="counter-nav-link">
              Lift Counter
            </Link>
          </li>
        </ul>
      </nav>
      <div className="counter-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Counter;