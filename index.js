/* eslint-disable */
const express = require("express");
const webpack = require("webpack");
const path = require("path");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("./webpack.config.js");

const PORT = process.env.PORT || 3000;

const app = express();
const compiler = webpack(config);

app.use(express.json());

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.get("/vocab", (req, res) => {
  res.send([
    { word: "hello", created: 2019 },
    { word: "world", created: 2020 }
  ]);
});

app.listen(PORT, err => {
  if (err) {
    throw err;
  }
  console.log(`Server started on port ${PORT}…`);
});
