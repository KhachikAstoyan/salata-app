const clientResolvers = require("./ClientType");
const orderResolvers = require("./OrderType");
const itemResolvers = require("./ClientType");
const ingredientResolvers = require("./IngredientType");

module.exports = {
  RootQueryType: {
    ...clientResolvers.Query,
    ...orderResolvers.Query,
    ...itemResolvers.Query,
    ...ingredientResolvers.Query,
  },
  Mutation: {
    ...clientResolvers.Mutation,
    ...orderResolvers.Mutation,
    ...itemResolvers.Mutation,
    ...ingredientResolvers.Mutation,
  },
  OrderType: { ...orderResolvers.OrderType },
  ItemType: { ...itemResolvers.ItemType },
  StatusType: {
    NOT_STARTED: 0,
    IN_PROGRESS: 1,
    COMPLETED: 2,
  },
};
