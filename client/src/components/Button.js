import React, { useState } from "react";

function Button(props) {
  return <div className={`btn ${props.btnStyle}`}>{props.btnName}</div>;
}

function Dropdown(props) {
  const [showDropdown, updateDropdown] = useState(false);
  const [selectedOption, UpdateOption] = useState();

  return (
    <div className="btn" onClick={() => updateDropdown(!showDropdown)}>
      <div className="dropdown-heading">
        <span>Language</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline w-5 h-5 transition-all duration-300 transform"
          style={{
            transform: showDropdown ? "rotate(-90deg)" : "rotate(0deg)",
          }}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="heading-list">
        <ul
          className="overflow-hidden text-right duration-300 transition-height"
          style={{ height: showDropdown ? "48px" : "0px" }}
        >
          <li className="px-1 transition-colors duration-300 rounded-lg hover:bg-gray-50">
            English
          </li>
          <li className="px-1 text-gray-400 transition-colors duration-300 rounded-lg hover:bg-gray-50 hover:text-gray-600">
            Spanish
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Button, Dropdown };
