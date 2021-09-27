import React from "react";

const Counter = (props) => {
  return (
    <div className="px-2 pt-3 sm:inline sm:p-0">
      <span className="text-secondary-light font-light font-DMSans text-sm ml-2">Quantity </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 inline"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#018660"
        onClick={() => {
          if (props.quantity > 1) {
            props.setQuantity(props.quantity - 1);
          }
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <span className="px-2">{props.quantity}</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 inline"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#018660"
        onClick={() => props.setQuantity(props.quantity + 1)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};

export default Counter;
