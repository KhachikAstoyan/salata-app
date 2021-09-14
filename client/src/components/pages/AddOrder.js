import React, { useState } from "react";
import Ingredient from "../Ingredient";
import { Button } from "../Button";

const AddOrder = () => {
  const [showContent, updateContent] = useState(0);

  return (
    <main className="container max-w-5xl mx-auto">
      <div className="order block">
        <span className="text-4xl align-middle py-3 text-green-600">
          Salad{" "}
        </span>
        <input
          type="number"
          placeholder="Quantity"
          className="py-2 px-3 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
        />

        <div className="mt-5 mb-2">
          <h2
            className="text-xl mb-2 transition-all active:text-green-500 active:"
            onClick={() => {
              updateContent(0);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 inline transition-transform duration-300 transform"
              style={{
                transform: showContent === 0 ? "rotate(90deg)" : "rotate(0deg)",
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
            Vegetables
          </h2>
          <div
            className={`transition-opacity duration-1000 ${
              showContent === 0 ? "block opacity-100" : "hidden opacity-0"
            }`}
          >
            <Ingredient ingredientName="jalapeno" />
            <Ingredient ingredientName="apple" />
            <Ingredient ingredientName="jalapeno" />
            <Ingredient ingredientName="apple" />
            <Ingredient ingredientName="jalapeno" />
            <Ingredient ingredientName="jalapeno" />
            <Ingredient ingredientName="apple" />
            <Ingredient ingredientName="jalapeno" />
          </div>
        </div>
        <div>
          <h2 className="text-xl mb-2">Extra Info</h2>
          <textarea
            class="w-full px-3 py-2 border rounded-lg focus:outline-none"
            rows="4"
          ></textarea>
        </div>
      </div>
      <div className="order block">
        <h2 className="text-4xl py-3 text-green-600">Salad</h2>
        <div className="mt-5 mb-2">
          <h2
            className="text-xl mb-2 transition-all active:text-green-500 active:"
            onClick={() => {
              updateContent(0);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 inline transition-transform duration-300 transform"
              style={{
                transform: showContent === 0 ? "rotate(90deg)" : "rotate(0deg)",
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
            Vegetables
          </h2>
          <div
            className={`transition-opacity duration-1000 ${
              showContent === 0 ? "block opacity-100" : "hidden opacity-0"
            }`}
          >
            <Ingredient ingredientName="jalapeno" />
            <Ingredient ingredientName="apple" />
            <Ingredient ingredientName="jalapeno" />
            <Ingredient ingredientName="apple" />
            <Ingredient ingredientName="jalapeno" />
            <Ingredient ingredientName="jalapeno" />
            <Ingredient ingredientName="apple" />
            <Ingredient ingredientName="jalapeno" />
          </div>
        </div>
        <div>
          <h2 className="text-xl mb-2">Extra Info</h2>
          <textarea
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            rows="4"
          ></textarea>
        </div>
      </div>
      <div className="w-full fixed bottom-0 left-0">
        <div className="order border-green-500 border-2 bg-gray-100 flex flex-col max-w-5xl py-4 mx-auto sm:flex-row">
          <div className="flex-1 text-3xl py-1 text-green-600">Order</div>
          <div className="flex flex-1 sm:justify-end">
            <Button
              btnName="+"
              btnStyle="bg-green-400 text-gray-100 text-xl  "
            />
            <Button
              btnName="Submit"
              btnStyle="bg-green-400 text-gray-100 text-xl  "
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddOrder;
