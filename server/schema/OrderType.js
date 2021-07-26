//@ts-check
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

const OrderType = new GraphQLObjectType({
  name: "OrderType",
  fields: () => ({
    id: { type: GraphQLID },
    client: {type: ClientType},
    dueTime: { type: GraphQLInt },
    isTakeout: { type: GraphQLBoolean}, 
    items: { type: new GraphQLList(ItemType)},
    orderNumber: {type: GraphQLInt}, 
    startTime: {type: GraphQLInt}, 
    status: { type: StatusType}, 
  }),
});

module.exports = OrderType;
