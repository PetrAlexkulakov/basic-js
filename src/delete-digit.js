const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let anyResults=[];
  n=n.toString()

  for(let i=0; i<n.length; i++){
    let ourNumber=n
    anyResults.push(ourNumber.replace(`${n[i]}`,''))
  }

  return Math.max(...anyResults)
}

module.exports = {
  deleteDigit
};

console.log(deleteDigit(152))