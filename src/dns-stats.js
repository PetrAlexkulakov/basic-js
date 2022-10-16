const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let appearances={}

  domains.forEach((domain)=>{
    domain=domain.split('.').reverse()
    let nowDomain=''
    for(let i=0;i<domain.length;i++){
      nowDomain+='.'+domain[i]
      if(appearances[nowDomain]!== undefined) appearances[nowDomain]+=1
      else appearances[nowDomain]=1
    }
  })

  return appearances
}

module.exports = {
  getDNSStats
};

console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']))