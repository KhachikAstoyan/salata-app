import React, { useState } from "react";
import { Dropdown } from "./Button";
import { ChevronLeft } from "./Icons.js";
import ItemList from "./ItemList.js";

const OrderList = () => {
  const [showContent, updateContent] = useState(false);
  return (
    <main className="container max-w-5xl mx-auto ">
      <div  className="order w-11/12">
        <div className="flex flex-1 w-full p-6 justify-between">
         
          <div className="justify-start">
            <h2 className="text-xl text-mainText">
              Order <span className="text-primary text-myGreen">#6542566</span> - 2 Items
            </h2>
            <p className="text-mainText text-base font-medium">For Milena Tovmasyan</p>
            <p className="text-sm text-DueBy font-medium">Due by 12:00 pm</p>
          </div>
          <div className="overflow-visible flex relative float-right place-self-end">
                <div className="overflow-visible">
                    <Dropdown
                        drpName="Status"
                        options={["Not Started", "In Progress", "Completed", "Finished"]}
                        drpStyle="Status"
                        drpOptionSize={20}
                    />
                </div>
          </div>
        </div>
        <div className="flex relative bottom-0 left-1/2"  onClick={() => {
          updateContent(!showContent);
         
        }}>
            <img src="./dropdown for orders.png" className="w-6 h-6 "></img>
        </div>
        {showContent && <ItemList Items={["Regular Salad","Regular Salad"]} />}
      </div>
    </main>
  );
};

export default OrderList;