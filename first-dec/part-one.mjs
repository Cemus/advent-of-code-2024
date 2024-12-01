import input from "./input.mjs";

/**
 * * Part one
 */

const newInput = input.split("\n").map((input) => {
  return input.split("   ");
});

const leftSide = [];
newInput.forEach((duo) => {
  leftSide.push(duo[0]);
});

const rightSide = [];
newInput.forEach((duo) => {
  rightSide.push(duo[1]);
});

leftSide.sort();
rightSide.sort();

let sum = 0;

for (let index = 0; index < leftSide.length; index++) {
  sum +=
    Math.max(leftSide[index], rightSide[index]) -
    Math.min(leftSide[index], rightSide[index]);
}

console.log(sum);
