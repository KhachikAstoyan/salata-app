//@ts-check
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList } = graphql;
const OrderType = require("./OrderType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    orders: {
      type: new GraphQLList(OrderType),
      resolve() {
        return [];
      },
    },
  }),
});

module.exports = RootQuery;
