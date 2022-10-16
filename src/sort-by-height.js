const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  let minusOne={'-1':[]}
  let sortedArray=[]

  for(let index=0; index<arr.length;index++){
    if(arr[index]==-1)minusOne['-1'].push(index)
  }
  arr=arr.filter(number=>number!=-1)
  sortedArray = arr.sort(function(a,b){
    return a-b
  })

  for(let i of minusOne['-1']){
    sortedArray.splice(i,0,-1)
  }

  return sortedArray
}

module.exports = {
  sortByHeight
};

console.log(sortByHeight([4, 2, 9, 11, 2, 16]))