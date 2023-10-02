/*

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

PLAN:

- loop through the array 
- find the smallest number using Math.min() & spread (...) operator
NOTE:- the spread operator passes the array elements as arguments to Math.min(). This way, Math.min(...args) converts the array [78, 56, 232, 12, 8] into individual arguments 78, 56, 232, 12, 8 for the Math.min() function.
- return the smallest number 

*/

const args = [78, 56, 232, 12, 8];

function (args) {
  for (let i = 0; i < args.length; i++) {
    let smallestNumber = Math.min(...args);
    return smallestNumber;
  }
}


export default smallestIntegerFinder; 
