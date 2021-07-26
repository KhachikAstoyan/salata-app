const graphql = require('graphql');
const { GraphQLEnumType } = graphql;

// add more from website
const IngredientType = new GraphQLEnumType({
    name: 'IngredientType',
    values: {
      SALATA_MIX: { value: 0 },
      ROMAINE_HEARTS: { value: 1 },
      ARCADIAN: { value: 2 },
      SPINACH: { value: 3 },
      CUCUMBER: { value: 4 },
      TOMATO: { value: 5 },
    }
  });

  module.exports = IngredientType;