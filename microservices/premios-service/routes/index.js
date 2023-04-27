const express = require("express");
const router = express.Router();

const {
  getPremios,
  getPremiosById,
  getPremiosByIdCampeon,
  getPremiosByCampeonato,
  getPremiosByLugar,
  getPremiosByCategory,
  getPremiosByCountry,
  getPremiosByReward,
  getPremiosByScore
} = require("../controllers/premios-controller.js");

router.get("/", getPremios);
router.get("/id/:id", getPremiosById);
router.get("/campeon/:id", getPremiosByIdCampeon);
router.get("/campeonato/:anio", getPremiosByCampeonato);
router.get("/lugar/:lugar", getPremiosByLugar);
router.get("/category/:category", getPremiosByCategory);
router.get("/country/:country", getPremiosByCountry);
router.get("/reward/:reward", getPremiosByReward);
router.get("/score/:score", getPremiosByScore);
module.exports = router;
