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
  return Object.values(getOldest);
}

module.exports = getOldestFromFirstSpecies;
