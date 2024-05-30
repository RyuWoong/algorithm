const fs = require("fs");
let input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const testcases = input;

function solution(testcases) {
  const tc = testcases[0];
  let line = 1;
  let total = 0;
  while (total + line < tc) {
    total += line;
    line += 1;
  }
  if (line % 2 === 0) {
    console.log(`${tc - total}/${line - (tc - total) + 1}`);
  } else {
    console.log(`${line - (tc - total) + 1}/${tc - total}`);
  }
}

solution(testcases);
