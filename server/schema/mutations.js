const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLInt,
  GraphQLID,
} = graphql;
const ItemType = require("./ItemType");
const OrderType = require("./OrderType");
const ClientType = require("./ClientType")
const StatusType = require("./StatusType");
const mongoose = require("mongoose");
const Order = require("../models/Order");
const Item = require("../models/Item");
const Client = require("../models/Client");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addOrder: {
      type: OrderType,
      args: {
        input: {
          type: new graphql.GraphQLInputObjectType({
            name: "input",
            fields: {
              clientId: { type: GraphQLString },
              dueTime: { type: GraphQLString },
              isTakeout: { type: GraphQLBoolean },
              itemsId: { type: GraphQLList(GraphQLID) },
              startTime: { type: GraphQLString },
              status: { type: StatusType },
            },
          }),
        },
      },
      async resolve(parentValue, args) {
        const orders = await Order.find().sort({ orderNumber: -1 });
        const lastOrder = orders[0];

        if (!lastOrder.orderNumber) lastOrder.orderNumber = 0;

        const newOrder = new Order({
          client: args.input.clientId,
          dueTime: args.input.dueTime,
          isTakeout: args.input.isTakeout,
          items: args.input.itemsId,
          orderNumber: lastOrder.orderNumber + 1,
          startTime: args.input.startTime,
          status: args.input.status,
        });
        return await newOrder.save();
      }
    },
    addItems: {
      type: OrderType,
      args: {
        orderId: { type: GraphQLID },
        ingredients: { type: new GraphQLList(GraphQLID) },
        extra: { type: GraphQLString },
        additionalInformation: { type: GraphQLString },
        name: { type: GraphQLString },
        audio: { type: GraphQLString },
        quantity: { type: GraphQLInt }
      },
      resolve(parentValue, args) {
        return Order.addItems(args.orderId, args.ingredients, args.extra, args.additionalInformation, args.name, args.audio, args.quantity);
      },
    },
    addIngredients: {
      type: OrderType,
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        items: { type: new GraphQLList(GraphQLID) },
      },
      resolve(parentValue, args) {
        return Item.addIngredients(args.id, args.name, args.items);
      },
    },
    updateOrderStatus: {
      type: OrderType,
      args: {
        id: {
          type: GraphQLString,
        },
        status: {
          type: StatusType,
        },
      },
      async resolve(parentValue, { id, status }) {
        return await Order.findByIdAndUpdate(id, { status });
      },
    },
    addClient: {
      type: ClientType,
      args: {
        name: { type: GraphQLString },
        phoneNumber: { type: GraphQLString }
      },
      async resolve(parentValue, { name, phoneNumber }) {
        return await Client.create({ name, phoneNumber });
      }
    }
  },

});

module.exports = mutation;
