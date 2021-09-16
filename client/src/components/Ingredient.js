import React, { useState } from "react";


function Ingredient({ ingredientName }) {
  const [selected, setSelected] = useState(false);
  return (
    <div
      onClick={() => setSelected(!selected)}
      className={`inline-flex flex-wrap transition duration-200 ease-in-out text-center flex-col rounded-xl border-2 mb-2 px-3 py-2 bg-gray-100 mr-2 ${
        selected && "border-green-400 bg-green-100"
      }`}
    >
      {/* <img src=`http://localhost:3000/static/${}/${}.png` className="w-10 mx-auto" alt={ingredientName} /> */}
      <p>{ingredientName}</p>
    </div>
  );
}

export default Ingredient;
