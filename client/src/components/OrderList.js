import React, { useState } from "react";
import { Dropdown } from "./Button";
import { ChevronLeft } from "./Icons.js";

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
          <div>
            <div
              className="inline-block transition-all duration-300 transform"
              style={{
                transform: showContent ? "rotate(90deg)" : "rotate(0deg)",
              }}
            >
              <ChevronLeft />
            </div>
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
            <Dropdown
              drpName="Status"
              options={["Not Started", "In Progress", "Complated", "Finished"]}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderList;
