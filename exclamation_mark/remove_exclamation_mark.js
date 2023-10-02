function removeExclamationMark(string) {
  //console.log(string)
  let splitString = string.split("");
  if (splitString[splitString.length - 1] === "!") {
    let removedElement = splitString.pop();
    // console.log(splitString);
    let joinedString = splitString.join("");
    //console.log(joinedString);
    return joinedString;
  } else {
    return string;
  }
}

module.exports = removeExclamationMark;
