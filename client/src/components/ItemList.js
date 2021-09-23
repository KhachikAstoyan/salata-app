import React from "react";
// import { ChevronLeft } from "./Icons.js";
import Audio from "./Audio.js";

function ItemList(props) {
  return (
    <div className="flex bg-primary-itemsBg rounded-lg">
      <div className="w-full">
        {Object.keys(props.items)}
        {props.items.map((item, id) => {
          return (
            <li className="flex flex-row" key={props.orderId + id}>
              <div className="flex-1 m-4">
                <p className="font-medium text-lg"> Salad {id + 1}</p>
                <ul
                  onClick={() =>
                    console.log(Object.keys(["hello", "ingredient"]))
                  }
                >
                  {item.ingredients.map((ingredient, index) => {
                    return (
                      <li key={props.orderId + id + index}>
                        {ingredient.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex-1 flex justify-end">
                <Audio />
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;
