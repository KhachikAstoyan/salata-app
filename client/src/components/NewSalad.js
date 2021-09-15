import React, { useState } from "react";
import Ingredient from "./Ingredient";
import IngredientCategory from "./IngredientCategory";

const arr = [0, 1, 2, 3];

const NewSalad = () => {
  const [showContent, updateContent] = useState(0);

  return (
    <div className="order block">
      <span className="text-4xl align-middle py-3 text-green-600">Salad </span>
      <input
        type="number"
        placeholder="Quantity"
        className="py-2 px-3 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
      />

      {arr.map((elem) => (
        <IngredientCategory
          number={elem}
          // showContent={showContent}
          // updateContent={updateContent}
        />
      ))}

      <div>
        <h2 className="text-xl mb-2">Extra Info</h2>
        <textarea
          class="w-full px-3 py-2 border rounded-lg focus:outline-none"
          rows="4"
        ></textarea>
      </div>
    </div>
  );
};

export default NewSalad;
