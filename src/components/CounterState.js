import { useState } from "react";

function CounterState(props){
    const [count, setCount] =useState(0);
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)

    }
  return (<>
    <div className="CounterState">
    <h2>{props.countername}</h2>
    <div className="Count">{count}</div>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div></>
  );
}

export default CounterState;