import React, { useState, useEffect } from "react";
import { Dropdown } from "./Button";
import { gql, useQuery } from "@apollo/client";
import { ordersQuery } from "../gql.js";
import ItemList from "./ItemList.js";
const perPage = 5;

const PaginationBtn = (props) => {
	return (
		<button className="p-2 bg-gray-100 rounded-md m-2" {...props}>
			{props.children}
		</button>
	);
};

const OrderList = () => {
	const [page, setPage] = useState(0);
	const { loading, error, data, refetch } = useQuery(ordersQuery, {
		variables: {
			offset: perPage * page,
			limit: perPage,
		},
	});
	const [showContentId, setContentId] = useState(0);

	const paginate = (action) => {
		console.log(action);
		switch (action) {
			case "prev": {
				if (page !== 0) {
					setPage(page - 1);
					refetch({ offset: perPage * page, limit: perPage });
				}
				break;
			}
			case "next": {
				setPage(page + 1);
				refetch({ offset: perPage * page, limit: perPage });
				break;
			}
		}
	};

	if (loading) return "Loading...";
	if (error) return `Error! ${error.message}`;

	return (
		<main className="my-0 mx-auto max-w-5xl">
			{data.orders.map((order, orderId) => {
				return (
					<div
						key={order.id}
						className="w-11/12 mx-auto"
						onClick={() => {
							setContentId(orderId);
						}}
					>
						<div className="">
							<div className="order relative z-40 flow-root w-full p-6 justify-between">
								<div className="justify-start">
									<h2 className="text-xl text-mainText">
										Order{" "}
										<span className="text-primary text-myGreen">
											#{order.orderNumber}
										</span>{" "}
										- {order.items.length} Items
									</h2>
									<p className="text-mainText text-base font-medium">
										Due by {order.dueTime} pm
									</p>
								</div>
								<div className="overflow-visible flex relative float-right place-self-end">
									<div className="overflow-visible">
										<Dropdown
											drpName={order.status}
											options={[
												//need to add mutation
												// {
												//   name: "Not Started",

												// },

												// {
												//   name: "In Progress",
												// },

												// {
												//   name: "Completed",
												// },

												// {
												//   name="Finished",
												// },
												"Not Started",
												"In Progress",
												"Completed",
												"Finished",
											]}
											drpStyle="Status"
											drpOptionSize={24}
										/>
									</div>
								</div>
								{/* <img src="./dropdown for orders.png" alt="dropdown" className="w-6 h-6" /> */}
							</div>
						</div>
						<div
							className="flex left-1/2 relative z-50"
							// onClick={() => {
							//   setContentId(null);
							// }}
						></div>
						<div className="relative bottom-10 z-20">
							{showContentId === orderId && (
								<ItemList items={[...data.orders[orderId].items]} orderId={order.id} />
							)}
						</div>
					</div>
				);
			})}

			<PaginationBtn onClick={() => paginate("prev")}>Previous page</PaginationBtn>
			<span>{page + 1}</span>
			<PaginationBtn onClick={() => paginate("next")}>Next page</PaginationBtn>
		</main>
	);
};

export default OrderList;
