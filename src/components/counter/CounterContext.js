import React, { useContext, useState } from 'react';
import { UserContext } from '../Counter';  // Adjust the import path according to your file structure

const CounterContext = (props) => {
  const [count, setCount] = useState(0);
  const userContextValue = useContext(UserContext);  // Using useContext to access UserContext

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{userContextValue}</h1>  {/* Accessing the context value */}
      <div className="CounterState">
        <h2>{props.countername}</h2>
        <div className="Count">{count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterContext;
