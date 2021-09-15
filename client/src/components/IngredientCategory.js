import React from "react";
import Ingredient from "./Ingredient";

// TODO: fix toggling

const IngredientCategory = ({ number, showContent, updateContent }) => {
	return (
		<div className="mt-5 mb-2">
			<h2
				className="text-xl mb-2 transition-all active:text-green-500 active:"
				onClick={() => {
					updateContent(number);
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-7 w-7 inline transition-transform duration-300 transform"
					style={{
						transform: showContent === number ? "rotate(90deg)" : "rotate(0deg)",
					}}
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clipRule="evenodd"
					/>
				</svg>
				Vegetables
			</h2>

			<div
				className={`transition-opacity duration-1000 ${
					showContent === number ? "block opacity-100" : "hidden opacity-0"
				}`}
			>
				<Ingredient ingredientName="jalapeno" />
				<Ingredient ingredientName="apple" />
				<Ingredient ingredientName="jalapeno" />
				<Ingredient ingredientName="apple" />
				<Ingredient ingredientName="jalapeno" />
				<Ingredient ingredientName="jalapeno" />
				<Ingredient ingredientName="apple" />
				<Ingredient ingredientName="jalapeno" />
			</div>
		</div>
	);
};

export default IngredientCategory;
