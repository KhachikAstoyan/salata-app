import React, { useState } from "react";
import jalapeno from "../icons/jalapeno.png";

function Ingredient() {
  const [selected, setSelected] = useState(false);
  return (
    <div
      onClick={() => setSelected(!selected)}
      className={`inline-flex flex-wrap text-center flex-col rounded-xl border-2 mb-2 px-3 py-2 bg-gray-100 mr-2 ${
        selected && "border-green-400 bg-green-100"
      }`}
    >
      <img src={jalapeno} className="w-10" alt="jalapeno" /> <p>Hello</p>
    </div>
  );
}

export default Ingredient;
