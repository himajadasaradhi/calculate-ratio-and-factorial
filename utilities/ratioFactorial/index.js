const factorial = require("../factorial/index");
const ratio = require("../ratio/index");

const ratioAndFactorial = (a, b, c) => {
  return {
    ratio: ratio(a, b),
    factorial: factorial(c),
  };
};
//console.log(ratioAndFactorial(6, 3, 5));
module.exports = ratioAndFactorial;
