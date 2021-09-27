const Client = require("../models/Client");
const Item = require("../models/Item");
const Order = require("../models/Order");

module.exports = {
	Query: {
		async orders(parent, args, context, info) {
			try {
				// const orders = await Order.find();
				let orders = await Order.aggregate([
					{ $sort: { createdAt: -1 } },
					{
						$facet: {
							data: [{ $skip: args.offset }, { $limit: args.limit }], // add projection here wish you re-shape the docs
						},
					},
				]).exec();
				console.log(orders[0].data);
				return orders[0].data;
				// const orders = await Order.find();
				// return orders;
			} catch (err) {
				console.log(err);
				throw new Error(err);
			}
		},
		async clientOrders(_, { id }) {
			try {
				const orders = await Order.find({ client: id });
				return orders;
			} catch (err) {
				throw new Error(err);
			}
		},
	},
	Mutation: {
		async addOrder(_, { input: { isTakeout, items } }) {
			const orders = await Order.find().sort({ orderNumber: -1 });
			const lastOrder = orders[0];

			// Date.prototype.addHours = function (h) {
			//   this.setTime(this.getTime() + h * 60 * 60 * 1000);
			//   return this;
			// };
			var now = Date.now();
			// var oneHourLater = now.addHours(1);
			let newOrderNumber;
			if (!lastOrder || !lastOrder.orderNumber) newOrderNumber = 1;
			else newOrderNumber = lastOrder.orderNumber++;

			const newOrder = new Order({
				// client: clientId,
				startTime: now,
				dueTime: now,
				isTakeout: isTakeout,
				items: items,
				orderNumber: newOrderNumber,
				status: 0,
			});
			return await newOrder.save();
		},
		async updateOrderStatus(_, { id, status }) {
			await Order.findByIdAndUpdate(id, { status });
			return Order.findById(id);
		},
		// async addItems(
		//   _,
		//   {
		//     orderId,
		//     ingredients,
		//     extra,
		//     additionalInformation,
		//     name,
		//     audio,
		//     quantity,
		//   }
		// ) {
		//   return Order.addItems(
		//     orderId,
		//     input
		//   );
		// },
	},
	OrderType: {
		// async client(parent) {
		//   try {
		//     const client = await Client.findById(parent.client);
		//     return client;
		//   } catch (err) {
		//     throw new Error(err);
		//   }
		// },
	},
	OrderedItemType: {
		async item(parent) {
			try {
				const items = await Item.findById(parent.item);
				return items;
			} catch (err) {
				throw new Error(err);
			}
		},
	},
};
