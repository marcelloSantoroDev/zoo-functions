const data = require('../data/zoo_data');

const { prices } = data;

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

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entrantsArray = countEntrants(entrants);
  let total = 0;
  total += entrantsArray.child * prices.child;
  total += entrantsArray.adult * prices.adult;
  total += entrantsArray.senior * prices.senior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
