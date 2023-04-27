const express = require("express");
const router = express.Router();

const { getPerros } = require("../controllers/perros-controller.js");

router.get("/", getPerros);
module.exports = router