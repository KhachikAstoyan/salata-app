//@ts-check
const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
} = graphql;

const ClientType = new GraphQLObjectType({
    name: "ClientType",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
    }),
});

module.exports = ClientType;
