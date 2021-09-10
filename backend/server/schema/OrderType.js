const Client = require("../models/Client");
const Item = require("../models/Item");
const Order = require("../models/Order");

module.exports = {
  Query: {
    async orders() {
      try {
        const orders = await Order.find();
        return orders;
      } catch (err) {
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
    async addOrder(
      _,
      { input: { clientId, dueTime, isTakeout, items, startTime, status, d } }
    ) {
      const orders = await Order.find().sort({ orderNumber: -1 });
      const lastOrder = orders[0];

      if (!lastOrder.orderNumber) lastOrder.orderNumber = 0;

      const newOrder = new Order({
        client: clientId,
        dueTime: dueTime,
        isTakeout: isTakeout,
        items: items,
        orderNumber: lastOrder.orderNumber + 1,
        startTime: startTime,
        status: status,
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
    async client(parent) {
      try {
        const client = await Client.findById(parent.client);
        return client;
      } catch (err) {
        throw new Error(err);
      }
    },
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
