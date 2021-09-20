const clientResolvers = require("./ClientType");
const orderResolvers = require("./OrderType");
const itemResolvers = require("./ItemType");
const ingredientResolvers = require("./IngredientType");

module.exports = {
  RootQueryType: {
    ...clientResolvers.Query,
    ...orderResolvers.Query,
    ...ingredientResolvers.Query,
  },
  Mutation: {
    ...clientResolvers.Mutation,
    ...orderResolvers.Mutation,
  },
  OrderType: { ...orderResolvers.OrderType },
  ItemType: { ...itemResolvers.ItemType },
  IngredientType: { ...ingredientResolvers.IngredientType },
  StatusType: {
    NOT_STARTED: 0,
    IN_PROGRESS: 1,
    COMPLETED: 2,
    FINISHED: 3,
  },
};
