import input from "./input.mjs";

/**
 * * Part two
 */

const newInput = input.split("\n").map((input) => {
  return input.split("   ");
});

let leftSide = [];
newInput.forEach((duo) => {
  leftSide.push(duo[0]);
});

let rightSide = [];
newInput.forEach((duo) => {
  rightSide.push(duo[1]);
});

const similarityResult = [];

for (let i = 0; i < leftSide.length; i++) {
  const similarity = rightSide.filter((number) => {
    return number === leftSide[i];
  }).length;

  similarityResult.push(leftSide[i] * similarity);

  rightSide = rightSide.filter((number) => {
    return number !== leftSide[i];
  });
}

let finalResult = 0;

for (let index = 0; index < similarityResult.length; index++) {
  finalResult += similarityResult[index];
}

console.log(finalResult);
