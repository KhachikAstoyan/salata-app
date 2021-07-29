//@ts-check
import React from "react";
import { graphql, useFragment } from "react-relay";

function IngredientList(props) {
    const data = useFragment(graphql`
    fragment IngredientList_items on ItemType{
        ingredients{
            id
            name
        }
    }
    `,props.items);
    console.log(data);
    if(!data) {
        return null;
    }
    const IngredientList = data.ingredients.map(
        (ingredient) =>  ingredient && <li key= {ingredient.id}>{ingredient.name}</li>
    );
    return (
    <div>
    <ul className="collection">{IngredientList}</ul>
    </div>
    )
}

export default IngredientList;