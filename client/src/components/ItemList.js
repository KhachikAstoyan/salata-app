import React from "react";
// import { ChevronLeft } from "./Icons.js";
import Audio from "./Audio.js";

function ItemList(props) {
  return (
    <div className="flex bg-primary-bgLight pt-4 rounded-b-lg">
      <div className="w-full">
        {props.items.map((item, id) => {
          return (
            <li className="flex flex-row" key={props.orderId + id}>
              <div className="flex-1 m-4">
                <div className="flex w-full">
                  <div className="inline-block">
                    <p className="font-light font-DMSans text-secondary-light text-lg">
                      {" "}
                      Salad {id + 1}
                    </p>
                    <ul
                      onClick={() =>
                        console.log(Object.keys(["hello", "ingredient"]))
                      }
                    >
                      {item.ingredients.map((ingredient, index) => {
                        return (
                          <li
                            className="ml-2 font-light font-DMSans text-secondary-light text-base"
                            key={props.orderId + id + index}
                          >
                            {ingredient.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="mr-12">
                    <Audio />
                  </div>
                </div>

                <div className="mt-2">
                  <p className="font-light font-DMSans text-secondary-light text-lg">Extra info</p>
                  <p className="ml-2 font-light font-DMSans text-secondary-light text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra velit nulla, non condimentum eros rhoncus vel. Proin euismod dignissim tortor, sit amet interdum turpis.
                </p>
                </div>
              </div>


            </li>
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;
