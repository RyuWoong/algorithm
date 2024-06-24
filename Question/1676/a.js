const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // 팩토리얼 함수
  const test = Number(testcases[0]);
  function factorial(n) {
    if (n === 1 || n == 0) {
      return 1;
    }
    return BigInt(n) * BigInt(factorial(n - 1));
  }
  const value = BigInt(factorial(test)).toString();
  let count = 0;
  while (true) {
    const result = value[value.length - 1 - count];
    if (result === "0") {
      count += 1;
    } else {
      break;
    }
  }
  console.log(count);
}

solution(testcases);
