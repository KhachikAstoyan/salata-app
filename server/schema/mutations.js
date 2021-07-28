//@ts-check
const graphql = require("graphql");
const ClientType = require("./ClientType");
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList } =
  graphql;
const ItemType = require("./ItemType");
const OrderType = require("./OrderType");
const StatusType = require("./StatusType");
const mongoose = require("mongoose");
const { GraphQLID } = require("graphql");
const Order = mongoose.model("order");

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
              clientId: { type: GraphQLID },
              dueTime: { type: GraphQLString },
              isTakeout: { type: GraphQLBoolean },
              itemsId: { type: GraphQLList(GraphQLID) },
              startTime: { type: GraphQLString },
              status: { type: StatusType },
            },
          }),
        },
      },
      resolve(parentValue, args) {
        console.log(args.input.itemsId);
        const newOrder = new Order({
          client: args.input.clientId,
          dueTime: args.input.dueTime,
          isTakeout: args.input.isTakeout,
          items: args.input.itemsId,
          startTime: args.input.startTime,
          status: args.input.status,
        });
        return newOrder.save();
      },
    },
    addItems: {
      type: OrderType,
      args: {},
      resolve(parentValue, args) {
        return;
      },
    },
    updateOrderStatus: {
      type: OrderType,
      args: {},
      resolve(parentValue, args) {
        return;
      },
    },
  },
});

module.exports = mutation;
