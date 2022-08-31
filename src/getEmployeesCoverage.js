const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const employeeObj = {
  id: '',
  fullName: '',
  species: '',
  locations: '',
};

function organizeObjById(employee) {
  return employees.reduce((acc, curr) => {
    if (curr.id === employee.id) {
      acc.id = curr.id;
      acc.fullName = `${curr.firstName} ${curr.lastName}`;
      acc.species = species.filter((element) => curr.responsibleFor
        .find((arg) => element.id === arg))
        .map((obj) => obj.name);
      acc.locations = species.filter((element) => curr.responsibleFor
        .find((arg) => element.id === arg))
        .map((obj) => obj.location);
    }
    return acc;
  }, employeeObj);
}

function organizeObjByName(employee) {
  return employees.reduce((acc, curr) => {
    if (curr.firstName === employee.name || curr.lastName === employee.name) {
      acc.id = curr.id;
      acc.fullName = `${curr.firstName} ${curr.lastName}`;
      acc.species = species.filter((element) => curr.responsibleFor
        .find((arg) => element.id === arg))
        .map((obj) => obj.name);
      acc.locations = species.filter((element) => curr.responsibleFor
        .find((arg) => element.id === arg))
        .map((obj) => obj.location);
    }
    return acc;
  }, employeeObj);
}

function organizeObjForAll() {
  const array = [];
  employees.forEach((param) => {
    const object = { id: '',
      fullName: '',
      species: '',
      locations: '',
    };
    object.id = param.id;
    object.fullName = `${param.firstName} ${param.lastName}`;
    object.species = species.filter((element) => param.responsibleFor
      .find((arg) => element.id === arg))
      .map((obj) => obj.name);
    object.locations = species.filter((element) => param.responsibleFor
      .find((arg) => element.id === arg))
      .map((obj) => obj.location);
    array.push(object);
  });
  return array;
}

const conditions = (obj) => {
  const getSomeName = employees.some((element) => element.firstName === Object
    .values(obj)[0] || element.lastName === Object
    .values(obj)[0]);
  const getSomeId = employees.some((element) => element.id === Object.values(obj)[0]);
  if (getSomeName) return organizeObjByName(obj);
  if (getSomeId) return organizeObjById(obj);
  if (!getSomeId) throw new Error('Informações inválidas');
};

function getEmployeesCoverage(obj) {
  if (!obj) {
    return organizeObjForAll();
  }
  return conditions(obj);
}

module.exports = getEmployeesCoverage;
