import React from "react";
// import { ChevronLeft } from "./Icons.js";
import Audio from "../Audio.js";
import ExtraInfo from "./ExtraInfo";

function ItemList(props) {
  return (
    <div className="flex flex-col bg-primary-bgLight pt-10 pb-2 px-6 divide-y divide-gray-400 rounded-b-2xl">
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
                <Audio audioSrc={props.orderId + id} />
              </div>
            </div>
            <div className="">
              <ul className="flex flex-row flex-wrap">
                {item.ingredients.map((ingredient, index) => {
                  return (
                    <p
                      className=" mx-2 my-1 font-light font-DMSans text-secondary-light text-base"
                      key={props.orderId + id + index}
                    >
                      {index + 1 + ". " + ingredient.name + " "}
                    </p>
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
