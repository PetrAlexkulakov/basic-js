const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options = {separator: '+', additionSeparator: '|'} ) {
  if(str==null) str='null'
  if('addition' in options && options.addition==null) options.addition='null'
  if (typeof str !== 'object') str= str.toString()
  if ('addition' in options && typeof options.addition !== 'object') options.addition=options.addition.toString()
  let ourResult=[str]
  if('addition' in options && 'additionRepeatTimes' in options==false) options.additionRepeatTimes=1;
  if('separator' in options==false) options.separator='+';
  if('additionSeparator' in options==false) options.additionSeparator='|';

  if('additionRepeatTimes' in options){
    for(let i=0;i<options.additionRepeatTimes;i++){
      if(i==0) ourResult[0]+=options.addition
      if(i>0) ourResult[0]=[ourResult[0],options.addition].join(`${options.additionSeparator}`)
    }
  }
  
  if('repeatTimes' in options){
    for(let i=0; i<options.repeatTimes-1;i++){
      ourResult.push(options.separator)
      ourResult.push(ourResult[0])
    }
  }
  return ourResult.join('')
}

module.exports = {
  repeater
};

console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }))