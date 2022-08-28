const data = require('../data/zoo_data');

const { species } = data;
// const { employees } = data;

function getScheduleArray(animal) {
  const animalSchedule = species
    .find((element) => element.name === animal).availability;
  return animalSchedule;
}

function getSchedule(scheduleTarget) {
  let animalArray = 0;
  species.forEach((element) => {
    if (scheduleTarget === element.name) {
      animalArray = getScheduleArray(scheduleTarget);
    }
  });
  return animalArray;
}

module.exports = getSchedule;
