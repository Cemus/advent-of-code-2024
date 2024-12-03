import readInput from "./readInput.mjs";

const testInput = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
`;
const input = await readInput("./input.txt");

const currentInput = testInput;

function extractMul(input) {
  const regex = /mul\((\d+),(\d+)\)/g;

  let match;
  const result = [];
  while ((match = regex.exec(input)) !== null) {
    result.push(match[0]);
  }

  return result;
}

const mulArray = extractMul(currentInput);

const resultArray = [];

mulArray.forEach((formulae) => {
  const regex = /(\d+)/g;
  const numbers = formulae.match(regex);
  console.log(numbers);
  if (numbers && numbers[1]) {
    resultArray.push(parseInt(numbers[0]) * parseInt(numbers[1]));
  }
});

const sum = resultArray.reduce((acc, current) => {
  return acc + current;
}, 0);

console.log(sum);
