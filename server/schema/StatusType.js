const graphql = require('graphql');
const { GraphQLEnumType } = graphql;

const StatusType = new GraphQLEnumType({
    name: 'StatusType',
    values: {
      NOT_STARTED: { value: 0 },
      IN_PROGRESS: { value: 1 },
      COMPLETED: { value: 2 }
    }
  });

  module.exports = StatusType;