/* Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.

EXAMPLES:

("--++--", "++--++") ➞ "000000"

("-+-+-+", "-+-+-+") ➞ "-+-+-+"

("-++-", "-+-+") ➞ "-+00" */

const s1 = "--++--"; 
const s2 = "++--++"; 

function neutralise(s1, s2) {
  //console.log(s1, s2); 
  let newString = "";
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === "+" && s2[i] === "+") {
      newString += "+"; 
    } else if (s1[i] === "-" && s2[i] === "-") {
        newString += "-";
      } else if (s1[i] === "+" && s2[i] === "-" || s1[i] === "-" && s2[i] === "+") {
        newString += "0"
      }
    }
  return newString;
}



module.exports = neutralise;