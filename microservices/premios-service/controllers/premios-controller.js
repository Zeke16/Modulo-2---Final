const { consumeAPI } = require("../helpers/fetch");
const { db } = require("../config/db");
const logger = (message) => console.log(`Language Service: ${message}`);

const getPremios = async (req, res) => {
  let info = [];

  db.all("SELECT * FROM campeonatos", (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    rows.forEach((row) => {
      info.push(row)
    });

    res.status(200).json({ data: info })
  });
};

const getPremiosById = async (req, res) => {
  let info = [];

  db.all(`SELECT * FROM campeonatos WHERE id = ${req.params.id} `, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    rows.forEach((row) => {
      info.push(row)
    });

    res.status(200).json({ data: info })
  });
};

const getPremiosByIdCampeon = async (req, res) => {
  let info = [];

  db.all(`SELECT * FROM campeonatos WHERE id_campeon = ${req.params.id} `, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    rows.forEach((row) => {
      info.push(row)
    });

    res.status(200).json({ data: info })
  });
};

const getPremiosByCampeonato = async (req, res) => {
  let info = [];

  db.all(`SELECT * FROM campeonatos WHERE anio_campeonato = ${req.params.anio} `, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    rows.forEach((row) => {
      info.push(row)
    });

    res.status(200).json({ data: info })
  });
};

const getPremiosByLugar = async (req, res) => {
  let info = [];

  db.all(`SELECT * FROM campeonatos WHERE lugar LIKE '${req.params.lugar}'`, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    rows.forEach((row) => {
      info.push(row)
    });

    res.status(200).json({ data: info })
  });
};

const getPremiosByCategory = async (req, res) => {
  let info = [];

  db.all(`SELECT * FROM campeonatos WHERE categoria_ganada LIKE '%${req.params.category}%'`, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    rows.forEach((row) => {
      info.push(row)
    });

    res.status(200).json({ data: info })
  });
};

const getPremiosByCountry = async (req, res) => {
  let info = [];

  db.all(`SELECT * FROM campeonatos WHERE pais_competencia LIKE '%${req.params.country}'`, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    rows.forEach((row) => {
      info.push(row)
    });

    res.status(200).json({ data: info })
  });
};

const getPremiosByReward = async (req, res) => {
  let info = [];

  db.all(`SELECT * FROM campeonatos WHERE premio = ${req.params.reward} `, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    rows.forEach((row) => {
      info.push(row)
    });

    res.status(200).json({ data: info })
  });
};

const getPremiosByScore = async (req, res) => {
  let info = [];

  db.all(`SELECT * FROM campeonatos WHERE puntaje LIKE '${req.params.score}'`, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    rows.forEach((row) => {
      info.push(row)
    });

    res.status(200).json({ data: info })
  });
};

const getPremiosByLugarAndReward = async (req, res) => {
  let info = [];

  db.all(`SELECT * FROM campeonatos`, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    rows.forEach((row) => {
      info.push(row)
    });
    //Obtener los campeonatos por lugar
    const premiosByPlace = info.filter((premio) => {
      return premio.lugar == req.query.lugar
    });

    //Obtener los campeonatos por premio monetario
    const premiosByReward = premiosByPlace.filter((reward) => {
      let condicion = req.query.premio;
      if (String(condicion).includes(">") && String(condicion).includes("=")) {
        let valor = condicion.split(">=");
        return reward.premio >= valor[1];
      } else if (String(condicion).includes("<") && String(condicion).includes("=")) {
        let valor = condicion.split("<=");
        return reward.premio <= valor[1];
      } else if (String(condicion).includes(">")) {
        let valor = condicion.split(">");
        return reward.premio > valor[1];
      } else if (String(condicion).includes("<")) {
        let valor = condicion.split("<");
        return reward.premio < valor[1];
      } else if (String(condicion).includes("=")) {
        let valor = condicion.split("=");
        console.log("igual");
        return reward.premio == valor[1];
      }
    })

    res.status(200).json({ length: premiosByReward.length, data: premiosByReward })
  });
};

const getPremiosByPromedio = async (req, res) => {
  let info = [];

  db.all(`SELECT lugar, AVG(premio) as promedio FROM campeonatos WHERE lugar = '${req.params.lugar}'`, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    rows.forEach((row) => {
      info.push(row)
    });
    res.status(200).json({ length: info.length, data: info })
  });
};

module.exports = {
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
  getPremiosByPromedio
};
