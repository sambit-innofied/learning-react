import React, { useState } from "react";

function Products() {
  var [a, b] = useState(false);
  return (
    <div>
      <h1 className={`${a === false ? "text-red-500" : "text-blue-400"}`}>
        {a === false ? "hello" : "hey"}
      </h1>

      <button
        onClick={() => b(!a)}
        className="px-3 py-1 bg-green-500 rounded-md"
      >
        click
      </button>
    </div>
  );
}

export default Products;
