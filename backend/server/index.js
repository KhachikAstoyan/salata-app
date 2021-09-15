const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const cors = require('cors');

const connect = require("./db");
const PORT = process.env.PORT || 4000;

const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");

async function start() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  await server.applyMiddleware({app});

  app.use(express.static("static"));
  app.use(cors({origin: "*"}))


  app.listen(process.env.PORT || 4000);
}

connect().then(async function() {
  await start();
});
