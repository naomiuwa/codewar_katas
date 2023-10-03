//import the function that you want to test
const countTheChickensLegs = require("./chicken_legs.js");

//set up the test function with the description and call back
test("The function should return the number of legs the chicken have", () => {
  //store the output of the countTheChickenLegs function in a variable
  const totalNumberOfLegs = countTheChickensLegs(1);

  //write the assertion beginning with 'expect' followed by the matcher and exactly what you expect to see in the ()
  expect(totalNumberOfLegs).toEqual(2);
});

