import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "./Icons";

function Button(props) {
  return (
    <Link to={props.btnLink} className={`btn${props.btnStyle}`}>
      {props.btnName}
    </Link>
  );
}
function Dropdown(props) {
  const [showDropdown, updateDropdown] = useState(false);
  const [selectedOption, UpdateOption] = useState();

  const drpOptions = props.options.map((option, index) => {
    if(option == "Not Started"){
        return (
            <li
                key={index}
                className="text-left px-1 text-red transition-colors duration-300 rounded-lg hover:bg-gray-50 hover:text-gray-600"
            >
            {option}
            </li>
        );
    } else if(option == "In Progress"){
        return (
            <li
                key={index}
                className="text-left px-1 text-yellow transition-colors duration-300 rounded-lg hover:bg-gray-50 hover:text-gray-600"
            >
            {option}
            </li>
        );
    }else if(option == "Completed"){
        return (
            <li
                key={index}
                className="text-left px-1 text-lightGreen transition-colors duration-300 rounded-lg hover:bg-gray-50 hover:text-gray-600"
            >
            {option}
            </li>
        );
    }else if(option == "Finished"){
        return (
            <li
                key={index}
                className="text-left px-1 text-myGreen transition-colors duration-300 rounded-lg hover:bg-gray-50 hover:text-gray-600"
            >
            {option}
            </li>
        );
    }else{
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
    <div className={`btn${props.drpStyle}`} onClick={() => updateDropdown(!showDropdown)}>
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
            height: showDropdown ? `${props.options.length * 27}px` : "0px",
          }}
        >
          {drpOptions}
        </ul>
      </div>
    </div>
  );
}

export { Button, Dropdown };
