import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import {
  ORDERS_QUERY,
  ORDER_ADDED_SUBSCRIPTION,
  STATUS_SUBSCRIPTION,
} from "../../gql.js";
import { ChevronLeftPagination, ChevronRightPagination } from "../Icons.js";
import { Dropdown, DropdownStatus, PaginationBtn } from "../Button";
import ItemList from "../OrderList/ItemList.js";

const PER_PAGE = 5;

const OrderList = () => {
  const [page, setPage] = useState(0);
  const { data: orderCount } = useQuery(gql`
    query {
      orderCount {
        count
      }
    }
  `);
  const { loading, error, data, refetch, subscribeToMore, fetchMore } =
    useQuery(ORDERS_QUERY, {
      variables: {
        offset: page * PER_PAGE,
        limit: PER_PAGE,
      },
    });
  const [showContentId, setContentId] = useState(0);

  useEffect(() => {
    subscribeToMore({
      document: STATUS_SUBSCRIPTION,
      variables: {},
      updateQuery: (prev, { subscriptionData }) => {
        let prevOrders = [...prev.orders];
        if (subscriptionData.data.statusChanged.status === "FINISHED") {
          fetchMore({ offset: page * PER_PAGE, limit: PER_PAGE });
        } else {
          const setOrderId = prev.orders.findIndex(
            (order) => order.id === subscriptionData.data.statusChanged.id
          );
          let setOrder = prevOrders[setOrderId];
          prevOrders[setOrderId] = {
            ...setOrder,
            status: subscriptionData.data.statusChanged.status,
          };

          return { orders: prevOrders };
        }
      },
    });
    subscribeToMore({
      document: ORDER_ADDED_SUBSCRIPTION,
      variables: {},
      updateQuery: (prev, { subscriptionData }) => {
        if (prev.orders.length < 5)
          fetchMore({ offset: page * PER_PAGE, limit: PER_PAGE });
      },
    });
  });

  useEffect(() => {
    refetch({ offset: page * PER_PAGE, limit: PER_PAGE });
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
              <div className="order relative w-full p-6 justify-between">
                <div className="flex-grow justify-self-start">
                  <h2 className="text-xl font-DMSans text-secondary">
                    Order{" "}
                    <span className="text-primary font-DMSans">
                      #{order.id.slice(-6)}
                    </span>{" "}
                    - {order.items.length}{" "}
                    {order.items.length > 1 ? "Items" : "Item"}
                  </h2>
                  <p className="text-secondary-light font-DMSans text-base font-medium">
                    Due by{" "}
                    {new Date(order.dueTime).toLocaleTimeString(
                      navigator.language,
                      { hour: "2-digit", minute: "2-digit" }
                    )}
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
                        "Not Started",
                        "In Progress",
                        "Completed",
                        "Finished",
                      ]}
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
            <div className="relative bottom-10">
              <div
                className={`${
                  showContentId === orderId && "h-16"
                } bg-primary-bgLight absolute w-full -z-10`}
              ></div>
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
        <div className="flex">
          <PaginationBtn onClick={() => paginate("prev")}>
            <ChevronRightPagination />
          </PaginationBtn>

          <p className="mx-3 mt-4">{page + 1}</p>

          <PaginationBtn onClick={() => paginate("next")}>
            <ChevronLeftPagination />
          </PaginationBtn>
        </div>
      </section>
    </main>
  );
};

export default OrderList;
