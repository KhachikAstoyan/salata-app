import React, { useState } from "react";
import { Dropdown } from "./Button";

const OrderList = () => {
  const [showContent, updateContent] = useState(false);
  return (
    <main className="container max-w-5xl mx-auto ">
      <div
        className="order"
        onClick={() => {
          updateContent(!showContent);
        }}
      >
        <div className="flex-1 flex ">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 inline transition-all duration-300 transform"
              style={{
                transform: showContent ? "rotate(90deg)" : "rotate(0deg)",
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
          </div>
          <div>
            <h2 className="text-xl">
              Order <span className="text-primary">#6542566</span> - 2 Items
            </h2>
            <p>for Milena Tovmasyan</p>
          </div>
        </div>
        <div className="flex flex-1 justify-end overflow-visible">
          <div className="overflow-visible">
            <div className="inline-block">Due by 12:00pm</div>
            <Dropdown />
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderList;
