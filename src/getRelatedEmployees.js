const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees
    .some((element) => element.managers
      .find((arg) => arg === id));
}

function getRelatedEmployees(managerId) {
  const checkManager = isManager(managerId);
  if (checkManager) {
    return employees
      .filter((element) => element.managers.find((arg) => arg === managerId))
      .map((element) => `${element.firstName} ${element.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
