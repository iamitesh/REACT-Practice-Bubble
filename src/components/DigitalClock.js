import React, { useState } from 'react';

const DigitalClock = () => {

  let time  = new Date().toLocaleTimeString()

  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
  return (<>
        <h2>DigitalClock</h2>
        <p>{ctime}</p>

  </>

  )
};

export default DigitalClock;
