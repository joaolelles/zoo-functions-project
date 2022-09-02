const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  return { child: child.length, adult: adult.length, senior: senior.length };
  // console.log({ child: child.length, adult: adult.length, senior: senior.length });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const callFun = countEntrants(entrants);
  const { child, adult, senior } = callFun;
  const { prices } = data;
  return (child * prices.child + adult * prices.adult + senior * prices.senior);
}

module.exports = { calculateEntry, countEntrants };
