//@ts-check
import React from "react";
import {graphql ,useLazyLoadQuery} from "react-relay";
import ItemList from "./ItemList";
const query  = graphql`
query List_Query{
    orders{
        id
        ...ItemList_order
    }
}
 
`;
function List (){
    const data = useLazyLoadQuery(query, {});

    const orders = data.orders.map(
        (order) => order && <ItemList order={order} key={order.id} />
    );

    return (
        <div className = "main">
             <h1 className = "main-item">Orders</h1>
             <ul className="collection">{orders}</ul>
        </div>
    )
}
export default List;