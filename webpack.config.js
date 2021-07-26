//@ts-check
const webpack = require("./node_modules/webpack");
const HtmlWebpackPlugin = require("./node_modules/html-webpack-plugin");

module.exports = {
   mode: "development",
   entry: "./client/index.js",
   output: {
      path: "/",
      filename: "bundle.js",
   },
   module: {
      rules: [
         {
            use: {
               loader: "babel-loader",
               options: {
                  presets: ["@babel/preset-env"],
               },
            },
            test: /\.js$/,
            exclude: /node_modules/,
         },
         {
            use: ["style-loader", "css-loader"],
            test: /\.css$/,
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: "client/index.html",
      }),
   ],
};