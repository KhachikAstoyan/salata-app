//@ts-check
const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
} = graphql;

const AudioType = new GraphQLObjectType({
    name: "AudioType",
    fields: () => ({
        // id: { type: GraphQLString },
        data: { type: GraphQLString },
        // language: { type: GraphQLString },
        // delay: { type: GraphQLInt }
    }),
});

module.exports = AudioType;
