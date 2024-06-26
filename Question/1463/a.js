const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  const value = Number(testcases[0]);
  let result = 100000;
  const cal = (n, count) => {
    if (result < count) {
      return;
    }
    if (n === 1) {
      result = Math.min(result, count);
      return count;
    }
    if (n % 3 === 0) {
      cal(n / 3, count + 1);
    }

    if (n % 2 === 0) {
      cal(n / 2, count + 1);
    }

    if (n > 1) cal(n - 1, count + 1);
  };

  cal(value, 0);

  console.log(result);
}

solution(testcases);
