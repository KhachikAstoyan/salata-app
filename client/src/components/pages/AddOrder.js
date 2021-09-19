import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

import { Button } from "../Button";
import NewSalad from "../NewSalad";
import { arrayExpression } from "@babel/types";

const order = {
  isTakeout: false,
  items: [{ ingredients: [], quantity: 1, extraInfo: "" }],
};

const addOrderMutation = gql`
  mutation AddOrderMutation($addOrderInput: inputOrder) {
    addOrder(input: $addOrderInput) {
      id
      dueTime
      startTime
      isTakeout
      items {
        ingredients {
          id
          name
          category {
            category
          }
        }
        quantity
        extraInfo
      }
      orderNumber
      status
    }
  }
`;

const AddOrder = () => {
  const [selectedItem, selectItem] = useState(0);
  const [count, updateCount] = useState(["item"]);
  const [submitOrder, { data, loading, error }] = useMutation(addOrderMutation);
  return (
    <main className="container max-w-5xl mx-auto mb-40 ">
      {count.map((item, id) => {
        return (
          <NewSalad
            key={id}
            updateQuantity={(x) => (order.items[id].quantity = x)}
            addIngredient={(ingredientId) =>
              order.items[id].ingredients.push(ingredientId)
            }
            removeIngredient={(ingredientId) => {
              const index = order.items[id].ingredients.indexOf(ingredientId);
              if (index > -1) order.items[id].ingredients.splice(index, 1);
            }}
            setExtraInfo={(value) => (order.items[id].extraInfo = value)}
            showContent={selectedItem === id ? true : false}
            selectItem={() => {
              selectItem(id);
            }}
          />
        );
      })}
      <div className="w-full fixed bottom-0 left-0">
        <div className="order border-green-500 border-2 bg-gray-100 flex flex-col max-w-5xl py-4 mx-auto sm:flex-row">
          <div className="flex-1 text-3xl py-1 text-green-600">
            Order <label className="text-gray-600 text-lg">Takeout </label>
            <input
              type="checkbox"
              className="appearance-none text-green-600 focus:ring-green-600 rounded-sm "
              onChange={(e) => (order.isTakeout = e.target.checked)}
            ></input>
          </div>
          <div className="flex flex-1 sm:justify-end">
            <Button
              btnName="+"
              btnFunction={() => {
                updateCount([...count, "item"]);
                order.items.push({
                  ingredients: [],
                  quantity: 1,
                  extraInfo: "",
                });
                selectItem(order.items.length - 1);
                console.log(selectedItem);
              }}
              btnStyle="bg-green-400 text-gray-100 text-xl  "
            />
            <Button
              btnName="Submit"
              btnFunction={() => {
                submitOrder({
                  variables: {
                    addOrderInput: order,
                  },
                });
              }}
              btnStyle="bg-green-400 text-gray-100 text-xl  "
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddOrder;
