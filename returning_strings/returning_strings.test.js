//import the function that you want to test
const greet = require("./returning_strings.js");

//set up the test function which takes a description and a callback
test("the function returns a greeting statement using the name", () => {
  //store the output of the greet function as a variable
  const result = greet("Ryan");
  //write the assertion begining with 'expect' followed by the matcher and exactly what you expect to see in the ();
  expect(result).toBe("Hello, Ryan how are you doing today?");
});
