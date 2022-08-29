// function ifSexMaleSorted() {
//   const locationObj = { NE: [], NW: [], SE: [], SW: [] };
//   species.forEach((element) => {
//     if (element.location === 'NE') {
//       locationObj.NE.push({ [element.name]: element.residents
//         .filter((arg) => arg.sex === 'male').map((el) => el.name).sort() });
//     } if (element.location === 'NW') {
//       locationObj.NW.push({ [element.name]: element.residents
//         .filter((arg) => arg.sex === 'male').map((el) => el.name).sort() });
//     } if (element.location === 'SE') {
//       locationObj.SE.push({ [element.name]: element.residents
//         .filter((arg) => arg.sex === 'male').map((el) => el.name).sort() });
//     } if (element.location === 'SW') {
//       locationObj.SW.push({ [element.name]: element.residents
//         .filter((arg) => arg.sex === 'male').map((el) => el.name).sort() });
//     }
//   });
//   return locationObj;
// }

// function ifSexMale() {
//   const locationObj = { NE: [], NW: [], SE: [], SW: [] };
//   species.forEach((element) => {
//     if (element.location === 'NE') {
//       locationObj.NE.push({ [element.name]: element.residents
//         .filter((arg) => arg.sex === 'male').map((el) => el.name) });
//     } if (element.location === 'NW') {
//       locationObj.NW.push({ [element.name]: element.residents
//         .filter((arg) => arg.sex === 'male').map((el) => el.name) });
//     } if (element.location === 'SE') {
//       locationObj.SE.push({ [element.name]: element.residents
//         .filter((arg) => arg.sex === 'male').map((el) => el.name) });
//     } if (element.location === 'SW') {
//       locationObj.SW.push({ [element.name]: element.residents
//         .filter((arg) => arg.sex === 'male').map((el) => el.name) });
//     }
//   });
//   return locationObj;
// }

// console.log(ifSexMale());

// function sixthConditions(options) {
//   const sexmaleSorted = Object.keys(options)
//     .includes('includeNames') && Object.values(options)
//     .includes('male') && Object.keys(options).includes('sorted');
//   return sexmaleSorted;
// }
// function forthConditions(options) {
//   const sexMale = Object.keys(options)
//     .includes('includeNames') && Object.values(options).includes('male');
//   return sexMale;
// }

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

function conditions(options) {
  const a = Object.keys(options).includes('includeNames');
  return a;
}

function firstConditions(options) {
  const ifError = !Object.keys(options)
    .includes('includeNames') && Object.keys(options).includes('sex');
  const ifErrorSorted = !Object.keys(options)
    .includes('includeNames') && Object.keys(options)
    .includes('sex') && Object.keys(options).includes('sorted');
  return ifError || ifErrorSorted;
}

function getUndefined(options) {
  return options === undefined || firstConditions(options);
}

function secondConditions(options) {
  const nameSorted = Object.keys(options)
    .includes('includeNames') && Object.keys(options)
    .includes('sorted') && Object.values(options).includes(true);
  return nameSorted;
}

function thirdConditions(options) {
  const sexFemale = Object.keys(options)
    .includes('includeNames') && Object.values(options).includes('female');
  return sexFemale;
}

function fifthConditions(options) {
  const sexFemaleSorted = Object.keys(options)
    .includes('includeNames') && Object.values(options)
    .includes('female') && Object.keys(options).includes('sorted');
  return sexFemaleSorted;
}

// function getAnimalMap(options) {
//   if (getUndefined(options)) return ifIsUndefined();
//   if (fifthConditions(options)) return ifSexFemaleSorted();
//   if (thirdConditions(options)) return ifSexFemale();
//   if (secondConditions(options)) return ifSortedIsTrue();
//   if (conditions(options)) return ifIncludesNames();
// }

module.exports = getAnimalMap;
