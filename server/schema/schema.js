//@ts-check
const graphql = require("graphql");
const models = require('../models');
const { GraphQLSchema } = graphql;
const RootQueryType = require("./RootQueryType");
const mutations = require("./mutations");

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: mutations,
});

module.exports = schema;
