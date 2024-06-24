const fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split("\n");
const testcases = input;

function solution(testcases) {
  // 5와 3으로 나누어 지는지 확인한다.
  // 5로 시도하고, 나머지는 3으로 시도한다.
  // 둘다 안된다면 -1
  const testcase = Number(testcases[0]);
  const fivekg1 = testcase % 5;
  const threekg1 = testcase % 3;

  if (fivekg1 === 0) {
    console.log(testcase / 5);
    return;
  }

  if (fivekg1 % 3 === 0) {
    console.log(Math.floor(testcase / 5) + fivekg1 / 3);
    return;
  }

  if (testcase > 10) {
    if (fivekg1 === 1 || fivekg1 === 4) {
      const fivekgcount = Math.floor(testcase / 5) - 1;
      const threekgcount = (testcase - fivekgcount * 5) / 3;
      console.log(fivekgcount + threekgcount);
      return;
    }
    if (fivekg1 === 2) {
      const fivekgcount = Math.floor(testcase / 5) - 2;
      const threekgcount = (testcase - fivekgcount * 5) / 3;
      console.log(fivekgcount + threekgcount);
      return;
    }
  }
  if (threekg1 === 0) {
    console.log(testcase / 3);
    return;
  }
  console.log(-1);
}

solution(testcases);
