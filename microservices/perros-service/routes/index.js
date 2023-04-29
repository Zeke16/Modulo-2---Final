const express = require("express");
const router = express.Router();

const {
  getPerros,
  getPerrosById,
  getPerrosByRaza,
  getPerrosByPeso,
  getPerrosByName,
  getPerrosByOwnerName,
  getPerrosByOwnerCountry,
  get10PerrosByPeso
} = require("../controllers/perros-controller.js");

router.get("/", getPerros);
router.get("/id/:id", getPerrosById);
router.get("/raza/:raza", getPerrosByRaza);
router.get("/peso/:peso", getPerrosByPeso);
router.get("/name/:nombre", getPerrosByName);
router.get("/ownerName/:nombre", getPerrosByOwnerName);
router.get("/country/:country", getPerrosByOwnerCountry);
router.get("/perrosTop", get10PerrosByPeso);
module.exports = router;
