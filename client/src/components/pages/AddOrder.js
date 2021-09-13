import React, { useState } from "react";
import Ingredient from "../Ingredient";

const AddOrder = () => {
  return (
    <main className="container  max-w-5xl mx-auto">
      <div className="order block">
        <h2 className="text-4xl">Salat</h2>
        <div className="mt-5 mb-2">
          <h2 className="text-xl mb-2">Vegetables</h2>
          <Ingredient />
          <Ingredient />
          <Ingredient />
          <Ingredient />
          <Ingredient />
          <Ingredient />
          <Ingredient />
          <Ingredient />
          <Ingredient />
          <Ingredient />
          <Ingredient />
          <Ingredient />
        </div>
      </div>
    </main>
  );
};

export default AddOrder;
