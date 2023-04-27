const express = require("express");
const router = require("../routes/index.js")
const server = express();

server.use("/api/v2/premios", router);

module.exports = server