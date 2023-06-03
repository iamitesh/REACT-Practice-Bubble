import React, { useState } from "react";
import "./App.css";
import CounterState from "./components/CounterState";
import CounterContext from "./components/CounterState";
import LiftingStateCounter from "./components/LiftingStateCounter";
export const UserContext = React.createContext();

function App() {
  const [count, setCount]=useState(0);
  const countContext=UserContext()
  const increment=()=>{
    setCount(count+1)  
  }
  const decrement=()=>{
    setCount(count-1)    

  }
  return (
    <div className="App">
      <h1>Hello and Welcome to React Practice bubble!</h1>
      <CounterState countername={"State Counter"}/>
      <UserContext.Provider value={0}>
      <CounterContext countername={"Context Counter"}/>
      </UserContext.Provider>
      <LiftingStateCounter countername={"Lifting Counter"}count={count}increment={increment} decrement={decrement} />
    </div>
  );
}

export default App;
