// const graphql = require("graphql");
// const { ids } = require("webpack");
// const {
//   GraphQLObjectType,
//   GraphQLID,
//   GraphQLInt,
//   GraphQLString,
//   GraphQLList
// } = graphql;
// const AudioType = require('./AudioType');
// const IngredientType = require("./IngredientType");
// const Item = require("../models/Item");
// const generateAudio = require('../utils/generateAudio');

// const ItemType = new GraphQLObjectType({
//   name: "ItemType",
//   fields: () => ({
//     id: { type: GraphQLID },
//     ingredients: {
//       type: new GraphQLList(IngredientType),
//       resolve: async (parentValue, args) => {
//         const ingredients = Item.findIngredients(parentValue._id)
//         return ingredients;
//       }
//     },
//     extra: { type: new GraphQLList(IngredientType) },
//     additionalInformation: { type: GraphQLString },
//     name: { type: GraphQLString },
//     audio: {
//       args: { language: { type: GraphQLString }, delay: { type: GraphQLInt } },
//       type: AudioType, resolve(parentValue, args) {
//         console.log(args.delay);
//         return generateAudio(parentValue, language = args.language, delay = args.delay)
//       }
//     },
//     quantity: { type: GraphQLInt }
//   }),
// });

// module.exports = ItemType;

const Item = require("../models/Item");
const Ingredient = require("../models/Ingredient");

module.exports = {
  // Mutation:{
  //   async addItems(_,{orderId,ingredients,extra,additionalInformation,name,})
  // }
  // ItemType:
  ItemType: {
    async ingredients(parent, args) {
      console.log(parent);
      const ingredients = [];
      parent.ingredients.forEach((ingredientId) => {
        ingredients.push(Ingredient.findById(ingredientId));
      });
      return ingredients;
    },
  },
};
