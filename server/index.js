const { ApolloServer } = require("apollo-server");

const connect = require("./db");
const PORT = process.env.PORT || 4000;

const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

connect();
server.listen(process.env.PORT || 4000).then((res) => {
  console.log(`server running at ${res.url}`);
});
