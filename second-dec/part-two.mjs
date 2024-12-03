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
  let isReportSafe = true;
  let isIncreasing = null;
  let error = 0;
  for (let index = 0; index < line.length; index++) {
    const currentValue = line[index];
    const nextValue = line[index + 1];

    if (nextValue) {
      const operationValue = currentValue - nextValue;
      if (operationValue > 0) {
        if (isIncreasing === null || isIncreasing) {
          if (operationValue >= 1 && operationValue <= 3) {
            isIncreasing = true;
          } else {
            if (error === 0) {
              isIncreasing = true;
              error++;
            } else {
              isReportSafe = false;
              return;
            }
          }
        } else {
          if (error === 0) {
            isIncreasing = true;
            error++;
          } else {
            isReportSafe = false;
            return;
          }
        }
      } else {
        if (isIncreasing === null || !isIncreasing) {
          if (operationValue >= -3 && operationValue <= -1) {
            isIncreasing = false;
          } else {
            if (error === 0) {
              isIncreasing = false;
              error++;
            } else {
              isReportSafe = false;
              return;
            }
          }
        } else {
          if (error === 0) {
            isIncreasing = false;
            error++;
          } else {
            isReportSafe = false;
            return;
          }
        }
      }
    }
  }
  if (isReportSafe) {
    safeReports++;
  }
});

console.log(safeReports);
