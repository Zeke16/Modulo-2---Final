const data = "data/raza_info.csv";
const fs = require("fs");
const csv = require("csv-parser");
const { consumeAPI } = require("../helpers/fetch");
const { cleanData } = require("../helpers/cleanData");
const logger = (message) => console.log(`Language Service: ${message}`);

const getRazas = async (req, res) => {
  let results = [];
  fs.createReadStream("data/raza_info.csv")
    .pipe(csv())
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      results = cleanData(results);
      res.status(200).json({data: results });
    });
};

const getRazasById = async (req, res) => {
  let results = [];
  fs.createReadStream("data/raza_info.csv")
    .pipe(csv())
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      results = cleanData(results);
      const razaById = results.filter((raza) => {
        return raza.id == req.params.id;
      });
      res.status(200).json({ data: razaById });
    });
};

const getRazasByRaza = async (req, res) => {
  let results = [];
  fs.createReadStream("data/raza_info.csv")
    .pipe(csv())
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      results = cleanData(results);
      const raza = results.filter((raza) => {
        return raza.raza == req.params.raza;
      });
      res.status(200).json({ data: raza });
    });
};

const getRazaByPelo = async (req, res) => {
  let results = [];
  fs.createReadStream("data/raza_info.csv")
    .pipe(csv())
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      results = cleanData(results);
      const razaByPelo = results.filter((raza) => {
        for (let pelo of raza.color_de_pelo) {
          if (String(pelo).includes(req.params.pelo)) {
            return raza;
          }
        }
      });
      res.status(200).json({ data: razaByPelo });
    });
};

const getRazaBySizePelo = async (req, res) => {
  let results = [];
  fs.createReadStream("data/raza_info.csv")
    .pipe(csv())
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      results = cleanData(results);
      const razaBySizePelo = results.filter((raza) => {
        return raza.tamanio_de_pelo == req.params.size;
      });
      res.status(200).json({ data: razaBySizePelo });
    });
};

const getRazaByCountry = async (req, res) => {
  let results = [];
  fs.createReadStream("data/raza_info.csv")
    .pipe(csv())
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      results = cleanData(results);
      const razaByCountry = results.filter((raza) => {
        return raza.pais_de_origen == req.params.country;
      });
      res.status(200).json({ data: razaByCountry });
    });
};

const getRazaByLife = async (req, res) => {
  let results = [];
  fs.createReadStream("data/raza_info.csv")
    .pipe(csv())
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      results = cleanData(results);
      const razaByLife = results.filter((raza) => {
        return raza.expectativa_de_vida == req.params.life;
      });
      res.status(200).json({ data: razaByLife });
    });
};

const getRazaByType = async (req, res) => {
  let results = [];
  fs.createReadStream("data/raza_info.csv")
    .pipe(csv())
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      results = cleanData(results);
      const razaByType = results.filter((raza) => {
        return raza.tipo == req.params.type;
      });
      res.status(200).json({ data: razaByType });
    });
};

const getRazaByAccredited = async (req, res) => {
  let results = [];
  fs.createReadStream("data/raza_info.csv")
    .pipe(csv())
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      results = cleanData(results);
      const razaByAccredited = results.filter((raza) => {
        return raza.acreditado == req.params.credito;
      });
      res.status(200).json({ data: razaByAccredited });
    });
};

module.exports = {
  getRazas,
  getRazasById,
  getRazasByRaza,
  getRazaByPelo,
  getRazaBySizePelo,
  getRazaByCountry,
  getRazaByLife,
  getRazaByType,
  getRazaByAccredited,
};
