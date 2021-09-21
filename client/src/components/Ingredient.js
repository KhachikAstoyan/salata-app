import React, { useState } from "react";

function Ingredient({ ingredient, checked, updateIngredient }) {
  const [selected, setSelected] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setSelected(!selected);
          updateIngredient(ingredient.id, !selected);
        }}
        className={`inline-flex flex-wrap transition duration-200 ease-in-out text-center flex-col rounded-xl border-2 mb-2 px-3 py-2 bg-gray-100 mr-2 ${
          checked.indexOf(ingredient.id) > -1 && "border-green-400 bg-green-100"
        }`}
      >
        <img
          src={`/static/${ingredient.category.category}/${ingredient.name}.png`}
          className="w-10 mx-auto"
          alt={ingredient.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/static/harvest.png";
          }}
        />
        <p>{ingredient.name}</p>
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-lg"
        onClick={() => {
          console.log(checked.indexOf(ingredient.id));
        }}
      >
        log
      </button>
    </div>
  );
}
export default Ingredient;
