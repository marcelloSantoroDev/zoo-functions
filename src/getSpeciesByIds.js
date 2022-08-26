const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return species.filter((element) => ids.find((arg) => element.id === arg));
}

module.exports = getSpeciesByIds;
