const { PubSub } = require("graphql-subscriptions");

const Client = require("../models/Client");
const Item = require("../models/Item");
const Order = require("../models/Order");
const { generateAudio, removeAudio } = require("../utils/generateAudio.js");

const pubsub = new PubSub();

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
  Subscription: {
    orderAdded: {
      subscribe: () => pubsub.asyncIterator("ORDER_ADDED"),
    },
    statusChanged: {
      subscribe: () => pubsub.asyncIterator("STATUS_CHANGED"),
    },
  },
  Mutation: {
    async addOrder(_, { input: { isTakeout, items } }) {
      function addMinutes(minutes) {
        return new Date(Date.now() + minutes * 60000);
      }

      // Date.prototype.addHours = function (h) {
      //   this.setTime(this.getTime() + h * 60 * 60 * 1000);
      //   return this;
      // };
      var now = Date.now();
      const dueTime = addMinutes(20);
      // var oneHourLater = now.addHours(1);

      const newOrder = new Order({
        // client: clientId,
        dueTime,
        isTakeout: isTakeout,
        items: items,
        status: 0,
      });

      const audio = await generateAudio(newOrder);
      console.log(audio);

      const submitOrder = await newOrder.save();

      pubsub.publish("ORDER_ADDED", { orderAdded: submitOrder.id });
      return submitOrder;
    },
    async updateOrderStatus(_, { id, status }) {
      await Order.findByIdAndUpdate(id, { status });
      if (status == 3) removeAudio(id);

      const order = await Order.findById(id);

      pubsub.publish("STATUS_CHANGED", { statusChanged: order });
      return order;
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
