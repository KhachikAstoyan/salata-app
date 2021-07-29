
// @ts-check
import React, { useState } from "react";
// @ts-ignore
import { graphql, useFragment } from "react-relay";
import ItemList from "../components/ItemList";


function OrderComponent(props) {
    const [showItem, toogleItem] = useState(false);
    const order = useFragment(graphql`
    fragment OrderComponent_order on OrderType{
        ...ItemList_order
        id
        client {
            name
        }
        orderNumber
        items{
            id
        }
        dueTime
        status
    }
    `,props.order);
    const [selected, setSelected] = useState(order.status);
    let className = "";
    if (selected === "NOT_STARTED") {
        className = "option1";
    } else if (selected === "IN_PROGRESS") {
        className = "option2"
    } else if (selected === "COMPLETED") {
        className = "option3"
    }


    let clientName = "";
    let orderNumber = "";
    let duetime;

    if(order.dueTime){
        duetime = order.dueTime;
    }

    const event2 = new Date(); 
    event2.setTime(duetime);


    if(order.client) {
        clientName = order.client.name;
    }
    if(order.orderNumber){
        orderNumber = order.orderNumber;
    }


    return (
            <div className="orderlist-itemlist">
        <div className="ordersList">
                <div className="icon">
                    <i className="material-icons" onClick={() =>{
                        toogleItem(!showItem);
                    }}>
                        {!showItem ? 'chevron_right' : 'expand_more'}
                    </i>
                </div>
                <div className="orderInfo">
                    <div className="orderID">Order #{orderNumber} - {order.items.length} items</div>
                    <div className="orderName">For {clientName}</div>
                </div>
                <div className="dueDate">Due by {event2.toLocaleTimeString()}</div>
                <div className="input-field col s12">
                    <select className={`browser-default ${className}`} onChange={(event) => {
                        setSelected(event.target.value);
                    }} defaultValue={selected}>
                        <option value="NOT_STARTED" className="option1">Not Started</option>
                        <option value="IN_PROGRESS" className="option2">In Progress</option>
                        <option value="COMPLETED" className="option3">Completed</option>
                    </select>
                </div>
                
            </div>
               {showItem && <ItemList order={order} />}
        </div>
    );

}

export default OrderComponent;