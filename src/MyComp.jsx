import React, { useEffect, useState } from "react";

function MyComp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("MyComp component is mounting...");
    return function () {
      console.log("unmounting....");
    };
  }, []);

  useEffect(() => {
    console.log("count is updating");
    return function () {
      console.log("returning" , count);
    };
  }, [count]);

  return (
    <>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Click here</button>
    </>
  );
}

export default MyComp;
