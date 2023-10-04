const express = require("express");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");
const app = express();

// TODO: init middlewares.
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// TODO: init db.

// TODO: init routes.
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello World!",
  });
});

// TODO: init error handler.

module.exports = app;
