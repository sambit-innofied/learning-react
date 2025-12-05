import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTimer] = useState(0);
  useEffect(() => {
    console.log('the component is mounting')
    const timer = setInterval(() => setTimer(time + 1), 1000);

    return function () {
    console.log('unmounting...')
      clearInterval(timer);
    };
  }, [time]);

  return (
    <>
      <h1>Stopwatch</h1>
      <p>The count is {time}</p>
    </>
  );
}

export default Timer;
