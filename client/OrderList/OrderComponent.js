//@ts-check
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { graphql, useFragment } from "react-relay";
import ItemList from "../components/ItemList";


function OrderComponent(props) {
    const [showItems, setShowItems] = useState(false);

    const order = useFragment(graphql`
    fragment OrderComponent_order on OrderType{
        ...ItemList_order

    }
    `, props.order);
    const [selected, setSelected] = useState("1");
    let className = "";
    if (selected === "1") {
        className = "option1"
    } else if (selected === "2") {
        className = "option2"
    }

    else if (selected === "3") {
        className = "option3"
    }

    return (
        <div>
            <div className="ordersList">
                <div className="order">
                    <div className="icon">
                        <i onClick={() => setShowItems(!showItems)} style={{ cursor: "pointer" }} className="material-icons">{showItems ? "expand_more" : "chevron_right"}</i>
                    </div>
                    <div className="orderInfo">
                        <div className="orderID">Order #23651325 - 2 items</div>
                        <div className="orderName">For Khachik Astoyan</div>
                    </div>
                    <div className="dueDate">Due by 12:00 pm</div>
                    <div className="input-field col s12">
                        <select className={`browser-default ${className}`} onChange={(event) => {
                            setSelected(event.target.value);
                        }} defaultValue="1">
                            <option value="1" className="option1">Not started</option>
                            <option value="2" className="option2">Completed</option>
                            <option value="3" className="option3">In progress</option>
                        </select>
                    </div>
                </div>
                {showItems && <ItemList order={order} />}
            </div>

        </div>
    );

}

export default OrderComponent;