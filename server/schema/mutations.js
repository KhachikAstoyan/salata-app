//@ts-check
const graphql = require("graphql");
const ClientType = require("./ClientType");
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList } = graphql;
const ItemType = require('./ItemType');
const OrderType = require("./OrderType");
const StatusType = require('./StatusType');

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
              clientID: { type: GraphQLString },
              clientName: { type: GraphQLString },
              clientNumber: { type: GraphQLString },
              dueDate: { type: GraphQLString },
              isTakeout: { type: GraphQLBoolean }
            }
          })
        }
      },
      resolve(parentValue, args) {
        return
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
