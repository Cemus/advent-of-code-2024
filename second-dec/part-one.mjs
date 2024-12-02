import input from "./input.mjs";

const testInput = [
  `7 6 4 2 1
  1 2 7 8 9
  9 7 6 2 1
  1 3 2 4 5
  8 6 4 4 1
  1 3 6 7 9`,
];

const currentInput = input;

const formattedInput = currentInput[0]
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));

let safeReports = 0;

formattedInput.forEach((line) => {
  console.log(input);
  let isReportSafe = true;
  let isIncreasing = null;

  for (let index = 0; index < line.length; index++) {
    const currentValue = line[index];
    const nextValue = line[index + 1];

    if (nextValue) {
      const operationValue = currentValue - nextValue;
      console.log(operationValue);
      if (operationValue > 0) {
        if (isIncreasing === null || isIncreasing) {
          if (operationValue >= 1 && operationValue <= 3) {
            isIncreasing = true;
          } else {
            isReportSafe = false;
            return;
          }
        } else {
          isReportSafe = false;
          return;
        }
      } else {
        if (isIncreasing === null || !isIncreasing) {
          if (operationValue >= -3 && operationValue <= -1) {
            isIncreasing = false;
          } else {
            isReportSafe = false;
            return;
          }
        } else {
          isReportSafe = false;
          return;
        }
      }
    }
  }
  console.log(isReportSafe);
  if (isReportSafe) {
    safeReports++;
  }
});

console.log(safeReports);
