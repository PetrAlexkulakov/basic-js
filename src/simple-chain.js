const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain:[],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    
    this.chain.push(`( ${value} )`)
    return chainMaker;
  },
  removeLink( pos ) {
    let position=+pos
    if (!Number.isInteger(position)||position<=0||position>this.chain.length) {
      this.chain=[]
      throw new Error('You can\'t remove incorrect link!')
    }
    this.chain.splice(position-1,1);
    return chainMaker;
  },
  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    let finishValue= [...this.chain].join('~~')

    this.chain=[]

    return finishValue;
  }
};

module.exports = {
  chainMaker
};
