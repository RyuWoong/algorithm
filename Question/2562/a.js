const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // 정답 작성
  const arr = testcases.map((item) => parseInt(item));
  const max = Math.max(...arr);
  console.log(`${max}\n${arr.indexOf(max) + 1}`);
}

solution(testcases);
