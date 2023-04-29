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
    return perro.pais_origen_dueno == req.params.country;
  });
  res.status(200).json({ data: perrosByOwnerCountry });
};

const get10PerrosByPeso = async (req, res) => {
  const perros = data.sort((a, b) => b.peso - a.peso).splice(0, 10);

  let razas = [];
  for (let raza of perros) {
    if (razas.indexOf(raza.raza) > 0) {
      continue;
    }
    razas.push(raza.raza);
  }

  let infoRazas = [];
  for (let raza of razas) {
    let dataRazas = await consumeAPI(`http://razas:4000/api/v2/razas/raza/${raza}`);
    infoRazas.push(dataRazas.data[0]);
  }

  let categorias = {};
  for (let campeon of perros) {
    let dataCampeones = await consumeAPI(`http://premios:5000/api/v2/premios/campeon/${campeon.Id}`);
    if(dataCampeones.data[0] != undefined){
      let keys = Object.keys(categorias);
      let indexExiste = keys.indexOf(dataCampeones.data[0].categoria_ganada);
      if(indexExiste != -1){
        let puntaje = categorias[keys[indexExiste]] + dataCampeones.data[0].puntaje.length;
        categorias[keys[indexExiste]] = puntaje;
        continue
      }
      categorias[dataCampeones.data[0].categoria_ganada] = dataCampeones.data[0].puntaje.length
    }
  }

  res.status(200).json({ top10: perros, razas: infoRazas, puntajeCategorias: categorias });
}

module.exports = {
  getPerros,
  getPerrosById,
  getPerrosByRaza,
  getPerrosByPeso,
  getPerrosByName,
  getPerrosByOwnerName,
  getPerrosByOwnerCountry,
  get10PerrosByPeso
};
