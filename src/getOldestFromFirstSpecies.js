const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const collaborator = employees.find((employee) => employee.id === id);
  const firstAnimal = collaborator.responsibleFor[0];
  const objSpecie = species.find((specie) => specie.id === firstAnimal);
  const specieResidents = objSpecie.residents;
  const olderAnimal = specieResidents.reduce((acc, resident) => {
    if (acc.age > resident.age) {
      return acc;
    }
    return resident;
  });
  const { name, sex, age } = olderAnimal;
  const arrOlder = [name, sex, age];
  return arrOlder;
}
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

module.exports = getOldestFromFirstSpecies;
