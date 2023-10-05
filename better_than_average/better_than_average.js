let classPoints = [2, 3];
let yourPoints = 5;

function betterThanAverage(classPoints, yourPoints) {
  //console.log(classPoints, yourPoints)

  let averageScore = 0;

  //classPoints.push(yourPoints);
  //console.log(classPoints);

  for (let i = 0; i < classPoints.length; i++) {
    averageScore += classPoints[i];
  }
  averageScore /= classPoints.length;
  //console.log(averageScore)
  if (yourPoints > averageScore) {
    return true;
  } else {
    return false;
  }
}

betterThanAverage(classPoints, yourPoints);

module.exports = betterThanAverage; 
