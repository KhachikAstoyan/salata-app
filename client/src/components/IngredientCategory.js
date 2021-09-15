import React, { useState } from "react";
import Ingredient from "./Ingredient";

// TODO: fix toggling

const IngredientCategory = ({ name, ingredients, number }) => {
  const [showContent, updateContent] = useState(number === 0 ? true : false);
  return (
    <div className="mt-5 mb-2">
      <h2
        className="text-xl mb-2 transition-all active:text-green-500 active:"
        onClick={() => {
          updateContent(!showContent);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 inline transition-transform duration-300 transform"
          style={{
            transform: showContent ? "rotate(90deg)" : "rotate(0deg)",
          }}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
        {name}
      </h2>

      <div
        className={`transition-opacity duration-1000 ${
          showContent ? "block opacity-100" : "hidden opacity-0"
        }`}
      >
        {ingredients.map(ingredient => {
           return <Ingredient ingredientName={ingredient.name} />
        })}
      </div>
    </div>
  );
};

export default IngredientCategory;
