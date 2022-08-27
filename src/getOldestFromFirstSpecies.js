const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

function getOldestFromFirstSpecies(id) {
  const firstAnimal = employees.find((element) => element.id === id).responsibleFor[0];
  const getAnimalObj = species.find((element) => element.id === firstAnimal).residents;
  let getOldest = 0;
  let count = 0;
  getAnimalObj.forEach((element) => {
    if (element.age > count) {
      count = element.age;
      getOldest = element;
    }
  });
  const makeArray = [];
  makeArray.push(getOldest.name);
  makeArray.push(getOldest.sex);
  makeArray.push(getOldest.age);
  return makeArray;
}

module.exports = getOldestFromFirstSpecies;
