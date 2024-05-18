import React, { useState } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState({
    sec: 0,
    min: 0,
    hour: 0
  })
  const [watchId, setWatchId] = useState('')
  const [isPaused, setIsPaused] = useState(true)
  const updateTimer = () => {
    setTime((prev) => {
      let newTime = { ...prev }
      if (newTime.sec < 59) { newTime.sec++ }
      else {
        newTime.sec = 0;
        newTime.min++
      }
      if (newTime.min === 60) {
        newTime.min = 0;
        newTime.hour++
      }
      return newTime;
    })

  }
  const resumeTimer = () => {
    setIsPaused(!isPaused)
    if (!watchId) {
      let id = setInterval(updateTimer, 1000);
      setWatchId(id);
    } else {
      clearInterval(watchId);
      setWatchId("");
    }
  }
  const resetTimer = () => {
    clearInterval(watchId)
    setTime({
      sec: 0,
      min: 0,
      hour: 0
    })
  }


  return (
    <div>
      <h2>Stopwatch</h2>
      <h2>{`${time.hr < 10 ? 0 : ""}${time.hour} : ${time.min < 10 ? 0 : ""}${time.min} : ${time.sec < 10 ? 0 : ""}${time.sec}`}</h2>

      <div className='button-wrapper'>
        {/* {!isPaused &&
          <button onClick={setIsPaused(!isPaused)}>UnPause</button> 
        }*/}
        {/* {!isPaused ? */}
          <button onClick={resumeTimer}>{!isPaused?'Pause':'Resume'}</button>

        {/* } */}


        <button onClick={resetTimer}>Reset</button>

      </div>
    </div>
  );
};

export default Stopwatch;
