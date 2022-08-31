const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

function getScheduleArray(animal) {
  let animalArray = 0;
  species.forEach((element) => {
    if (animal === element.name) {
      animalArray = species
        .find((arg) => arg.name === animal).availability;
    }
  });
  return animalArray;
}

function getAvailability(day) {
  return species.reduce((acc, curr) => {
    if (curr.availability.includes(day)) {
      acc.push(curr.name);
    }
    return acc;
  }, []);
}

function getObjToReturn() {
  const getHours = Object.keys(hours).reduce((acc, curr) => {
    acc[curr] = { officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
      exhibition: getAvailability(curr),
    };
    if (curr === 'Monday') {
      acc[curr] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }
    return acc;
  }, {});
  return getHours;
}

function getSchedule(scheduleTarget) {
  const conditions = scheduleTarget === undefined
  || !species.some((element) => scheduleTarget === element.name);
  const daysArray = Object.keys(getObjToReturn());
  if (daysArray.includes(scheduleTarget)) {
    return { [scheduleTarget]: getObjToReturn()[scheduleTarget] };
  }
  if (conditions) {
    return getObjToReturn();
  }
  return getScheduleArray(scheduleTarget);
}

module.exports = getSchedule;
