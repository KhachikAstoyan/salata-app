import { gql } from "@apollo/client";

const ordersQuery = gql`
	query getOrders($offset: Int, $limit: Int) {
		orders(offset: $offset, limit: $limit) {
			id
			dueTime
			isTakeout
			items {
				ingredients {
					id
					name
					category {
						category
					}
				}
				quantity
				extraInfo
			}
			orderNumber
			startTime
			status
		}
	}
`;

const addOrderMutation = gql`
	mutation AddOrderMutation($addOrderInput: inputOrder) {
		addOrder(input: $addOrderInput) {
			id
			dueTime
			startTime
			isTakeout
			items {
				ingredients {
					id
					name
					category {
						category
					}
				}
				quantity
				extraInfo
			}
			orderNumber
			status
		}
	}
`;

export { ordersQuery, addOrderMutation };
