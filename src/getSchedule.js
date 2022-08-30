const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;
const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = hours;

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
  const scheduleObj = {
    Tuesday: { officeHour: `Open from ${Tuesday.open}am until ${Tuesday.close}pm`,
      exhibition: getAvailability('Tuesday') },
    Wednesday: { officeHour: `Open from ${Wednesday.open}am until ${Wednesday.close}pm`,
      exhibition: getAvailability('Wednesday') },
    Thursday: { officeHour: `Open from ${Thursday.open}am until ${Thursday.close}pm`,
      exhibition: getAvailability('Thursday'),
    },
    Friday: { officeHour: `Open from ${Friday.open}am until ${Friday.close}pm`,
      exhibition: getAvailability('Friday') },
    Saturday: { officeHour: `Open from ${Saturday.open}am until ${Saturday.close}pm`,
      exhibition: getAvailability('Saturday') },
    Sunday: { officeHour: `Open from ${Sunday.open}am until ${Sunday.close}pm`,
      exhibition: getAvailability('Sunday') },
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
  return scheduleObj;
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

console.log(getSchedule('Sunday'));

module.exports = getSchedule;
