const express = require("express");
const router = require("../routes/index.js")
const server = express();

server.use("/api/v2/perros", router);

module.exports = server