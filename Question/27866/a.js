const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // 정답 작성
  const [str, index] = testcases;
  console.log(str[index - 1]);
}

solution(testcases);
