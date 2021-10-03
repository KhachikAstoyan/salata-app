import React, { useState } from "react";
import { ChevronLeft } from "../Icons";

const ExtraInfo = ({ extraInfo }) => {
  const [showExtraInfo, setShowExtraInfo] = useState(false);
  return (
    <div
      className="font-light py-2 font-DMSans text-secondary-light text-lg"
      onClick={() => setShowExtraInfo(!showExtraInfo)}
    >
      <div
        className="inline-block relative float-right transition-all duration-500 transform"
        style={{
          transform: showExtraInfo ? "rotate(270deg)" : "rotate(90deg)",
        }}
      >
        <ChevronLeft />
      </div>
      Extra info
      <p
        className={`${
          showExtraInfo ? "block opacity-100" : "hidden opacity-0"
        } text-base`}
      >
        {extraInfo}
      </p>
    </div>
  );
};

export default ExtraInfo;
