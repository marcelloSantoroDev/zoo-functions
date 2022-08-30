const data = require('../data/zoo_data');

const { species } = data;

function ifIsUndefined() {
  const locationObj = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((element) => {
    if (element.location === 'NE') {
      locationObj.NE.push(element.name);
    } if (element.location === 'NW') {
      locationObj.NW.push(element.name);
    } if (element.location === 'SE') {
      locationObj.SE.push(element.name);
    } if (element.location === 'SW') {
      locationObj.SW.push(element.name);
    }
  });
  return locationObj;
}

function ifIncludesNames(options) {
  return species.reduce((acc, curr) => {
    if (!acc[curr.location]) {
      acc[curr.location] = [];
    }
    if (!options.sorted) {
      acc[curr.location].push({ [curr.name]: curr.residents.map((arg) => arg.name) });
    }
    if (options.sorted) {
      acc[curr.location].push({ [curr.name]: curr.residents.map((arg) => arg.name).sort() });
    }
    return acc;
  }, {});
}

function getSex(options) {
  return species.reduce((acc, curr) => {
    if (!acc[curr.location]) {
      acc[curr.location] = [];
    }
    if (options.sex && !options.sorted) {
      acc[curr.location]
        .push({ [curr.name]: curr.residents
          .filter((arg) => arg.sex === options.sex)
          .map((el) => el.name) });
    }
    if (options.sorted) {
      acc[curr.location]
        .push({ [curr.name]: curr.residents
          .filter((arg) => arg.sex === options.sex)
          .map((el) => el.name).sort() });
    }
    return acc;
  }, {});
}

// console.log(getSex({ sex: 'female', sorted: true }).NE);

function conditions1(options) {
  const getOptions = options === undefined || !options.includeNames;
  return getOptions;
}

function getAnimalMap(options) {
  if (conditions1(options)) return ifIsUndefined();
  if (options.sex) return getSex(options);
  if (options.includeNames) return ifIncludesNames(options);
}

module.exports = getAnimalMap;
