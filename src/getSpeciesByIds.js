const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const speciesByIds = [];
  ids.forEach((id) => speciesByIds.push(species.find((specie) => specie.id === id)));
  return speciesByIds;
};
module.exports = getSpeciesByIds;
