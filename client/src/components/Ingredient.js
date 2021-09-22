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
        className={`inline-flex transition duration-200 ease-in-out text-center flex-col rounded-xl border-2 mb-2 px-3 py-2 mr-2 border-primary-myGreen  ${
          checked.indexOf(ingredient.id) > -1 &&
          "border-primary-myGreen bg-primary-itemsBg "
        }`}
      >
        <img
          src={`/static/${ingredient.category.category}/${ingredient.name}.png`}
          className="w-16 h-16 mx-auto"
          alt={ingredient.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/static/harvest.png";
          }}
        />
        <p className="text-txtColor">{ingredient.name}</p>
      </div>
    </div>
  );
}
export default Ingredient;
