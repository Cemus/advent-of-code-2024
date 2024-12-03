import readInput from "./readInput.mjs";

const exampleInput = await readInput("./example.txt");
const input = await readInput("./input.txt");

const currentInput = input;

const mulArray = (input) => {
  const result = [];
  const regex = /don't\(\)|do\(\)|mul\((\d+),(\d+)\)/g;

  let match;

  while ((match = regex.exec(input)) !== null) {
    result.push(match[0]);
  }
  return result;
};

let isForbidden = false;
const resultArray = [];

mulArray(currentInput).forEach((formulae) => {
  if (formulae.includes("don't")) {
    isForbidden = true;
    return;
  }
  if (formulae.includes("do")) {
    isForbidden = false;
    return;
  }
  const regex = /(\d+)/g;
  const numbers = formulae.match(regex);

  if (numbers && numbers[1]) {
    if (!isForbidden) {
      resultArray.push(parseInt(numbers[0]) * parseInt(numbers[1]));
    }
  }
});

const sum = resultArray.reduce((acc, current) => {
  return acc + current;
}, 0);

console.log(sum);
