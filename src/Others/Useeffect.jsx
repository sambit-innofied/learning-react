import React, { useEffect, useState } from "react";
import MyComp from "./Others/MyComp";

function Useeffect() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    console.log("UseEffect component is mounting...");
  }, []);

  return (
    <div>
      {visible ? <MyComp /> : <></>}
      <button onClick={() => setVisible(!visible)}>Toggle</button>
    </div>
  );
}

export default Useeffect;
