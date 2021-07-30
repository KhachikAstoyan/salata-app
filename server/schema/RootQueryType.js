//@ts-check
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLID } = graphql;
const OrderType = require("./OrderType");
const Order = require("../models/Order");
const ClientType = require("./ClientType");
const Client = require("../models/Client");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    orders: {
      type: new GraphQLList(OrderType),
      resolve: async () => {
        return await Order.find({ status: { $ne: 2 } });
        // return
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve: async () => {
        return await Client.find();
      },
    },
    client: {
      type: ClientType,
      args: { clientId: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: async (parentValue, { clientId }) => {
        return await Client.findById(clientId);
      },
    },
    clientOrders: {
      type: new GraphQLList(OrderType),
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: async (parentValue, { id }) => {
        return await Order.find({ client: id });
      },
    },
  }),
});

module.exports = RootQuery;
