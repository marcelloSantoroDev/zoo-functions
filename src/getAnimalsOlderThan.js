const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const getAnimal = species.find((element) => element.name === animal).residents;
  return getAnimal.every((element) => element.age > age);
}

module.exports = getAnimalsOlderThan;
