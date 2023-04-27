const { consumeAPI } = require("../helpers/fetch");
const logger = (message) => console.log(`Language Service: ${message}`);

const getPerros = async (req, res) => {
  res.status(200).json({ data: ''});
};


module.exports = {
  getPerros,
};
