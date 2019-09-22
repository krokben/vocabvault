/* eslint-disable */
const express = require("express");
const webpack = require("webpack");
const path = require("path");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("./webpack.config.js");
const user = require("./server/routes/user");

const PORT = process.env.PORT || 3000;

const app = express();
const compiler = webpack(config);
const mongoose = require("mongoose");
const mongoDB = process.env.MONGO_DB;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.json());
app.use("/users", user);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.listen(PORT, err => {
  if (err) {
    throw err;
  }
  console.log(`Server started on port ${PORT}…`);
});
