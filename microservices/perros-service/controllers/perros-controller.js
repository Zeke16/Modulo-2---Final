const { data } = require("../helpers/readData");
const { consumeAPI } = require("../helpers/fetch");
const logger = (message) => console.log(`Language Service: ${message}`);

const getPerros = async (req, res) => {
  res.status(200).json({ data: data });
};

const getPerrosById = async (req, res) => {
  const perrosById = data.filter((perro) => {
    return perro.Id == req.params.id;
  });
  res.status(200).json({ data: perrosById });
};

const getPerrosByRaza = async (req, res) => {
  const perrosByRaza = data.filter((perro) => {
    return perro.raza == req.params.raza;
  });
  res.status(200).json({ data: perrosByRaza });
};

const getPerrosByPeso = async (req, res) => {
  const perrosByPeso = data.filter((perro) => {
    return perro.peso == req.params.peso;
  });
  res.status(200).json({ data: perrosByPeso });
};

const getPerrosByName = async (req, res) => {
  const perrosByName = data.filter((perro) => {
    return perro.nombre_perro == req.params.nombre;
  });
  res.status(200).json({ data: perrosByName });
};

const getPerrosByOwnerName = async (req, res) => {
  const perrosByOwnerName = data.filter((perro) => {
    return perro.nombre_dueno == req.params.nombre;
  });
  res.status(200).json({ data: perrosByOwnerName });
};

const getPerrosByOwnerCountry = async (req, res) => {
  const perrosByOwnerCountry = data.filter((perro) => {
    return perro.pais_dueno == req.params.country;
  });
  res.status(200).json({ data: perrosByOwnerCountry });
};

module.exports = {
  getPerros,
  getPerrosById,
  getPerrosByRaza,
  getPerrosByPeso,
  getPerrosByName,
  getPerrosByOwnerName,
  getPerrosByOwnerCountry,
};
