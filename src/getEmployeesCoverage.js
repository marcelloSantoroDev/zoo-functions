const data = require('../data/zoo_data');

const { employees } = data;

// const employeeObj = {
//   id: '',
//   fullName: '',
//   species: '',
//   locations: '',
// };
// employees.forEach((element) => {
//   if (employee === element.id) {
//     employeeObj.id = element.id;
//     employeeObj.fullName = `${element.firstName} ${element.lastName}`;
//     employeeObj.species = element.responsibleFor;
//   }
// return employeeObj;

// function getAnimalsArray(employee){        //PEGAR O NOME DO ANIMAL A PARTIR DE SEU ID (ARMAZENAR EM CONSTANTES)
// return employees.reduce((acc, curr) => {
//   if(curr.id === employee){
//     acc
//   }
// },[])
// }

function organizeObj(employee) {
  return employees.reduce((acc, curr) => {
    if (curr.id === employee) {
      acc.id = curr.id;
      acc.fullName = `${curr.firstName} ${curr.lastName}`;
      acc.species = curr.responsibleFor;
    }
    return acc;
  }, {
    id: '',
    fullName: '',
    species: '',
    locations: '',
  });
}

console.log(organizeObj('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function getEmployeesCoverage(obj) {
  // const getSomeName = employees.some((element) => element.firstName === Object.values(obj)[0]);
  // const getSomeLastName = employees.some((element) => element.lastName === Object.values(obj)[0]);
  // const findEmployeeByFirst = employees
  //   .find((element) => element.firstName === Object.values(obj)[0]);
  // const findEmployeeByLast = employees
  //   .find((element) => element.lastName === Object.values(obj)[0]);
  // if (obj === undefined) {
  //   return employees;
  // } if (getSomeName) {
  //   return findEmployeeByFirst;
  // } if (getSomeLastName) {
  //   return findEmployeeByLast;
  // }
}

// console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
