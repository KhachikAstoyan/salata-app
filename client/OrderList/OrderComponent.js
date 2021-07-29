
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
    const [showItemList, toggleItemList] = useState(false);
    const [selected, setSelected] = useState("1");
    let className = "";
    if (selected === "1") {
        className = "option1";
    } else if (selected === "2") {
        className = "option2"
    }

    else if (selected === "3") {
        className = "option3"
    }


    let clientName = "";
    let orderNumber = "";
    let status = "";
    let status2 = "";
    let status3 = "";
    let duetime;

    if(order.dueTime){
        duetime = order.dueTime;
    }

    const time = duetime;
    const event2 = new Date(); 
    event2.setTime(time);

    console.log(event2.toLocaleTimeString());


    if(order.client) {
        clientName = order.client.name;
    }
    if(order.orderNumber){
        orderNumber = order.orderNumber;
    }
    if(order.status == "NOT_STARTED"){
        status = "Not Started";
        status2 = "Completed";
        status3 = "In progress";
    }
    if(order.status == "IN_PROGRESS"){
        status = "In Progress";
        status2 = "Not Started";
        status3 = "Completed";
    }
    if(order.status == "COMPLETED"){
        status = "Completed";
        status2 = "Not Started";
        status3 = "In progress";
    }


    return (
            <div className="orderlist-itemlist">
        <div className="ordersList">
                <div className="icon">
                    <i className="material-icons" onClick={() =>{
                        toggleItemList(!showItemList);
                    }}>
                        {!showItemList ? 'chevron_right' : 'expand_more'}
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
                    }} defaultValue="1">
                        <option value="1" className="option1">{status}</option>
                        <option value="2" className="option2">{status2}</option>
                        <option value="3" className="option3">{status3}</option>
                    </select>
                </div>
                
            </div>
               {showItemList && <ItemList order={order} />}
        </div>
    );

}

export default OrderComponent;