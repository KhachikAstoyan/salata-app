//@ts-check
import React, { useState } from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import ItemList from "./ItemList";
import OrderComponent from "./OrderComponent";
const query = graphql`
query List_Query{
    orders{
        id
        ...OrderComponent_order
    }
}
 
`;
function List() {
    const data = useLazyLoadQuery(query, {});
    // @ts-ignore
    const orders = data.orders.map(
        (order) => order &&
            (<OrderComponent order={order} key={order.id} />));

    return (
        <div className="main">
            <div className="header">
                <h1 className="main-item">Orders</h1>
                <div className="input-field">
                    <select className="browser-default option1">
                        <option value="1">English</option>
                        <option value="2">Spanish</option>
                    </select>
                </div>
            </div>
            <ul>{orders}</ul>
        </div>
    )
}
export default List;