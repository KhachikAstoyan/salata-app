import React from "react";
import { graphql, useLazyLoadQuery } from "react-relay";

const query = graphql`
    query ListQuery {
        orders{
            id
            dueTime
        }
    }
    
`;
function List() {
    const { data } = useLazyLoadQuery(query);
    return (
        <div className="main">
            <h1 className="main-item">Orders</h1>
        </div>
    )
}
export default List;