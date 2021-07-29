// @ts-check

const express = require('express');
const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");
const path = require('path');

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config.js");

const connect = require('./db');
const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("Listening...");
});

connect();
app.use(express.json());
app.use('/static', express.static(path.resolve(__dirname, 'static')));
app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

// @ts-ignore
app.use(webpackMiddleware(webpack(webpackConfig)));