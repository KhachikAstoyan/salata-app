//@ts-check
const graphql = require("graphql");
const { ids } = require("webpack");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = graphql;
const AudioType = require('./AudioType');
const IngredientType = require("./IngredientType");

const ItemType = new GraphQLObjectType({
  name: "ItemType",
  fields: () => ({
    id: { type: GraphQLID },
    ingredients: { type: new GraphQLList(IngredientType) },
    extra: { type: new GraphQLList(IngredientType) },
    additionalInformation: { type: GraphQLString },
    name: { type: GraphQLString },
    audio: {
      type: new GraphQLList(AudioType), resolve(parentValue, args) {
        // this is where we call Google cloud, and conver to audio, then return a AudiotType array
      }
    },
    quantity: { type: GraphQLInt }
  }),
});

module.exports = ItemType;
