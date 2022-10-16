const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  let resultArray=[]
  str.split('').forEach((sumbol,index)=>{
    if(sumbol==str[index-1]&& index!=0) {
      resultArray[resultArray.length-2]+=1
      if(resultArray[resultArray.length-2]==1) resultArray[resultArray.length-2]+=1
    }
    else{
      resultArray.push(1)
      resultArray.push(sumbol)
    }
  })

  return resultArray.join('').split('1').join('')
}

module.exports = {
  encodeLine
};

console.log(encodeLine('abbcca'))