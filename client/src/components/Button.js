import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "./Icons";
import { useMutation, useQuery } from "@apollo/client";

import { updateOrderStatusMutation, ordersQuery } from "../gql.js";

function Button(props) {
  return (
    <div
      className={`btn${props.btnStyle}`}
      onClick={() => {
        props.btnFunction();
      }}
    >
      {props.children}
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

const PaginationBtn = (props) => {
  return (
    <button
      {...props}
      className="p-2 rounded-lg text-black transition-colors font-DMSans hover:bg-gray-200 m-2"
    >
      {props.children}
    </button>
  );
};

function DropdownStatus(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 640;
  const [showDropdown, setShowDropdown] = useState(false);

  const { loading, error, data, refetch } = useQuery(ordersQuery, {
    variables: {
      offset: 1 * 5,
      limit: 5,
    },
  });
  const [setStatus, {}] = useMutation(updateOrderStatusMutation, {
    onCompleted: refetch,
  });

  const setTitle = (status, returnValue) => {
    switch (returnValue) {
      case "title":
        switch (status) {
          case "NOT_STARTED":
            return <span>Not Started</span>;
          case "IN_PROGRESS":
            return <span>In Progress</span>;
          case "COMPLETED":
            return <span>Completed</span>;
          case "FINISHED":
            return <span>Finished</span>;
          default:
            return <span>Status</span>;
        }
      case "color":
        switch (status) {
          case "NOT_STARTED":
            return "gray";
          case "IN_PROGRESS":
            return "yellow";
          case "COMPLETED":
            return "green";
          case "FINISHED":
            return "red";
          default:
            return "gray";
        }
      default:
        return null;
    }
  };

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className={`${width < breakpoint ? "relative h-14" : ""}`}>
      <div
        className={`btnStatus absolute ${
          width < 640 ? "top-2 right-0" : "right-6 top-6"
        } text-${setTitle(
          props.drpStatus,
          "color"
        )}-500 bg-white border-2 rounded-lg border-${setTitle(
          props.drpStatus,
          "color"
        )}-300 text-right`}
        onClick={(e) => {
          setShowDropdown(!showDropdown);
          e.stopPropagation();
        }}
      >
        {(() => {
          switch (props.drpStatus) {
            case "NOT_STARTED":
              return <span>Not Started</span>;
            case "IN_PROGRESS":
              return <span>In Progress</span>;
            case "COMPLETED":
              return <span>Completed</span>;
            case "FINISHED":
              return <span>Finished</span>;
            default:
              return <span>Status</span>;
          }
        })()}
        <div
          className="inline-block transition-all duration-500 transform"
          style={{
            transform: showDropdown ? "rotate(90deg)" : "rotate(-90deg)",
          }}
        >
          <ChevronRight />
        </div>
        <div className="">
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
              className="text-left px-1 py-1 text-gray-500 transition-colors duration-300 rounded-lg hover:bg-gray-50 hover:text-gray-600"
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
              className="text-left px-1 py-1 text-yellow-500 transition-colors duration-300 rounded-lg hover:bg-gray-50 hover:text-yellow-600"
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
              className="text-left px-1 py-1 text-green-500 transition-colors duration-300 rounded-lg hover:bg-gray-50 hover:text-green-600"
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
                  onCompleted: refetch,
                });
              }}
              key={props.orderId + 4}
              className="text-left px-1 py-1 text-red-500 transition-colors duration-300 rounded-lg hover:bg-gray-50 hover:text-red-600"
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

export { Button, LinkButton, PaginationBtn, Dropdown, DropdownStatus };
