import React from "react";
import {graphql ,useFragemnt} from "react-relay";

const query  = graphql`
query OrderType
 orders{
     id
 }
`;
function List (){
    return (
        <div className = "main">
            <h1 className = "main-item">Orders</h1>
        </div>
    )
}
export default List;