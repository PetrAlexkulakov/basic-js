const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity = 'string') {
  let number= +sampleActivity
  

  if(isNaN(number)||typeof sampleActivity!=='string') return false
  if(number>15 || number<=0) return false

  

  let k=0.693/5730
  return Math.ceil(Math.log(15/number)/k)
}

module.exports = {
  dateSample
};

console.log(dateSample('15.1'))