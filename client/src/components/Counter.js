import React from "react";

const Counter = (props) => {
  return (
    <div className="inline">
      <span>Quantity: </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 inline text-green-500 active:text-green-600"
        viewBox="0 0 20 20"
        fill="currentColor"
      
        onClick={() => { if (props.quantity > 1) {
          props.setQuantity(props.quantity - 1)
        }}}
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
          clipRule="evenodd"
        />
      </svg>
      <span className="px-4">{props.quantity}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 inline text-green-500 active:text-green-600"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={() => props.setQuantity(props.quantity + 1)}
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Counter;
