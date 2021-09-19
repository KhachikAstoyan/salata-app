import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "./Icons";

function Button(props) {
  return (
    <div
      className={`btn ${props.btnStyle}`}
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
    <Link to={props.btnLink} className={`btn ${props.btnStyle}`}>
      {props.btnName}
    </Link>
  );
}

function Dropdown(props) {
  const [showDropdown, updateDropdown] = useState(false);
  // const [selectedOption, UpdateOption] = useState();

  const drpOptions = props.options.map((option, index) => {
    return (
      <li
        key={index}
        className="px-1 text-gray-400 transition-colors duration-300 rounded-lg hover:bg-gray-50 hover:text-gray-600"
      >
        {option}
      </li>
    );
  });

  return (
    <div className="btn" onClick={() => updateDropdown(!showDropdown)}>
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
          className="overflow-hidden text-right duration-300 transition-height"
          style={{
            height: showDropdown ? `${props.options.length * 24}px` : "0px",
          }}
        >
          {drpOptions}
        </ul>
      </div>
    </div>
  );
}

export { Button, LinkButton, Dropdown };
