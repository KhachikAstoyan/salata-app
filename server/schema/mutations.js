const graphql = require("graphql");
const ClientType = require("./ClientType");
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
const IngredientType = require("./IngredientType");
const StatusType = require("./StatusType");
const mongoose = require("mongoose");
const Order = require("../models/Order");

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
      }
    },
    addItems: {
      type: OrderType,
      args: {
        id: { type: GraphQLString},
        ingredients: { type: new GraphQLList(IngredientType)},
        extra: { type: GraphQLString},
        additionalInformation: {type: GraphQLString},
        name: {type: GraphQLString },
        audio: {type: GraphQLString},
        quantity: {type: GraphQLInt}
      },
      resolve(parentValue, args) {
        return Order.addItems(args.id, args.ingredients, args.extra, args.additionalInformation, args.name, args.audio, args.quantity);
      },
    },
    updateOrderStatus: {
      type: OrderType,
      args: {
        id: {
          type: GraphQLID,
        },
        status: {
          type: StatusType,
        },
      },
      async resolve(parentValue, { id, status }) {
        return await Order.findByIdAndUpdate(id, { status });
      },
    },
  },
});

module.exports = mutation;
