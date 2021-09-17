import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

import IngredientCategory from "./IngredientCategory";
import Counter from "./Counter";

const arr = [0, 1, 2, 3];

const query = gql`
  query RootQueryType {
    ingredients {
      name
      id
      category {
        id
        category
      }
    }
  }
`;

const NewSalad = () => {
  const [quantity,setQuantity] = useState(1);
  const { loading, error, data } = useQuery(query);
  const [categories, setCategories] = useState();
  const [categoryElems, setCategoryElems] = useState();


  useEffect(() => {
    if (data) {
      const categoryToIngredients = {};
      data.ingredients.map((ingredient) => {
        if (categoryToIngredients[ingredient.category.category]) {
          categoryToIngredients[ingredient.category.category].push(ingredient);
        } else {
          categoryToIngredients[ingredient.category.category] = [];
          categoryToIngredients[ingredient.category.category].push(ingredient);
        }
      });

      setCategories(categoryToIngredients);
    }
  }, [data]);

  useEffect(() => {
    if (categories) {
      const catElems = [];
      let id = 0;

      for (const [key, value] of Object.entries(categories)) {
        catElems.push(
          <IngredientCategory
            name={key}
            key={key}
            ingredients={value}
            number={id}
          />
        );
        id++;
      }

      setCategoryElems(catElems);
    }
  }, [categories]);

  if (loading) return "LOADING...";
  if (error) return `Error! ${error.message}`;
  return (
    <div className="order block">
      <span className="text-4xl align-middle py-3 text-green-600">Salad </span>
      <Counter quantity={quantity} setQuantity={(x)=>{setQuantity(x)}}/>
      {categoryElems}

      <div className="mt-10">
        <h2 className="text-xl mb-2">Extra Info</h2>
        <textarea
          className="w-full px-3 py-2 border rounded-lg focus:outline-none"
          rows="4"
        ></textarea>
      </div>
    </div>
  );
};

export default NewSalad;
