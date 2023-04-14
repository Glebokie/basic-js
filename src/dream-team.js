const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
  let newArr = [];
  let index = 0;
  if(Array.isArray(array) !== true) {
    return false
  }
  for(let i=0;i<array.length;i++){
    if(typeof array[i] === 'string'){
      while(array[i][index] === ' '){
        index++
      } 
     newArr.push(array[i][index].toUpperCase())   
    
  } 
  index = 0;
  }
    return newArr.sort().join('')
  }

module.exports = {
  createDreamTeam
};
