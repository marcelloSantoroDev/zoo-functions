const data = require('../data/zoo_data');

const { species } = data;
// const { employees } = data;

function getScheduleArray(animal) {
  const animalSchedule = species
    .find((element) => element.name === animal).availability;
  return animalSchedule;
}

function getObjToReturn() {
  const scheduleObj = {
    Tuesday: { officeHour: 'Open from 8am until 6pm',
      exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'] },
    Wednesday: { officeHour: 'Open from 8am until 6pm',
      exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'] },
    Thursday: { officeHour: 'Open from 10am until 8pm',
      exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
    },
    Friday: { officeHour: 'Open from 10am until 8pm',
      exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'] },
    Saturday: { officeHour: 'Open from 8am until 10pm',
      exhibition: ['lions', 'tigers', 'bears', 'penguins',
        'otters', 'frogs', 'snakes', 'elephants'] },
    Sunday: { officeHour: 'Open from 8am until 8pm',
      exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'] },
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
  return scheduleObj;
}

// function getDay(day) {
//   const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//   const obj = getObjToReturn();
//   const getSomeDay = daysArray.some((element) => day === element);
//   if (getSomeDay) {
//     return obj[day];
//   }
// }

// console.log(getDay('Monday'));

// console.log(getObjToReturn());

const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
function getSchedule(scheduleTarget) {
  const returnedObj = getObjToReturn();
  const getSomeDay = daysArray.some((element) => scheduleTarget === element);
  if (getSomeDay) {
    return { [scheduleTarget]: returnedObj[scheduleTarget] };
  }
  if (scheduleTarget === undefined) {
    return getObjToReturn();
  } if (!species.some((element) => scheduleTarget === element.name)) {
    return getObjToReturn();
  }
  let animalArray = 0;
  species.forEach((element) => {
    if (scheduleTarget === element.name) {
      animalArray = getScheduleArray(scheduleTarget);
    }
  });
  return animalArray;
}

console.log(getSchedule('Wednesday'));

module.exports = getSchedule;
