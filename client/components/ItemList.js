//@ts-check
import React, { useState } from "react";
import { graphql, useFragment } from "react-relay";
import Item from "./Item";

function ItemList(props) {
    const { items } = useFragment(graphql`
    fragment ItemList_order on OrderType{
        items{
            id
            ...Item_item
        }
    }
    `, props.order);

    const OrderItems = items.map(
        (item, index) => item && <Item item={item} key={item.id} index={index} length={items.length} />
    );
    return <ul className="orders">{OrderItems}</ul>;
}

export default ItemList;