const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //console.log(date)
  
  
  if(date===undefined) return 'Unable to determine the time of year!'
  if(typeof date.getMonth!== 'function'||date.toString() === "Date"|| Object.getOwnPropertyNames(date).length!==Object.getOwnPropertyNames(new Date(1415, 9, 25, 19, 34, 45, 741)).length ||Object.prototype.toString.call(date) !== "[object Date]"|| isNaN(date)) throw new Error('Invalid date!');
 
  let month= date.getMonth()

  switch(month){
    case 0:
    case 1:
    case 11:
      return 'winter'
      break; 
    case 3:
    case 4:
    case 2:
      return 'spring'
      break; 
    case 6:
    case 7:
    case 5:
      return 'summer'
    break; 
    case 9:
    case 10:
    case 8:
      return 'autumn'
      break; 
  }
}

module.exports = {
  getSeason
};

console.log(getSeason(new Date(1582, 5, 24, 3, 30, 22, 496)))