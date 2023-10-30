//import the function you want to test from the file
const neutralise = require("./neutralisation.js");

//set up the test function which takes in a description and call back
test("function compares the two strings and returns a new string which is neutral", () => {
  //define the values of the s1 & s2 variables in the test function because they are declared outside the original function so the test won't know about them.
  const s1 = "--++--";
  const s2 = "++--++";

  //store the output of the neutralise function in a variable
  const result = neutralise(s1, s2);

  //write the assertion starting with 'expect' followed by the matcher & exactly what you expect to see after the ()
  expect(result).toBe("000000");
});
