import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { ordersQuery } from "../gql.js";
// import { ChevronLeft } from "./Icons.js";
import { Dropdown, DropdownStatus, PaginationBtn } from "./Button";
import ItemList from "./ItemList.js";

const PER_PAGE = 1;

const OrderList = () => {
  const [page, setPage] = useState(0);
  const { data: orderCount } = useQuery(gql`
    query {
      orderCount {
        count
      }
    }
  `);
  const { loading, error, data, refetch } = useQuery(ordersQuery, {
    variables: {
      offset: page * PER_PAGE,
      limit: PER_PAGE,
    },
  });
  const [showContentId, setContentId] = useState(0);

  useEffect(() => {
    console.log({ offset: page * PER_PAGE, limit: PER_PAGE });
    refetch({ offset: page * PER_PAGE, limit: 1 });
  }, [page]);

  const paginate = (action) => {
    switch (action) {
      case "next": {
        if (page * PER_PAGE < orderCount.orderCount.count) {
          setPage(page + 1);
        }
        break;
      }
      case "prev": {
        if (page > 0) {
          setPage(page - 1);
        }
        break;
      }
    }
  };

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
              <div className="order relative z-30 w-full p-6 justify-between">
                <div className="flex-grow justify-self-start">
                  <h2 className="text-xl font-DMSans text-secondary">
                    Order{" "}
                    <span className="text-primary font-DMSans">
                      #{order.orderNumber}
                    </span>{" "}
                    - {order.items.length} Items
                  </h2>
                  <p className="text-secondary-light font-DMSans text-base font-medium">
                    Due by {order.dueTime} pm
                  </p>
                  {order.isTakeout && (
                    <p className="text-secondary-light font-DMSans text-base font-medium">
                      Takeaway
                    </p>
                  )}
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

                        // {
                        //   name="Finished",
                        // },
                        "Not Started",
                        "In Progress",
                        "Completed",
                        "Finished",
                      ]}
                      drpStyle="Status"
                      drpOptionSize={28}
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
      <section className="flex justify-center">
        <div>
          <PaginationBtn onClick={() => paginate("prev")}>
            Previous page
          </PaginationBtn>
          <span className="mx-3">{page + 1}</span>
          <PaginationBtn onClick={() => paginate("next")}>
            Next page
          </PaginationBtn>
        </div>
      </section>
    </main>
  );
};

export default OrderList;
