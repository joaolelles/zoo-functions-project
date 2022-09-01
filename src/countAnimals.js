const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const handleUnder = () => {
  const animals = {};
  species.forEach((specie) => {
    animals[specie.name] = specie.residents.length;
  });
  return animals;
};

function countAnimals(animal) {
  if (!animal) {
    return handleUnder();
  }
  if (!animal.sex) {
    const animalBuscado = species.find((obj) => obj.name === animal.specie);
    return animalBuscado.residents.length;
  }
  const animalSpecie = species.find((obj) => obj.name === animal.specie);
  const animalSex = animalSpecie.residents.filter((obj) => obj.sex === animal.sex);
  return animalSex.length;
}
countAnimals({ specie: 'elephants', sex: 'male' });

module.exports = countAnimals;
