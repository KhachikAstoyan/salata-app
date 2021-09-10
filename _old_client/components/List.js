//@ts-check
import React, { useState } from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import ItemList from "./ItemList";
import OrderComponent from "./OrderComponent";
const query = graphql`
query List_Query($language: String, $delay: Int){
    orders{
        id
        ...OrderComponent_order
    }
}

`;
function List(props) {
    const data = useLazyLoadQuery(query, {
        language: props.language,
        delay: props.delay
    });
    // @ts-ignore
    const orders = data.orders.map(
        (order) => order &&
            (<OrderComponent order={order} key={order.id} />));

    return (
        <div>
            <ul>{orders}</ul>
        </div>
    )
}
export default List;