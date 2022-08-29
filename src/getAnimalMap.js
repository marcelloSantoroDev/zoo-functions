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
// console.log(ifIsUndefined());

function ifIncludesNames() {
  const locationObj = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((element) => {
    if (element.location === 'NE') {
      locationObj.NE.push({ [element.name]: element.residents.map((arg) => arg.name) });
    } if (element.location === 'NW') {
      locationObj.NW.push({ [element.name]: element.residents.map((arg) => arg.name) });
    } if (element.location === 'SE') {
      locationObj.SE.push({ [element.name]: element.residents.map((arg) => arg.name) });
    } if (element.location === 'SW') {
      locationObj.SW.push({ [element.name]: element.residents.map((arg) => arg.name) });
    }
  });
  return locationObj;
}

// console.log(ifIncludesNames());

function ifSortedIsTrue() {
  const locationObj = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((element) => {
    if (element.location === 'NE') {
      locationObj.NE.push({ [element.name]: element.residents.map((arg) => arg.name).sort() });
    } if (element.location === 'NW') {
      locationObj.NW.push({ [element.name]: element.residents.map((arg) => arg.name).sort() });
    } if (element.location === 'SE') {
      locationObj.SE.push({ [element.name]: element.residents.map((arg) => arg.name).sort() });
    } if (element.location === 'SW') {
      locationObj.SW.push({ [element.name]: element.residents.map((arg) => arg.name).sort() });
    }
  });
  return locationObj;
}

// console.log(ifSortedIsTrue());

function ifSexMale() {
  const locationObj = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((element) => {
    if (element.location === 'NE') {
      locationObj.NE.push({ [element.name]: element.residents
        .filter((arg) => arg.sex === 'male').map((el) => el.name) });
    } if (element.location === 'NW') {
      locationObj.NW.push({ [element.name]: element.residents
        .filter((arg) => arg.sex === 'male').map((el) => el.name) });
    } if (element.location === 'SE') {
      locationObj.SE.push({ [element.name]: element.residents
        .filter((arg) => arg.sex === 'male').map((el) => el.name) });
    } if (element.location === 'SW') {
      locationObj.SW.push({ [element.name]: element.residents
        .filter((arg) => arg.sex === 'male').map((el) => el.name) });
    }
  });
  return locationObj;
}

// console.log(ifSexMale());

function ifSexFemale() {
  const locationObj = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((element) => {
    if (element.location === 'NE') {
      locationObj.NE.push({ [element.name]: element.residents
        .filter((arg) => arg.sex === 'female').map((el) => el.name) });
    } if (element.location === 'NW') {
      locationObj.NW.push({ [element.name]: element.residents
        .filter((arg) => arg.sex === 'female').map((el) => el.name) });
    } if (element.location === 'SE') {
      locationObj.SE.push({ [element.name]: element.residents
        .filter((arg) => arg.sex === 'female').map((el) => el.name) });
    } if (element.location === 'SW') {
      locationObj.SW.push({ [element.name]: element.residents
        .filter((arg) => arg.sex === 'female').map((el) => el.name) });
    }
  });
  return locationObj;
}

function ifSexMaleSorted() {
  const locationObj = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((element) => {
    if (element.location === 'NE') {
      locationObj.NE.push({ [element.name]: element.residents
        .filter((arg) => arg.sex === 'male').map((el) => el.name).sort() });
    } if (element.location === 'NW') {
      locationObj.NW.push({ [element.name]: element.residents
        .filter((arg) => arg.sex === 'male').map((el) => el.name).sort() });
    } if (element.location === 'SE') {
      locationObj.SE.push({ [element.name]: element.residents
        .filter((arg) => arg.sex === 'male').map((el) => el.name).sort() });
    } if (element.location === 'SW') {
      locationObj.SW.push({ [element.name]: element.residents
        .filter((arg) => arg.sex === 'male').map((el) => el.name).sort() });
    }
  });
  return locationObj;
}

function ifSexFemaleSorted() {
  const locationObj = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((element) => {
    if (element.location === 'NE') {
      locationObj.NE.push({ [element.name]: element.residents
        .filter((arg) => arg.sex === 'female').map((el) => el.name).sort() });
    } if (element.location === 'NW') {
      locationObj.NW.push({ [element.name]: element.residents
        .filter((arg) => arg.sex === 'female').map((el) => el.name).sort() });
    } if (element.location === 'SE') {
      locationObj.SE.push({ [element.name]: element.residents
        .filter((arg) => arg.sex === 'female').map((el) => el.name).sort() });
    } if (element.location === 'SW') {
      locationObj.SW.push({ [element.name]: element.residents
        .filter((arg) => arg.sex === 'female').map((el) => el.name).sort() });
    }
  });
  return locationObj;
}

function firstConditions(options) {
  const ifError = !Object.keys(options)
    .includes('includeNames') && Object.keys(options).includes('sex');
  const ifErrorSorted = !Object.keys(options)
    .includes('includeNames') && Object.keys(options)
    .includes('sex') && Object.keys(options).includes('sorted');
  return ifError || ifErrorSorted;
}

function firstConditionAndUndefined(options) {
  const condition = options === undefined;
  return condition || firstConditions(options);
}

function secondConditions(options) {
  const nameSorted = Object.keys(options)
    .includes('includeNames') && Object.keys(options).includes('sorted');
  return nameSorted;
}

function thirdConditions(options) {
  const sexFemale = Object.keys(options)
    .includes('includeNames') && Object.values(options).includes('female');
  return sexFemale;
}

function forthConditions(options) {
  const sexMale = Object.keys(options)
    .includes('includeNames') && Object.values(options).includes('male');
  return sexMale;
}

function getAnimalMap(options) {
  if (firstConditionAndUndefined(options)) return ifIsUndefined();
  if (secondConditions(options)) return ifSortedIsTrue();
  if (thirdConditions(options)) return ifSexFemale();
  if (forthConditions(options)) return ifSexMale();
}
console.log(getAnimalMap());

module.exports = getAnimalMap;
