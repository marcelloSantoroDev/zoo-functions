const data = require('../data/zoo_data');

const { species } = data;

const getObj = () => {
  const obj = {};
  species.forEach((element) => {
    obj[element.name] = element.residents.length;
  });
  return obj;
};

function countAnimals(animal) {
  if (animal === undefined) {
    return getObj();
  }
  const getSpecie = species.find((element) => element.name === animal.specie).residents;
  const getMaleSex = getSpecie.filter((element) => element.sex === 'male');
  const getFemaleSex = getSpecie.filter((element) => element.sex === 'female');
  if (Object.keys(animal).length === 1) {
    return getSpecie.length;
  } if (animal.sex === 'male') {
    return getMaleSex.length;
  } if (animal.sex === 'female') {
    return getFemaleSex.length;
  }
}

module.exports = countAnimals;
