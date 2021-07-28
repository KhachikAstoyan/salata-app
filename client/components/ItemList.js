import React, { useState } from "react";
import { graphql, useFragment } from "react-relay";

function ItemList(props) {
    const {items} = useFragment(graphql`
    fragment ItemList_order on OrderType{
        items{
            id
            name
            quantity
        }
    }
    `,props.order);

    const OrderItems = items.map((item,index) => {
        
            return <div className="container">
                <li key={item.id} className="item">
                    <div className="RightPart">
                        <div className="ArrowIcon">
                            <i className="material-icons">
                                chevron_right
                            </i>
                        </div>
                        <div className="itemsNames">
                            <h4 className="item_place">item {index + 1} out of {items.length}-</h4>
                            <h4 className="item_name">{item.quantity} {item.name}</h4>
                        </div>
                        <div className = "ingredients">
                            <h4>INGREDIENTS</h4>
                        </div>
                    </div>

                    <div className="AudioPlayers">
                        <div className="AudioPlayer">
                            <div className="playerButtons">
                                <i className="material-icons">play_circle</i>
                                <i className="material-icons">replay</i>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
    })
    return <ul className="collection">{OrderItems}</ul>;
}

export default ItemList;