const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // 정답 작성
  const [length, list] = testcases;
  const numbers = list.split(" ").map((item) => parseInt(item));
  console.log(Math.min(...numbers), Math.max(...numbers));
}

solution(testcases);
