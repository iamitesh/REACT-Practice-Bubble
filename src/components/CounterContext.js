import { useState } from "react";

function CounterContext(){
    const [count, setCount] =useState(0);
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)

    }
  return (
    <UserContext.Consumer>
      {value => <h1>{value}</h1>} 
      {/* prints: Reed */}
      <div className="CounterState">
      <h2>{props.countername}</h2>
    <div className="Count">{count}</div>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div>
    </UserContext.Consumer>
  );
}

export default CounterContext;