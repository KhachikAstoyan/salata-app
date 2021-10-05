import React from "react";
import { RoundPlusIcon, RoundMinusIcon } from "./Icons";

const Counter = (props) => {
  return (
    <div className="px-2 pt-3 sm:inline sm:p-0">
      <span className="text-secondary-light font-light font-DMSans text-sm ml-2">
        Quantity{" "}
      </span>

      <RoundMinusIcon
        func={() => {
          if (props.quantity > 1) props.setQuantity(props.quantity - 1);
        }}
      />

      <span className="px-2">{props.quantity}</span>

      <RoundPlusIcon
        func={() => {
          props.setQuantity(props.quantity + 1);
        }}
      />
    </div>
  );
};

export default Counter;
