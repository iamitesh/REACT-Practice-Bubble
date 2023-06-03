import { useState,useRef } from "react";

function LiftingStateCounter(props){
  const countValue=useRef(0)
    const increment=()=>{
      countValue.current.value += 1    
    }
    const decrement=()=>{
      countValue.current.value -= 1    

    }
  return (<>
    <div className="CounterState">
      <h2>{props.countername}</h2>
    <div className="Count">{props.count}</div>
    <button onClick={props.increment}>Increment</button>
    <button onClick={props.decrement}>Decrement</button>
    </div></>
  );
}

export default LiftingStateCounter;