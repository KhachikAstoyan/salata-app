import React, { useState } from "react";
import { Button } from "../Button";
import NewSalad from "../NewSalad";

const AddOrder = () => {
	return (
		<main className="container max-w-5xl mx-auto mb-40 ">
			<NewSalad />

			<div className="w-full fixed bottom-0 left-0">
				<div className="order border-green-500 border-2 bg-gray-100 flex flex-col max-w-5xl py-4 mx-auto sm:flex-row">
					<div className="flex-1 text-3xl py-1 text-green-600">Order</div>
					<div className="flex flex-1 sm:justify-end">
						<Button btnName="+" btnStyle="bg-green-400 text-gray-100 text-xl  " />
						<Button btnName="Submit" btnStyle="bg-green-400 text-gray-100 text-xl  " />
					</div>
				</div>
			</div>
		</main>
	);
};

export default AddOrder;
