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
  getPremiosByScore,
  getPremiosByLugarAndReward,
  getPremiosByPromedio,
  getPremiosByIdAndChampion
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
router.get("/placeReward/", getPremiosByLugarAndReward)
router.get("/promedio/:lugar", getPremiosByPromedio)
router.get("/idAndCampeon/:id", getPremiosByIdAndChampion)
module.exports = router;
