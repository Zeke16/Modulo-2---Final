const express = require("express");
const router = express.Router();

const {
  getRazas,
  getRazasById,
  getRazasByRaza,
  getRazaByPelo,
  getRazaBySizePelo,
  getRazaByCountry,
  getRazaByLife,
  getRazaByType,
  getRazaByAccredited,
} = require("../controllers/razas-controller.js");

router.get("/", getRazas);
router.get("/id/:id", getRazasById);
router.get("/raza/:raza", getRazasByRaza);
router.get("/pelo/:pelo", getRazaByPelo);
router.get("/sizePelo/:size", getRazaBySizePelo);
router.get("/country/:country", getRazaByCountry);
router.get("/life/:life", getRazaByLife);
router.get("/type/:type", getRazaByType);
router.get("/credito/:credito", getRazaByAccredited);
module.exports = router;
