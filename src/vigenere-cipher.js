const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true){
    this.direct= direct
    
  }
  encrypt(message, key) {
    if(message==undefined || key==undefined) throw new Error('Incorrect arguments!');

    let alphabet='abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    let resultArray=[]
    message=message.toUpperCase().split('');

    while(key.length < message.length){
      key+=key
    }

    key=key.toUpperCase().split('')

    let j=0
    message.forEach((symbol,index)=>{
      if(alphabet.indexOf(symbol)!==-1){
        let k = (alphabet.indexOf(symbol) + alphabet.indexOf(key[j])) % 26
        j++

        resultArray.push(alphabet[k])
      }else{
        resultArray.push(symbol)
      }
    })

    if(this.direct) return resultArray.join('')
    return resultArray.reverse().join('')
  }
  decrypt(message, key) {
    if(message==undefined || key==undefined) throw new Error('Incorrect arguments!');
    
    let alphabet='abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    let resultArray=[]
    message=message.toUpperCase().split('');

    while(key.length < message.length){
      key+=key
    }

    key=key.toUpperCase().split('')

    let j=0
    message.forEach((symbol,index)=>{
      if(alphabet.indexOf(symbol)!==-1){
        let k = (alphabet.indexOf(symbol) - alphabet.indexOf(key[j])) % 26
        if(k<0) k+=26
        j++

        resultArray.push(alphabet[k])
      }else{
        resultArray.push(symbol)
      }
    })

    if(this.direct) return resultArray.join('')
    return resultArray.reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};

const directMachine = new VigenereCipheringMachine();

const reverseMachine = new VigenereCipheringMachine(false);

console.log(directMachine.encrypt('attack at dawn!', 'alphonse')) 

console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')) 

console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'))

console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))