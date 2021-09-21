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
  const [orderState, updateOrder] = useState({
    isTakeout: false,
    items: [
      {
        ingredients: [],
        quantity: 1,
        extraInfo: "",
      },
    ],
  });
  const [selectedItem, selectItem] = useState(0);
  const [count, updateCount] = useState(["item"]);
  const [submitOrder, { data, loading, error }] = useMutation(addOrderMutation);
  return (
    <main className="container max-w-5xl mx-auto mb-40 ">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-lg"
        onClick={() => {
          console.log(orderState.items);
        }}
      >
        log
      </button>
      {orderState.items.map((item, id) => {
        return (
          <NewSalad
            key={id}
            item={item}
            updateQuantity={(x) => {
              let items = orderState.items;
              items[id].quantity = x;
              updateOrder({ isTakeout: orderState.isTakeout, items });
            }}
            addIngredient={(ingredientId) => {
              let items = orderState.items;
              items[id].ingredients.push(ingredientId);
              updateOrder({ isTakeout: orderState.isTakeout, items });
            }}
            removeItem={() => {
              let items = orderState.items;
              items.splice(id, 1);
              console.log(items);
              updateOrder({ isTakeout: orderState.isTakeout, items });
            }}
            removeIngredient={(ingredientId) => {
              const index =
                orderState.items[id].ingredients.indexOf(ingredientId);
              let items = orderState.items;
              if (index > -1) items[id].ingredients.splice(index, 1);
              updateOrder({ isTakeout: orderState.isTakeout, items });
            }}
            setExtraInfo={(value) => {
              let items = orderState.items;
              items[id].extraInfo = value;
              updateOrder({ isTakeout: orderState.isTakeout, items });
            }}
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
                let items = orderState.items;
                items.push({
                  ingredients: [],
                  quantity: 1,
                  extraInfo: "",
                });
                updateOrder({ isTakeout: orderState.isTakeout, items });
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
                updateOrder({
                  isTakeout: false,
                  items: [{ ingredients: [], quantity: 1, extraInfo: "" }],
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
