//@ts-check
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const ItemType = require('./ItemType');
const OrderType = require("./OrderType");
const StatusType = require('./StatusType');

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addOrder: {
      type: OrderType,
      args: { },
      resolve(parentValue, args) {
        return;
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
      args: { },
      resolve(parentValue, args) {
        return;
      },
    },
},
});

module.exports = mutation;
