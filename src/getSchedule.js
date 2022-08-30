const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

function getScheduleArray(animal) {
  const animalSchedule = species
    .find((element) => element.name === animal).availability;
  return animalSchedule;
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
  const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const returnedObj = getObjToReturn();
  const getSomeDay = daysArray.some((element) => scheduleTarget === element);
  if (getSomeDay) {
    return { [scheduleTarget]: returnedObj[scheduleTarget] };
  }
  if (scheduleTarget === undefined) {
    return returnedObj;
  } if (!species.some((element) => scheduleTarget === element.name)) {
    return returnedObj;
  }
  let animalArray = 0;
  species.forEach((element) => {
    if (scheduleTarget === element.name) {
      animalArray = getScheduleArray(scheduleTarget);
    }
  });
  return animalArray;
}

module.exports = getSchedule;
