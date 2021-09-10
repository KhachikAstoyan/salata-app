const clientResolvers = require("./ClientType");
const orderResolvers = require("./OrderType");

module.exports = {
  RootQueryType: {
    ...clientResolvers.Query,
    ...orderResolvers.Query,
  },
  Mutation: {
    ...clientResolvers.Mutation,
    ...orderResolvers.Mutation,
  },
  OrderType: { ...orderResolvers.OrderType },
  OrderedItemType: { ...orderResolvers.OrderedItemType },
  StatusType: {
    NOT_STARTED: 0,
    IN_PROGRESS: 1,
    COMPLETED: 2,
    FINISHED: 3,
  },
};
