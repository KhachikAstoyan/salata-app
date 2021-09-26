import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "./Icons";
import { useMutation } from "@apollo/client";

import { updateOrderStatusMutation, ordersQuery } from "../gql.js";

function Button(props) {
  return (
    <div
      className={`btn${props.btnStyle}`}
      onClick={() => {
        props.btnFunction();
      }}
    >
      {props.btnName}
    </div>
  );
}

function LinkButton(props) {
  return (
    <Link to={props.btnLink} className={`btn${props.btnStyle}`}>
      {props.btnName}
    </Link>
  );
}

function DropdownStatus(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  const [setStatus, { data, loading, error }] = useMutation(
    updateOrderStatusMutation,
    {
      refetchQueries: [{ query: ordersQuery }],
    }
  );

  return (
    <div
      className={`btn${props.drpStyle}`}
      onClick={() => setShowDropdown(!showDropdown)}
    >
      <div className="dropdown-heading">
        {(() => {
          switch (props.drpStatus) {
            case "NOT_STARTED":
              return <span className="bg-red-500">Not Started</span>;
            case "IN_PROGRESS":
              return <span className="bg-yellow-500">In Progress</span>;
            case "COMPLETED":
              return <span className="bg-green-500">Completed</span>;
            case "FINISHED":
              return <span className="bg-blue-500">Finished</span>;
            default:
              return <span>Status</span>;
          }
        })()}
        <div
          className="inline-block transition-all duration-300 transform"
          style={{
            transform: showDropdown ? "rotate(-90deg)" : "rotate(0deg)",
          }}
        >
          <ChevronRight />
        </div>
        <div className="heading-list">
          <ul
            className={`overflow-hidden text-right px-4 ${
              showDropdown && "py-1"
            } w-full duration-300 transition-height`}
            style={{
              height: showDropdown
                ? `${props.options.length * props.drpOptionSize + 8}px`
                : "0px",
            }}
          >
            <li
              onClick={() => {
                console.log(props.orderId);
                setStatus({
                  variables: {
                    updateOrderStatusId: props.orderId,
                    updateOrderStatusStatus: "NOT_STARTED",
                  },
                });
              }}
              key={props.orderId + 1}
              className="text-left px-1 text-red transition-colors duration-300 rounded-lg hover:bg-gray-50 hover:text-gray-600"
            >
              Not Started
            </li>
            <li
              onClick={() => {
                console.log(props.orderId);
                setStatus({
                  variables: {
                    updateOrderStatusId: props.orderId,
                    updateOrderStatusStatus: "IN_PROGRESS",
                  },
                });
              }}
              key={props.orderId + 2}
              className="text-left px-1 text-yellow transition-colors duration-300 rounded-lg hover:bg-gray-50 hover:text-gray-600"
            >
              In Progress
            </li>
            <li
              onClick={() => {
                console.log(props.orderId);
                setStatus({
                  variables: {
                    updateOrderStatusId: props.orderId,
                    updateOrderStatusStatus: "COMPLETED",
                  },
                });
              }}
              key={props.orderId + 3}
              className="text-left px-1 text-myGreen transition-colors duration-300 rounded-lg hover:bg-gray-50 hover:text-gray-600"
            >
              Completed
            </li>
            <li
              onClick={() => {
                console.log(props.orderId);
                setStatus({
                  variables: {
                    updateOrderStatusId: props.orderId,
                    updateOrderStatusStatus: "FINISHED",
                  },
                });
              }}
              key={props.orderId + 4}
              className="text-left px-1 text-primary transition-colors duration-300 rounded-lg hover:bg-gray-50 hover:text-gray-600"
            >
              Finished
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Dropdown(props) {
  const [showDropdown, updateDropdown] = useState(false);
  // const [selectedOption, UpdateOption] = useState();

  const drpOptions = props.options.map((option, index) => {
    if (option === "Not Started") {
      return (
        <li
          key={index}
          className="text-left px-1 text-red transition-colors duration-300 rounded-lg hover:bg-gray-50 hover:text-gray-600"
        >
          {option}
        </li>
      );
    } else if (option === "In Progress") {
      return (
        <li
          key={index}
          className="text-left px-1 text-yellow transition-colors duration-300 rounded-lg hover:bg-gray-50 hover:text-gray-600"
        >
          {option}
        </li>
      );
    } else if (option === "Completed") {
      return (
        <li
          key={index}
          className="text-left px-1 text-lightGreen transition-colors duration-300 rounded-lg hover:bg-gray-50 hover:text-gray-600"
        >
          {option}
        </li>
      );
    } else if (option === "Finished") {
      return (
        <li
          key={index}
          className="text-left px-1 text-myGreen transition-colors duration-300 rounded-lg hover:bg-gray-50 hover:text-gray-600"
        >
          {option}
        </li>
      );
    } else {
      return (
        <li
          key={index}
          className="text-left px-1 mr-4 text-gray-400 transition-colors duration-300 rounded-lg hover:bg-gray-50 hover:text-gray-600"
        >
          {option}
        </li>
      );
    }
  });

  return (
    <div
      className={`btn${props.drpStyle}`}
      onClick={() => updateDropdown(!showDropdown)}
    >
      <div className="dropdown-heading">
        <span>{props.drpName}</span>
        <div
          className="inline-block transition-all duration-300 transform"
          style={{
            transform: showDropdown ? "rotate(-90deg)" : "rotate(0deg)",
          }}
        >
          <ChevronRight />
        </div>
      </div>
      <div className="heading-list">
        <ul
          className={`overflow-hidden text-right px-4 ${
            showDropdown && "py-1"
          } w-full duration-300 transition-height`}
          style={{
            height: showDropdown
              ? `${props.options.length * props.drpOptionSize + 8}px`
              : "0px",
          }}
        >
          {drpOptions}
        </ul>
      </div>
    </div>
  );
}

export { Button, LinkButton, Dropdown, DropdownStatus };
