import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { nanoid } from "nanoid";

import { ADD_ORDER_MUTATION, ORDERS_QUERY } from "../../gql.js";
import { PlusButton } from "../Icons.js";
import { Button } from "../Button";
import NewSalad from "../NewOrder/NewSalad";
// import { arrayExpression } from "@babel/types";

const AddOrder = () => {
  const [orderState, setOrder] = useState({
    isTakeout: false,
    items: {},
  });
  const [selectedItem, selectItem] = useState(0);
  const [submitOrder, { data, loading, error }] = useMutation(
    ADD_ORDER_MUTATION,
    { refetchQueries: [{ query: ORDERS_QUERY }] }
  );

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
    <main className="container max-w-5xl w-11/12 mx-auto mb-40">
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

      <div className="flex items-center">
        <div className="flex-grow text-5xl py-1 text-green-600">
          <h2 className="ml-2 font-base font-DMSans text-primary">Order</h2>
        </div>
        <div
          className="btnPage p-2 sm:button-cursor bg-primary  text-white rounded-lg"
          onClick={() => {
            setOrder((prevState) => ({
              ...prevState,
              items: {
                ...prevState.items,
                [nanoid()]: { ingredients: [], quantity: 1, extraInfo: "" },
              },
            }));
          }}
        >
          <Button
            btnFunction={() => {}}
            btnStyle="bg-green-400 text-gray-100 text-3xl"
          >
            <PlusButton />
          </Button>
        </div>
      </div>
      <br></br>
      <div className="flex">
        <label className="ml-2 text-secondary font-DMSans text-base font-medium my-auto">
          Takeaway
        </label>
        <div className="flex flex-1 justify-end">
          <input
            type="checkbox"
            className="appearance-none mr-2 border-primary w-7 h-7 text-primary focus:ring-primary rounded-lg "
            onChange={(e) =>
              setOrder((prevState) => ({
                ...prevState,
                isTakeout: e.target.checked,
              }))
            }
          ></input>
        </div>
      </div>

      <div className="w-11/12 sm:w-full fixed bottom-0 left-4 sm:left-0">
        <div
          className="order btnPage bg-secondary text-white font-DMSans text-xl flex flex-col max-w-5xl py-4 mx-auto sm:flex-row"
          onClick={() => {
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
        >
          <div className="flex flex-1 justify-center">
            <Button
              btnFunction={() => {}}
              btnStyle="bg-green-400 text-gray-100 text-xl  "
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddOrder;
