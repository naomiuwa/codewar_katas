//import the function you want to test from the file
const betterThanAverage = require("./better_than_average.js");

//set up the test function with the description and the call back
test("the function should return true if the average is greater than the classes point", () => {
 
    //define the values of the classPoints and yourPoints variables in the test function because they are declared outside the original function so the test won't know about them
const  classPoints = [2, 3];
const yourPoints = 5;

  
    //store the output of the betterThanAverage function in a variable
  const averageResult = betterThanAverage(classPoints, yourPoints);

  //make the assertion starting with 'expect' followed by the matcher with the exactly what you expect to see in the ()

  expect(averageResult).toBe(true);
});
