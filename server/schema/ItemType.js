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
const Item = require("../models/Item");
const generateAudio = require('../utils/generateAudio');

const ItemType = new GraphQLObjectType({
  name: "ItemType",
  fields: () => ({
    id: { type: GraphQLID },
    ingredients: {
      type: new GraphQLList(IngredientType),
      resolve: async (parentValue, args) => {
        const ingredients = Item.findIngredients(parentValue._id)
        return ingredients;
      }
    },
    extra: { type: new GraphQLList(IngredientType) },
    additionalInformation: { type: GraphQLString },
    name: { type: GraphQLString },
    audio: {
      type: AudioType, resolve(parentValue, args) {
        console.log(parentValue);
        return generateAudio(parentValue)

      }
    },
    quantity: { type: GraphQLInt }
  }),
});

module.exports = ItemType;
