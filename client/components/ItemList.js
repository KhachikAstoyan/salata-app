import React, { useState } from "react";
import { graphql, useFragment } from "react-relay";


function ItemList(props) {
    const {items} = useFragment(graphql`
    fragment ItemList_order on OrderType{
        items{
            id
            name
        }
    }
    `,props.order);

    const OrderItems = items.map((item, index) => {
        return <li key={item.id} className="collection-item">
            <div>
                <i className="material-icons">
                    chevron_right
                </i>
            </div>
            <h3>item {index + 1} out of {items.length}</h3>
            {item.name}

            <div className="AudioPlayers">
                <div className="AudioPlayer">
                    <h5>Listen in English</h5>
                    <i className="material-icons">skip_previous</i>
                    <i className="material-icons">play_circle</i>
                    <i className="material-icons">skip_next</i>
                </div>
            </div>
        </li>
    })
    return <ul className="collection">{OrderItems}</ul>;
}

export default ItemList;