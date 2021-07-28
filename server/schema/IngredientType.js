const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

// add more from website
const IngredientType = new GraphQLObjectType({
    name: "IngredientType",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString }
    })
});

module.exports = IngredientType;