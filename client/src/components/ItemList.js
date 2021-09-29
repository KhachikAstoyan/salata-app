import React from "react";
// import { ChevronLeft } from "./Icons.js";
import Audio from "./Audio.js";
import ExtraInfo from "./ExtraInfo";

function ItemList(props) {
  return (
    <div className="flex flex-col bg-primary-bgLight pt-10 pb-2 px-6 divide-y divide-gray-400 rounded-b-lg">
      {props.items.map((item, id) => {
        return (
          <div className="py-4" key={props.orderId + id}>
            <div className="flex items-center">
              <div className="flex-grow ">
                <p className="font-light align-middle font-DMSans text-secondary-light text-xl">
                  {" "}
                  Salad {id + 1}
                </p>
              </div>
              <div className="w-16 h-16 p-2 flex-none">
                <Audio />
              </div>
            </div>
            <div className="">
              <ul
                onClick={() =>
                  console.log(Object.keys(["hello", "ingredient"]))
                }
              >
                {item.ingredients.map((ingredient, index) => {
                  return (
                    <span
                      className=" font-light font-DMSans text-secondary-light text-base"
                      key={props.orderId + id + index}
                    >
                      {index + 1 + ". " + ingredient.name + " "}
                    </span>
                  );
                })}
              </ul>
              <ExtraInfo extraInfo={item.extraInfo} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ItemList;
