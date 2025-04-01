import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes, Link,Outlet } from 'react-router-dom';

export const UserContext = React.createContext();

const MachineCoding = () => {

  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/machine-coding/t1">Accordion</Link>
            </li>
            <li>
              <Link to="/machine-coding/t2">Nested checkboxes</Link>
            </li>
            <li>
              <Link to="/machine-coding/t3">Progress Bar</Link>
            </li>            
            <li>
              <Link to="/machine-coding/t4">Recursive Form structure</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default MachineCoding;
