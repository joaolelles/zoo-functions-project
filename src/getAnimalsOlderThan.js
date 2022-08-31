const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// .every( (specie) => specie.residents.age === age);
// const info = data;
// console.log(info);

const getAnimalsOlderThan = (animal, age) => {
  const testName = species.find((especie) => especie.name === animal);
  const { residents } = testName;
  // console.log(residents);
  return residents.every((bicho) => bicho.age >= age);
};

// console.log(getAnimalsOlderThan());

module.exports = getAnimalsOlderThan;
