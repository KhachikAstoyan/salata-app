//@ts-check
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { graphql, useFragment } from "react-relay";
import ItemList from "./ItemList";

function OrderComponent(props) {
  const [showItems, setShowItems] = useState(false);

  const order = useFragment(
    graphql`
      fragment OrderComponent_order on OrderType {
        ...ItemList_order
        id
        client {
          name
        }
        orderNumber
        items {
          id
        }
        dueTime
        status
      }
    `,
    props.order
  );
  const [selected, setSelected] = useState(order.status);
  let className = "";
  if (selected === "NOT_STARTED") {
    className = "option1";
  } else if (selected === "IN_PROGRESS") {
    className = "option2";
  } else if (selected === "COMPLETED") {
    className = "option3";
  }

  let clientName = "";
  let orderNumber = "";
  let duetime;

  if (order.dueTime) {
    duetime = order.dueTime;
  }

  const event2 = new Date();
  event2.setTime(duetime);

  if (order.client) {
    clientName = order.client.name;
  }
  if (order.orderNumber) {
    orderNumber = order.orderNumber;
  }

  return (
    <div>
      <div className="ordersList">
        <div className="order">
          <div className="icon">
            <i
              onClick={() => setShowItems(!showItems)}
              style={{ cursor: "pointer" }}
              className="material-icons"
            >
              {showItems ? "expand_more" : "chevron_right"}
            </i>
          </div>
          <div className="orderInfo">
            <div className="orderID">
              Order #{orderNumber} - {order.items.length} items
            </div>
            <div className="orderName">For {clientName}</div>
          </div>
          <div className="dueDate">Due by {event2.toLocaleTimeString()}</div>
          <div className="input-field col s12">
            <select
              className={`browser-default ${className}`}
              onChange={event => {
                setSelected(event.target.value);
              }}
              defaultValue={selected}
            >
              <option value="NOT_STARTED" className="option1">
                Not Started
              </option>
              <option value="IN_PROGRESS" className="option2">
                In Progress
              </option>
              <option value="COMPLETED" className="option3">
                Completed
              </option>
            </select>
          </div>
        </div>
        {showItems && <ItemList order={order} />}
      </div>
    </div>
  );
}

export default OrderComponent;