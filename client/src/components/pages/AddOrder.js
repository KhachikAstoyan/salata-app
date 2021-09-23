import React, { useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { nanoid } from "nanoid";

import { Button } from "../Button";
import NewSalad from "../NewSalad";
// import { arrayExpression } from "@babel/types";

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
  const [orderState, setOrder] = useState({
    isTakeout: false,
    items: {},
  });
  const [selectedItem, selectItem] = useState(0);
  const [submitOrder, { data, loading, error }] = useMutation(addOrderMutation);

  useEffect(() => {
    let uid = nanoid();
    setOrder((prevState) => ({
      ...prevState,
      items: {
        ...prevState.items,
        [uid]: {
          ingredients: [],
          quantity: 1,
          extraInfo: "",
        },
      },
    }));
    selectItem(uid);
  }, []);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  if (data);

  const updateQuantity = (uid, x) => {
    setOrder((prevState) => ({
      ...prevState,
      items: {
        ...prevState.items,
        [uid]: { ...prevState.items[uid], quantity: x },
      },
    }));
  };

  const removeItem = (uid) => {
    setOrder((prevState) => {
      let newItems = { ...prevState.items };
      delete newItems[uid];
      return { ...prevState, items: newItems };
    });
  };

  const addIngredient = (uid, ingredientId) => {
    setOrder((prevState) => ({
      ...prevState,
      items: {
        ...prevState.items,
        [uid]: {
          ...prevState.items[uid],
          ingredients: [...prevState.items[uid].ingredients, ingredientId],
        },
      },
    }));
  };

  const removeIngrediet = (uid, ingredientId) => {
    setOrder((prevState) => {
      const index = prevState.items[uid].ingredients.indexOf(ingredientId);
      let ingredients = [...prevState.items[uid].ingredients];
      if (index >= 0) ingredients.splice(index, 1);
      return {
        ...prevState,
        items: {
          ...prevState.items,
          [uid]: { ...prevState.items[uid], ingredients },
        },
      };
    });
  };

  const setExtraInfo = (uid, info) => {
    setOrder((prevState) => ({
      ...prevState,
      items: {
        ...prevState.items,
        [uid]: { ...prevState.items[uid], extraInfo: info },
      },
    }));
  };

  return (
    <main className="container max-w-5xl mx-auto mb-40 ">
      {Object.keys(orderState.items).map((uid) => {
        return (
          <NewSalad
            key={uid}
            uid={uid}
            item={orderState.items[uid]}
            updateQuantity={(x) => updateQuantity(uid, x)}
            addIngredient={(ingredientId) => addIngredient(uid, ingredientId)}
            removeItem={() => removeItem(uid)}
            removeIngredient={(ingredientId) =>
              removeIngrediet(uid, ingredientId)
            }
            setExtraInfo={(value) => setExtraInfo(uid, value)}
            showContent={selectedItem === uid ? true : false}
            selectItem={() => {
              selectItem(uid);
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
              onChange={(e) =>
                setOrder((prevState) => ({
                  ...prevState,
                  isTakeout: e.target.checked,
                }))
              }
            ></input>
          </div>
          <div className="flex flex-1 sm:justify-end">
            <Button
              btnName="+"
              btnFunction={() => {
                setOrder((prevState) => ({
                  ...prevState,
                  items: {
                    ...prevState.items,
                    [nanoid()]: { ingredients: [], quantity: 1, extraInfo: "" },
                  },
                }));
              }}
              btnStyle="bg-green-400 text-gray-100 text-xl  "
            />
            <Button
              btnName="Submit"
              btnFunction={() => {
                submitOrder({
                  variables: {
                    addOrderInput: {
                      isTakeout: orderState.isTakeout,
                      items: Object.values(orderState.items),
                    },
                  },
                });
                setOrder({
                  isTakeout: false,
                  items: {
                    [nanoid()]: { ingredients: [], quantity: 1, extraInfo: "" },
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
