// import React from "react";
// import Products from "./Products";

// function App() {
//   return (
//     <div className="w-full h-screen bg-zinc-800 p-4">
//       <div className="w-44 h-32 rounded-xl bg-red-600 ">
//         <h3>Hello how do you do</h3>
//       </div>

//       {/* Import component */}
//       <Products />

//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Products from "./Products";
import Card5 from "./Card5";
import Button8 from "./Button8";

function App() {
  var [a, b] = useState(0);
  return (
    <div className="w-full h-screen bg-screen bg-zinc-900">
      <h1 className="text-white p-4">{a}</h1>
      <button
        onClick={() => b(a + 1)}
        className="px-3 py-1 bg-green-500 rounded-md"
      >
        click
      </button>

      <Products hero="value" />
      <Card5 />
      <Button8 />
    </div>
  );
}

export default App;
