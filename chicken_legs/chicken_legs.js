/* Write a function that accepts a number of chickens and returns the number of legs the chicken have. 

For example: if someone enters 4 chickens each chicken has 2 legs so you return 8 */

let chickens = 4;

function countTheChickensLegs(chickens) {
  //console.log(chickens);
  let numberOfLegs = chickens * 2;
  return numberOfLegs;
}

//in order to execute a function you need to call it
countTheChickensLegs(chickens);

//PLAN
//multiply the number of chickens by 2
//return the number of legs the chickens have

module.exports = countTheChickensLegs; 