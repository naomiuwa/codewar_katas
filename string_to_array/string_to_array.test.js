//import the function you want to test from the file
const stringToArray = require("./string_to_array.js");

//set up the test functions which takes a description and callback
test("the function should split the string and convert it into an array of words", () => {
  //store the output of the greet function in a variable
  const statement = stringToArray("Robin Singh");

  //write the assertion beginning with 'expect' followed by the matcher and exactly what you expect to see after the ()
  expect(statement).toStrictEqual(["Robin", "Singh"]);
});
