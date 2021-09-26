import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

import { ordersQuery } from "../gql.js";

// import { ChevronLeft } from "./Icons.js";
import { Dropdown, DropdownStatus } from "./Button";
import ItemList from "./ItemList.js";

const OrderList = () => {
  const { loading, error, data } = useQuery(ordersQuery);
  const [showContentId, setContentId] = useState(0);

  useEffect(() => {});

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <main className="container max-w-5xl mx-auto">
      {data.orders.map((order, orderId) => {
        return (
          <div
            key={order.id}
            className="w-11/12 mx-auto"
            onClick={() => {
              setContentId(orderId);
            }}
          >
            <div>
              <div className="order relative z-40 w-full p-6 justify-between">
                <div className="flex-grow justify-self-start">
                  <h2 className="text-xl text-mainText">
                    Order{" "}
                    <span className="text-myGreen">#{order.orderNumber}</span> -{" "}
                    {order.items.length} Items
                  </h2>
                  <p className="text-mainText text-base font-medium">
                    Due by {order.dueTime} pm
                  </p>
                </div>
                <div className="flex-none">
                  <div className="overflow-visible">
                    <DropdownStatus
                      drpStatus={order.status}
                      orderId={order.id}
                      options={[
                        //need to add mutation
                        // {
                        //   name: "Not Started",

                        // },

                        // {
                        //   name: "In Progress",
                        // },

                        // {
                        //   name: "Completed",
                        // },

                        // {
                        //   name="Finished",
                        // },
                        "Not Started",
                        "In Progress",
                        "Completed",
                        "Finished",
                      ]}
                      drpStyle="Status"
                      drpOptionSize={20}
                    />
                  </div>
                </div>
                {/* <img src="./dropdown for orders.png" alt="dropdown" className="w-6 h-6" /> */}
              </div>
            </div>
            <div
              className="flex left-1/2 relative z-50"
              // onClick={() => {
              //   setContentId(null);
              // }}
            ></div>
            <div className="relative bottom-10 z-20">
              {showContentId === orderId && (
                <ItemList
                  items={[...data.orders[orderId].items]}
                  orderId={order.id}
                />
              )}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default OrderList;
