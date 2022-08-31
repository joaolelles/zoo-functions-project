const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => employees.some((employee) => employee
  .managers.some((manager) => manager === id));

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const peaples = employees.filter((employee) => employee
    .managers.some((manager) => manager === managerId));
  return peaples.map((peaple) => `${peaple.firstName} ${peaple.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
