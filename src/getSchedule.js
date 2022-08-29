const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;
// const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = hours;

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

function checkIsOpen(day) {
  if (day !== 'Monday') {
    return `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  }
  return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
}

function getObjToReturn() {
  const scheduleObj = {
    Tuesday: { officeHour: checkIsOpen('Tuesday'),
      exhibition: getAvailability('Tuesday') },
    Wednesday: { officeHour: checkIsOpen('Wednesday'),
      exhibition: getAvailability('Wednesday') },
    Thursday: { officeHour: checkIsOpen('Thursday'),
      exhibition: getAvailability('Thursday') },
    Friday: { officeHour: checkIsOpen('Friday'),
      exhibition: getAvailability('Friday') },
    Saturday: { officeHour: checkIsOpen('Saturday'),
      exhibition: getAvailability('Saturday') },
    Sunday: { officeHour: checkIsOpen('Sunday'),
      exhibition: getAvailability('Sunday') },
    Monday: checkIsOpen('Monday'),
  };
  return scheduleObj;
}

console.log(getObjToReturn());

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
