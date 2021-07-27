import React from "react";
import {graphql} from "react-relay";

const query = graphql;

function List (){
    return (
        <div className = "main">
            <h1 className = "main-item">Orders</h1>
        </div>
    )
}
export default List;