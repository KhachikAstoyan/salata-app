//@ts-check
import React, { useState } from "react";
import { graphql, useFragment } from "react-relay";
import IngredientList from "./IngredientList";

function Item(props) {
    const [showItem, toogleItem] = useState(false);
    const item = useFragment(graphql`
    fragment Item_item on ItemType{
        
            id
            name
            quantity
            audio(language: $language, delay: $delay){
                data
            }
            ...IngredientList_items     
        
    },
    `, props.item);

    return (
        <li key={item.id} className="item">
            <div className="topDiv">
                <div className="RightPart">
                    <div className="ArrowIcon">
                        <i className="material-icons" style={{ cursor: "pointer" }} onClick={() => {
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
                {item.audio && (
                    <div className="AudioPlayers">
                        <div className="AudioPlayer">
                            <div className="playerButtons">
                                <audio controls src={item.audio.data} />
                            </div>
                        </div>
                    </div>)}
            </div>
            <div >
                {showItem && <div className="ingredientItem"><IngredientList items={item} /></div>}
            </div>
        </li>
    )
}

export default Item;