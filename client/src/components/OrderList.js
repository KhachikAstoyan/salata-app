import React, { useEffect, useState } from "react";
import { Dropdown } from "./Button";
import { gql, useQuery } from "@apollo/client";

// import { ChevronLeft } from "./Icons.js";
import ItemList from "./ItemList.js";

const ordersQuery = gql`
  query getOrders {
    orders {
      id
      dueTime
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
      startTime
      status
    }
  }
`;

const OrderList = () => {
  const { loading, error, data } = useQuery(ordersQuery);
  const [showContentId, setContentId] = useState(0);

  useEffect(() => { });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <main className="container max-w-5xl mx-auto "
    >
      {data.orders.map((order, orderId) => {
        return (
          <div
            key={order.id}
            className="w-11/12"
            onClick={() => {
              setContentId(orderId);
            }}
          >
            <div>
              <div className="order relative z-40 flow-root w-full p-6 justify-between">
                <div className="justify-start">
                  <h2 className="text-xl text-mainText">
                    Order{" "}
                    <span className="text-primary text-myGreen">
                      #{order.orderNumber}
                    </span>{" "}
                    - {order.items.length} Items
                </h2>
                  <p className="text-mainText text-base font-medium">
                    Due by {order.dueTime} pm
                </p>
                </div>
                <div className="overflow-visible flex relative float-right place-self-end">
                  <div className="overflow-visible">
                    <Dropdown
                      drpName={order.status}
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
                      drpOptionSize={24}
                    />
                  </div>
                </div>
                {/* <img src="./dropdown for orders.png" alt="dropdown" className="w-6 h-6" /> */}
              </div>          
            </div>
            <div className="flex left-1/2 relative z-50"
            // onClick={() => {
            //   setContentId(null);
            // }}
            >
            </div>
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
