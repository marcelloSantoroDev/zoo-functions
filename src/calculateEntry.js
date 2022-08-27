const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const obj = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) {
      obj.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      obj.adult += 1;
    } else if (element.age >= 50) {
      obj.senior += 1;
    }
  });
  return obj;
}

// console.log(countEntrants([
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ]));

function calculateEntry(entrants) {
  // seu código aqui;
  if (entrants === undefined) {
    return 0;
  }
}

module.exports = { calculateEntry, countEntrants };
