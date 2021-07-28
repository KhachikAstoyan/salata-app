//@ts-check
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList } = graphql;
const OrderType = require("./OrderType");
const Order = require("../models/Order");

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
    }),
});

module.exports = RootQuery;
