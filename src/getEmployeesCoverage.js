const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const getSpecies = (argumento) => {
  const animalList = argumento.map((element) => species
    .find((element2) => element2.id === element));
  const specieName = animalList.map((element) => element.name);
  const specieLocation = animalList.map((element) => element.location);
  const specieFormatation = [specieName, specieLocation];
  return specieFormatation;
};

const allThePeaple = (argumento) => {
  const allEmployees = employees.map((element) => ({
    id: element.id,
    fullName: `${element.firstName} ${element.lastName}`,
    species: getSpecies(element.responsibleFor)[0],
    locations: getSpecies(element.responsibleFor)[1],
  }));
  return allEmployees;
};

const formatation = (element) => {
  const fullName = `${element.firstName} ${element.lastName}`;
  const animalInfo = getSpecies(element.responsibleFor);
  const formatationObj = {
    id: element.id,
    fullName,
    species: animalInfo[0],
    locations: animalInfo[1],
  };
  return formatationObj;
};

const collaborator = (argumento) => {
  const collaboratorName = employees.find((employee) => employee
    .firstName === argumento.name || employee
    .lastName === argumento.name || employee
    .id === argumento.id);
  if (collaboratorName === undefined) {
    throw new Error('Informações inválidas');
  }
  return formatation(collaboratorName);
};

function getEmployeesCoverage(argumento) {
  if (!argumento) {
    return allThePeaple();
  }
  if (argumento.name || argumento.id) {
    return collaborator(argumento);
  }
}

module.exports = getEmployeesCoverage;
