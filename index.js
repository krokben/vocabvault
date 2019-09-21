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
  res.status(200);
  res.send([
    { content: "hello", created: 2019 },
    { content: "world", created: 2020 }
  ]);
});

app.post("/vocab", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, err => {
  if (err) {
    throw err;
  }
  console.log(`Server started on port ${PORT}…`);
});
