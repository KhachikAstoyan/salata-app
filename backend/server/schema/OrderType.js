const Client = require("../models/Client");
const Item = require("../models/Item");
const Order = require("../models/Order");
const { generateAudio, removeAudio } = require("../utils/generateAudio.js");

module.exports = {
  Query: {
    async orders(_, args) {
      try {
        const orders = await Order.find({ status: { $in: [0, 1, 2] } })
          .limit(args.limit)
          .skip(args.offset);
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
    async orderCount() {
      try {
        const count = await Order.count({ status: { $in: [0, 1, 2] } });
        return { count };
      } catch (error) {
        throw new Error(error);
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

      const audio = generateAudio(newOrder);
      console.log(audio);

      return await newOrder.save();
    },
    async updateOrderStatus(_, { id, status }) {
      await Order.findByIdAndUpdate(id, { status });
      if (status == 3) removeAudio(id);
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
