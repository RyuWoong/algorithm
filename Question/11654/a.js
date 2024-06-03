const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // 정답 작성
  const [tc] = testcases;
  console.log(tc.charCodeAt());
}

solution(testcases);
