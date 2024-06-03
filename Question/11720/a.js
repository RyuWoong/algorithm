const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // 정답 작성
  const [length, tc] = testcases;
  console.log(tc.split("").reduce((prev, curr) => prev + Number(curr), 0));
}

solution(testcases);
