//@ts-check
import React, { useState } from "react";
import { graphql, useFragment } from "react-relay";
import ItemList from "./ItemList";
function Item(props) {
    const [showItem, toogleItem] = useState(false);
    const item = useFragment(graphql`
    fragment Item_item on ItemType{
        
            id
            name
            quantity
        
    }
    `, props.item);

    return <div className="container">
        <li key={item.id} className="item">
            <div className="RightPart">
                <div className="ArrowIcon">
                    <i className="material-icons" onClick={() => {
                        toogleItem(!showItem);
                    }}>
                        {!showItem ? 'chevron_right' : 'expand_more'}
                    </i>
                </div>
                <div className="itemsNames">
                    <h4 className="item_place">item {props.index + 1} out of {props.length}-</h4>
                    <h4 className="item_name">{item.quantity} {item.name}</h4>
                </div>
                <div className="ingredients">
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
        {showItem && <div>More Info</div>}
    </div>
}

export default Item;