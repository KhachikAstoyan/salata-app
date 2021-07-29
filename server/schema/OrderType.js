const { GraphQLString } = require("graphql");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList
} = graphql;
const ClientType = require("./ClientType");
const ItemType = require("./ItemType");
const StatusType = require("./StatusType");
const Client = require("../models/Client");
const Item = require("../models/Item");
const Order = require('../models/Order');

const OrderType = new GraphQLObjectType({
  name: "OrderType",
  fields: () => ({
    id: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve: async (parentValue, args) => {
        return await Client.findById(parentValue.client)
      }
    },
    dueTime: { type: GraphQLInt },
    isTakeout: { type: GraphQLBoolean },
    items: {
      type: new GraphQLList(ItemType),
      resolve: async (parentValue, args) => {
        return Order.findItems(parentValue._id)
      }
    },
    orderNumber: { type: GraphQLInt },
    startTime: { type: GraphQLInt },
    status: { type: StatusType },
  }),
});

module.exports = OrderType;
