const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arg) {
  let count = 0;
  for(let i = 0; i < arg.length; i++){
     for(let j = 0; j < arg[i].length; j++){
       if(arg[i][j] == '^^'){
         count++
       }
     }
  }
  return count
}

module.exports = {
  countCats
};
