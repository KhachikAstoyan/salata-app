import React, { useState } from "react";
import { Dropdown } from "./Button";
import { ChevronLeft } from "./Icons.js";

const OrderList = () => {
  const [showContent, updateContent] = useState(false);
  return (
    <main className="container max-w-5xl mx-auto ">
      <div
        className="order w-11/12"
        onClick={() => {
          updateContent(!showContent);
         
        }}
      >
        <div className="flex-1 flex w-full justify-start ">
          
          <div>
            <h2 className="text-xl text-mainText">
              Order <span className="text-primary text-myGreen">#6542566</span> - 2 Items
            </h2>
            <p className="text-mainText text-base font-medium">For Milena Tovmasyan</p>
            <p className="text-sm text-DueBy font-medium">Due by 12:00 pm</p>
          </div>
          <div className="overflow-visible flex flex-1 justify-end h-11 absolute bottom-0 right-0 mr-6 mb-6">
                <div className="overflow-visible flex flex-1 justify-end">
                    <Dropdown
                        drpName="Status"
                        options={["Not Started", "In Progress", "Completed", "Finished"]}
                        drpStyle="Status"
                        drpOptionSize={20}
                    />
                </div>
          </div>
        </div>
         <div>
            <div
              className="inline-block transition-all duration-300 transform"
            >
                <img src="./dropdown for orders.png" className="w-4 h-4"></img>
            </div>
          </div>
      </div>
    </main>
  );
};

export default OrderList;
