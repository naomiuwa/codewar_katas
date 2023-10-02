//Import the function that you are testing from the file.
const removeExclamationMark = require ("./remove_exclamation_mark");

//Set up the test function which takes in the description and a callback function

test("the function removes the exclamation mark at the end of a string", function() {

    // Store the output of the function in a variable
    const result = removeExclamationMark("Hi!")

    //write the assertion beginning with 'expect'. Add exactly what you expect to see in () after the matcher
    expect(result).toBe("Hi");
});

test("the function returns a string when there isn't an exclamatio at the end of it", function () {
    const result = removeExclamationMark("!Hi");

    expect(result).toBe("!Hi");
});