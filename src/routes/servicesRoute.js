const express = require("express");
const route = express.Router();

const Server = require("../services/TypeSevices");

route.get("/", (req, res) => {
  res.json(Server);
});

module.exports = route;
