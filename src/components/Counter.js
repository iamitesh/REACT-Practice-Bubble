import React, { useState } from 'react';
import CounterState from './counter/CounterState';
import CounterContext from './counter/CounterContext';
import LiftingStateCounter from './counter/LiftingStateCounter';
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
      <CounterState countername={"State Counter"} />
      <UserContext.Provider value={0}>
        <CounterContext countername={"Context Counter"} />
      </UserContext.Provider>
      <LiftingStateCounter countername={"Lifting Counter"} count={count} increment={increment} decrement={decrement} />
    </div>
  );
};

export default Counter;
