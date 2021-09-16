import React, { useState } from "react";

function Ingredient({ ingredient }) {
  const [selected, setSelected] = useState(false);
  return (
    <div
      onClick={() => setSelected(!selected)}
      className={`inline-flex flex-wrap transition duration-200 ease-in-out text-center flex-col rounded-xl border-2 mb-2 px-3 py-2 bg-gray-100 mr-2 ${
        selected && "border-green-400 bg-green-100"
      }`}
    >
      <img
        src={`http://localhost:3000/static/${ingredient.category.category}/${ingredient.name}.png`}
        className="w-10 mx-auto"
        alt={ingredient.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "http://localhost:3000/static/harvest.png";
        }}
      />
      <p>{ingredient.name}</p>
    </div>
  );
}
export default Ingredient;
