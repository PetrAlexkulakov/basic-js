const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")

  let resultArray=[]
  let _wasDiscardenNext=false
  let _wasDoubleNext=false
  for(let i=0; i<arr.length;i++){
    switch(arr[i]){
      case '--discard-next':
        i++
        _wasDiscardenNext=true
      break;
      case '--discard-prev':
        if(_wasDoubleNext && !_wasDiscardenNext) resultArray.pop()
        if(!_wasDiscardenNext) resultArray.pop()
      break;
      case '--double-next':
        if(i!=arr.length-1) {
          resultArray.push(arr[i+1])
          _wasDoubleNext=true
        }
      break;
      case '--double-prev':
        if(i!=0&& !_wasDiscardenNext) resultArray.push(arr[i-1])
      break;
      default:
        _wasDiscardenNext=false
        _wasDoubleNext=false
        resultArray.push(arr[i]);
    }
    
  }
  return resultArray
}

module.exports = {
  transform
};
let arr=[1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]
console.log(transform(arr))
console.log(arr)