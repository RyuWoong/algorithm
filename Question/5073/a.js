const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // Q. 생성  = [1,2,3]
  const question = testcases
    .slice(0, testcases.length - 1)
    .map((item) => item.split(" ").map((item) => Number(item)));

  const isTriangle = (item) => {
    // 최대 변을 제외한 나머지 변 두개의 합이 최대 변보다 커야함,
    const max = Math.max(...item);
    const left = item.reduce((prev, curr) => prev + curr, 0) - max;
    if (left > max) {
      return true;
    }
    return false;
  };

  const answer = question.map((item) => {
    const [a, b, c] = item;
    if (a === b && b === c) {
      return "Equilateral";
    }

    const check = isTriangle(item);
    if (!check) {
      return "Invalid";
    }

    if (a === b || a === c || b === c) {
      return "Isosceles";
    }

    return "Scalene";
  });

  for (const a of answer) {
    console.log(a);
  }
}

solution(testcases);
