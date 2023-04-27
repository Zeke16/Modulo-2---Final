const fs = require("fs");

const info = fs.readFileSync('data/datos_perro.json');
const data = JSON.parse(info);

module.exports = {
    data
}