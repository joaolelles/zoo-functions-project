const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const animals = {};
    const getAnimals = species.forEach((specie) => animals.push(specie.residents.names));
    console.log(getAnimals);
  }
}

module.exports = countAnimals;
